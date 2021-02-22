const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let tmp = arr.filter((a) => Array.isArray(a));
    if (tmp.length > 0) {
      this.deep++;
      tmp = tmp.flat();
      return 1 + this.calculateDepth(tmp);
    } else {
      return 1;
    }
  }
};
