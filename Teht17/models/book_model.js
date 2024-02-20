const db = require('../database');

const book = {
  //GET-metodit:
  //Haetaan taulusta book kaikki tiedot
  getAll: function(callback) {
    return db.query('select * from book', callback);
  },
  //Haetaan taulusta book kaikki id-numeroa vastaavat tiedot
  getById: function(id, callback) {
    return db.query('select * from book where id_book=?', [id], callback);
  },
  //POST-metodi:
  //Lisätään tauluun book uusi kirja
  add: function(book, callback) {
    return db.query(
      'insert into book (name,author,isbn) values(?,?,?)',
      [book.name, book.author, book.isbn],
      callback
    );
  },
  //DELETE-metodi:
  //Poistetaan taulusta book id-numeroa vastaava kirja
  delete: function(id, callback) {
    return db.query('delete from book where id_book=?', [id], callback);
  },
  //PUT-metodi
  //Päivitetään taulussa book olevia, id-numeroa vastaavia tietoja
  update: function(id, book, callback) {
    return db.query(
      'update book set name=?,author=?, isbn=? where id_book=?',
      [book.name, book.author, book.isbn, id],
      callback
    );
  }
};
module.exports = book;