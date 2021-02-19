const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false;
  }
  const memberList = members.filter((memberName) => {
    if (typeof memberName !== "string") {
      return false;
    }
    return memberName;
  });

  const res = memberList.map((memberName) => {
    const splittedNames = memberName.trim().split(" ");

    const nameMember = splittedNames[0];

    return nameMember[0].toUpperCase();
  });

  return res.sort().join("");
};
