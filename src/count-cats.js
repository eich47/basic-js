const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  const searchString = "^^";
  let countCats = 0;
  backyard.forEach((item) => {
    let idx = item.indexOf(searchString);
    while (idx !== -1) {
      countCats++;
      idx = item.indexOf(searchString, idx + 1);
    }
  });
  return countCats;
};
