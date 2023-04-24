const mysql = require('mysql')

const con = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: "root",
    password: "",
    database: "talent"
})

const genericMysql = (query) => {
    return new Promise((resolve, reject) => {
      con.getConnection((error, connection) => {
        if (error) {
          reject(error);
          return;
        }
        connection.query(query, (err, result, fields) => {
          if (err) {
            reject(err);
            connection.destroy()
            return;
          }
          resolve(result);
          connection.destroy()
        });
      });
    });
  };
  
  module.exports = { genericMysql }