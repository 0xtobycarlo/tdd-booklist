const Book = require("../src/book.js");

class Library {
  constructor() {
    this.repertoire = [];
    this.booksInCategory = [];
    this.booksSameAuthor = [];
  }

  addBook(title, author, category, price) {
    const book = new Book(title, author, category, price);
    this.repertoire.push(book);
    return book;
  }

  lookUpBooks() {
    return this.repertoire;
  }

  getBooksCategory(category) {
    for (let i = 0; i < this.repertoire.length; i++) {
      if (this.repertoire[i].category === category) {
        this.booksInCategory.push(this.repertoire[i]);
      }
    }
    return this.booksInCategory;
  }

  getBooksAuthor(author) {
    for (let i = 0; i < this.repertoire.length; i++) {
      if (this.repertoire[i].author === author) {
        this.booksSameAuthor.push(this.repertoire[i]);
      }
    }
    return this.booksSameAuthor;
  }

  removeBook(title, author) {
    for (let i = 0; i < this.repertoire.length; i++) {
      if (
        this.repertoire[i].title === title &&
        this.repertoire[i].author === author
      ) {
        const book = this.repertoire[i];
        this.repertoire.splice(i, 1);
        return book;
      }
    }
  }

  editBookCategory(title, author, category) {
    for (let i = 0; i < this.repertoire.length; i++) {
      if (
        this.repertoire[i].title === title &&
        this.repertoire[i].author === author
      ) {
        this.repertoire[i].category = category;
        return this.repertoire[i];
      }
    }
  }
}

module.exports = Library;
