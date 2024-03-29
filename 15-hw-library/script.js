const addBook = document.getElementById('addBook');
const printBooks = document.getElementById('printBooks');
const library = [];


addBook.onclick = function () {
    //TODO Homework Collect data from inputs,
    // create new book and add new book to library if this book unique

    const isbn = document.getElementById('isbn').value.trim();
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const year = document.getElementById('year').value.trim();

    if (isbn && title && author && year) {
        const bookExists = findBook(library, isbn);
        if (bookExists === -1) {
            const book = new Book(isbn, title, author, year);
            library.push(book);
            isbn.value = '';
            title.value = '';
            author.value = '';
            year.value = '';
        } else {
            alert('Book is already exists!');
        }
    }
    else {
        alert('Please fill all fields');
    }
}

printBooks.onclick = function () {
    //TODO create ordered list, add all books from libriry
    // to list as list items. and add list to div with id = result.
    // if div with id = result not emplty, then replace its child
    // Hint: see Clock application

    const resultDiv = document.getElementById('result');

    if (library.length === 0) {
        resultDiv.textContent = 'Library is empty';
    } else {
        const ul = document.createElement('ul');

        for (let i = 0; i < library.length; i++) {
            const li = document.createElement('li');
            li.textContent = library[i].toString();
            ul.appendChild(li);
        }

        if (resultDiv.firstElementChild) {
            resultDiv.replaceChild(ul, resultDiv.firstElementChild);
        } else {
            resultDiv.appendChild(ul);
        }
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
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`;
    }
}