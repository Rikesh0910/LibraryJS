const myLibrary = [];

class Book {
  constructor(name) {
    this.name = name;
  }

  show() {
    console.log("Name is: " + this.name);
  }
}

function addingToLibrary() {
  const bookName = prompt("What is the name of the book?");
  const bk1 = new Book(bookName);
  myLibrary.push(bk1);
  console.log(myLibrary);
  alert("Book has been added to the library!");
}

addingToLibrary();