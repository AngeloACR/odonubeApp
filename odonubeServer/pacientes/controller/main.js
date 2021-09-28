const model = require("../model/main");
const db = require("../../database");

const mainController = {
  create: async (req, res) => {
    try {
      let query = model.getInsertQuery(req.body);
      let response = await db.queryDb(query.queryString, query.queryData);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  update: async (req, res) => {
    try {
      let query = model.getUpdateQuery(req.body);
      let response = await db.queryDb(query.queryString, query.queryData);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  getAll: async (req, res) => {
    try {
      let query = model.getSelectAllQuery();
      let dbData = await db.queryDb(query.queryString, query.queryData);
      let listKeys = model.getListKeys();
      let data = [];
      dbData.forEach((element) => {
        let aux = Object.keys(element).map((key) => {
          return element[key];
        });
        data.push(aux);
      });
      let response = {
        data,
        listKeys,
      };
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  getOne: async (req, res) => {
    try {
      let query = model.getSelectOneQuery(req.params);
      let response = await db.queryDb(query.queryString, query.queryData);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  deleteAll: async (req, res) => {
    try {
      let query = model.getDeleteAllQuery();
      let response = await db.queryDb(query.queryString, query.queryData);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  deleteOne: async (req, res) => {
    try {
      let query = model.getDeleteOneQuery(req.params);
      let response = await db.queryDb(query.queryString, query.queryData);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
};

module.exports = mainController;
