
const library = [];
let inputData = prompt('Enter book data separate by ";"');

while (inputData) {
    
    const bookData = inputData.split(';');
    const isbn = bookData[0];

    const newBook = new Book(isbn, bookData[1], bookData[2], bookData[3]);
    addBookToLibrary(library, newBook);
    inputData = prompt('Enter book data separate by ";"');
}

printLibrary(library);

function printLibrary(library) {
    for (const book of library) {
        console.log(book.toString());
    }
}

function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i; 
        }
    }
    return -1; 
}


function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
}

function addBookToLibrary(library, book) {
    const existingBookIndex = findBook(library, book.isbn);
    if (existingBookIndex === -1) {
        library.push(book);
    }
}