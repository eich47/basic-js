const CustomError = require("../extensions/custom-error");

module.exports = function transform(arrSeq) {
  if (!(arrSeq instanceof Array)) {
    throw new Error();
  }

  const sequences = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  let result = [];

  let arr = arrSeq.filter((item) => true);

  for (let idx = 0; idx < arr.length; idx++) {
    const item = arr[idx];

    if (typeof item === "number") {
      result.push(item);
    } else if (typeof item === "string") {
      if (item === "--discard-next") {
        const nextInd = idx + 1;
        if (nextInd !== undefined) {
          idx++;
        }
      } else if (item === "--discard-prev") {
        if (idx !== 0) {
          result.pop();
        }
      } else if (item === "--double-next") {
        const nextEl = arr[idx + 1];
        if (nextEl !== undefined && !(nextEl instanceof Array)) {
          result.push(nextEl);
        }
      } else if (item === "--double-prev") {
        const prevEl = arr[idx - 1];
        if (prevEl !== undefined && !(prevEl instanceof Array)) {
          result.push(prevEl);
        }
      } else {
        result.push(item);
      }
    } else {
      result.push(item);
    }
  }
  return result;
};
