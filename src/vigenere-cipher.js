const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirectMachine) {
    this.isDirectMachine = isDirectMachine;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
  }
}

module.exports = VigenereCipheringMachine;
