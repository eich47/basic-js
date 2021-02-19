const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date)) {
    throw new Error("THROWN");
  }

  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error("THROWN");
  }

  const month = date.getMonth();
  if (month <= 1) {
    return "winter";
  } else if (month <= 4) {
    return "spring";
  } else if (month <= 7) {
    return "summer";
  } else if (month <= 10) {
    return "autumn";
  } else {
    return "winter";
  }
};
