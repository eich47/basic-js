const CustomError = require("../extensions/custom-error");

const chainMaker = {
  container: [],

  getLength() {
    return this.container.length;
  },
  addLink(value) {
    this.container.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position > this.container.length) {
      this.container = [];
      throw new Error();
    }
    const pos = position - 1;
    this.container = this.container.filter((item, i) => {
      return i !== pos;
    });
    return this;
  },
  reverseChain() {
    this.container.reverse();
    return this;
  },
  finishChain() {
    const res = this.container.join("~~");
    this.container = [];
    return res;
  },
};

module.exports = chainMaker;
