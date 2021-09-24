const environment = require("../../config/environment");
const db = require("../../database");
const Patient = module.exports;
Patient.getPatientInformationConfig = () => {
  return [
    {
      table: "PatientInformation",
      dbKeys: [
        "PatientName",
        "ParentNames",
        "Gender",
        "Age",
        "Occupation",
        "Address",
        "ContactNo",
        "Reference",
        "DateOfEnroll",
        "Photo_File_Name",
      ],
      frontKeys: [
        "name",
        "parentsNames",
        "gender",
        "age",
        "occupation",
        "address",
        "contact",
        "reference",
        "date",
        "photoPath",
      ],
    },
  ];
};
module.exports.getObject = async (data) => {
  let tableConfig = this.getConfig();
  let keyLength = tableConfig.dbKeys.length;
  let object = {};
  for (let i = 0; i < keyLength; i++) {
    let dbKey = table.dbKeys[i];
    let frontKey = table.frontKeys[i];
    object[dbKey] = data[frontKey];

}
return object;
};


module.exports.getSelectQuery = async (data) => {

}
module.exports.getInsertQuery = async (data) => {}
module.exports.getUpdateQuery = async (data) => {}
module.exports.getDeleteQuery = async (data) => {}
return Patient;