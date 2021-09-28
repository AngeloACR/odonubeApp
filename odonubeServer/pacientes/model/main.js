const environment = require("../../config/environment");
const db = require("../../database");

const mainModel = {
  getConfig: () => {
    return {
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
        listKeys: [
          "Id",
          "Nombre",
          "Parientes",
          "Género",
          "Edad",
          "Ocupación",
          "Dirección",
          "Contacto",
          "Referencia",
          "Fecha de ingreso",
          "Foto",
        ],
      }
  },
  getListKeys:(data) =>{
    let tableConfig = mainModel.getConfig();
    return tableConfig.listKeys;
  },

  getObject: (data) => {
    let tableConfig = mainModel.getConfig();
    let keyLength = tableConfig.dbKeys.length;
    let object = {};
    for (let i = 0; i < keyLength; i++) {
      let dbKey = tableConfig.dbKeys[i];
      let frontKey = tableConfig.frontKeys[i];
      object[dbKey] = data[frontKey];
    }
    return object;
  },
  getSelectOneQuery: (data) => {
    let tableConfig = mainModel.getConfig();
    let tableObject = mainModel.getObject(data);
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
  },
  getSelectAllQuery: () => {
    let tableConfig = mainModel.getConfig();
    let queryString = "SELECT * FROM ??";
    let queryData = [tableConfig.table];
    return { queryString, queryData };
  },
  getDeleteOneQuery: (data) => {
    let tableConfig = mainModel.getConfig();
    let tableObject = mainModel.getObject(data);
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
  },
  getDeleteAllQuery: () => {
    let tableConfig = mainModel.getConfig();
    let queryString = "DELETE * FROM ??";
    let queryData = [tableConfig.table];
    return { queryString, queryData };
  },
  getUpdateQuery: (data) => {},
  getInsertQuery: (data) => {

    let tableConfig = mainModel.getConfig();
    let tableObject = mainModel.getObject(data);
    let queryString = 'INSERT INTO ?? (??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    let queryData = [tableConfig.table];
    
    let keyArray = ["Patient_ID"];
    let valueArray = [Date.now()];
    for (var item in tableObject) {
      if (tableObject.hasOwnProperty(item)) {
        keyArray.push(item);
        valueArray.push(tableObject[item]);
      }
    }
    queryData = queryData.concat(keyArray).concat(valueArray);
    return { queryString, queryData };
  },};

module.exports = mainModel;
