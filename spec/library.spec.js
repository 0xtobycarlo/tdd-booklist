const Book = require("../src/book.js");
const Library = require("../src/library.js");

describe("Library", () => {
  let library;

  beforeEach(() => {
    library = new Library();
  });

  it("addBook function + lookUpBooks", () => {
    // set up
    const expected = new Book(
      "Calculus 5e - Early Transcendentals",
      "James Stewart",
      "education",
      12.5
    );
    const expectedTwo = [
      new Book(
        "Calculus 5e - Early Transcendentals",
        "James Stewart",
        "education",
        12.5
      ),
      new Book("The Feynmann Lectures", "MIT", "education", 8.5),
      new Book("The Life of Senna", "Tom Rubython", "sports", 7.5),
    ];

    // execute
    const result = library.addBook(
      "Calculus 5e - Early Transcendentals",
      "James Stewart",
      "education"
    );
    library.addBook("The Feynmann Lectures", "MIT", "education", 8.5);
    library.addBook("The Life of Senna", "Tom Rubython", "sports", 7.5);
    const resultTwo = library.lookUpBooks();

    // verify
    expect(result).toEqual(result);
    expect(resultTwo).toEqual(resultTwo);
  });

  it("get books - category", () => {
    // set up
    const expected = [
      new Book(
        "Calculus 5e - Early Transcendentals",
        "James Stewart",
        "education",
        12.5
      ),
      new Book("The Feynmann Lectures", "MIT", "education", 8.5),
    ];

    // execute
    library.addBook(
      "Calculus 5e - Early Transcendentals",
      "James Stewart",
      "education",
      12.5
    );
    library.addBook("The Feynmann Lectures", "MIT", "education", 8.5);
    library.addBook("The Life of Senna", "Tom Rubython", "sports", 7.5);
    const result = library.getBooksCategory("education");

    // verify
    expect(result).toEqual(expected);
  });

  it("retrieve books in same author", () => {
    // set up
    const expected = [
      new Book("Multivariable Calculus", "James Stewart", "education", 12.5),
      new Book(
        "Calculus 5e - Early Transcendentals",
        "James Stewart",
        "education",
        12.5
      ),
    ];

    // execute
    library.addBook(
      "Multivariable Calculus",
      "James Stewart",
      "education",
      12.5
    );
    library.addBook(
      "Calculus 5e - Early Transcendentals",
      "James Stewart",
      "education",
      12.5
    );
    library.addBook("The Life of Senna", "Tom Rubython", "sports", 7.5);
    const result = library.getBooksAuthor("James Stewart");
    // verify
    expect(result).toEqual(expected);
  });

  it("remove book", () => {
    // set up
    const expected = new Book(
      "The Life of Senna",
      "Tom Rubython",
      "sports",
      7.5
    );

    // execute
    library.addBook(
      "Calculus 5e - Early Transcendentals",
      "James Stewart",
      "education",
      12.5
    );
    library.addBook(
      "Multivariable Calculus",
      "James Stewart",
      "education",
      12.5
    );
    library.addBook("The Feynmann Lectures", "MIT", "education", 8.5);
    library.addBook("The Life of Senna", "Tom Rubython", "sports", 7.5);
    const result = library.removeBook("The Life of Senna", "Tom Rubython");

    // verify
    expect(result).toEqual(expected);
  });

  it("edit book category", () => {
    // set up
    const expected = new Book("The Feynmann Lectures", "MIT", "science", 8.5);

    // execute
    library.addBook(
      "Calculus 5e - Early Transcendentals",
      "James Stewart",
      "education",
      12.5
    );
    library.addBook(
      "Multivariable Calculus",
      "James Stewart",
      "education",
      12.5
    );
    library.addBook("The Feynmann Lectures", "MIT", "science", 8.5);
    library.addBook("The Life of Senna", "Tom Rubython", "sports", 7.5);
    const result = library.editBookCategory(
      "The Feynmann Lectures",
      "MIT",
      "science"
    );

    // verify
    expect(result).toEqual(expected);
  });
});
