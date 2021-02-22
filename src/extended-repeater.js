const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  if (typeof str !== "string") {
    str = String(str);
  }
  if (addition !== "string") {
    addition = String(addition);
  }

  let additionalPart = ``;
  const additionalArr = new Array(additionRepeatTimes);
  additionalArr.fill(addition);
  additionalPart = additionalArr.join(additionSeparator);

  const arr = new Array(repeatTimes);
  arr.fill(`${str}${additionalPart}`);

  const res = arr.join(separator);
  return res;
};
