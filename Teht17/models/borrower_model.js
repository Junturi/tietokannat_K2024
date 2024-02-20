const db = require('../database');

const book = {
  //GET-metodit
  getAll: function(callback) {
    return db.query('select * from borrower', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from borrower where id_borrower=?', [id], callback);
  },
  //POST-metodi
  add: function(borrower, callback) {
    return db.query(
      'insert into borrower (fname,lname,streetaddress) values(?,?,?)',
      [borrower.fname, borrower.lname, borrower.streetaddress],
      callback
    );
  },
  //DELETE-metodi
  delete: function(id, callback) {
    return db.query('delete from borrower where id_borrower=?', [id], callback);
  },
  //PUT-metodi
  update: function(id, borrower, callback) {
    return db.query(
      'update borrower set fname=?,lname=?, streetaddress=? where id_borrower=?',
      [borrower.fname, borrower.lname, borrower.streetaddress, id],
      callback
    );
  }
};
module.exports = book;