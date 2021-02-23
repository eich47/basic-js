const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    isNaN(Number(sampleActivity)) ||
    !sampleActivity.trim() ||
    !!sampleActivity
  ) {
    return false;
  }

  const sampleActivityNum = +sampleActivity;

  return Math.ceil(
    (Math.log(15 / sampleActivityNum) / 1.22) * Math.pow(10, -4)
  );
};
