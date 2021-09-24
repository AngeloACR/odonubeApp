const environment = require("../../config/environment");
const db = require("../../database");

module.exports.getConfig = () => {
  return {
    table: "PhysiciansInformation",
    dbKeys: [
      "DoctorName",
      "Speciality",
      "Qualification",
      "Address",
      "ContactNumber",
      "CommencementDate",
    ],
    frontKeys: [
      "name",
      "speciality",
      "qualification",
      "address",
      "contact",
      "date",
    ],
  };
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
  let tableConfig = this.getConfig();
  let tableObject = this.getObject(data);
  let queryString = "SELECT * FROM ?? WHERE ?? = ?";
  let queryData = [tableConfig.table];
  let keyArray = [];
  let valueArray = [];
  for (var item in tableObject) {
    if (tableObject.hasOwnProperty(item)) {
      keyArray.push(item);
      valueArray.push(tableObject[item]);
    }
  }
  queryData.concat(keyArray).concat(valueArray);
  return { queryString, queryData };
};
module.exports.getDeleteQuery = async (data) => {
    let tableConfig = this.getConfig();
    let tableObject = this.getObject(data);
    let queryString = "DELETE * FROM ?? WHERE ?? = ?";
    let queryData = [tableConfig.table];
    let keyArray = [];
    let valueArray = [];
    for (var item in tableObject) {
      if (tableObject.hasOwnProperty(item)) {
        keyArray.push(item);
        valueArray.push(tableObject[item]);
      }
    }
    queryData.concat(keyArray).concat(valueArray);
    return { queryString, queryData };
  
};
module.exports.getUpdateQuery = async (data) => {};
module.exports.getInsertQuery = async (data) => {};

const User = module.exports;
