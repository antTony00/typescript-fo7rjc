interface Book {
  name: string;
  pages: number;
  isPublished: boolean;
  authors: string[];
}

class Library {
  totalBooksSize: number;

  private store: Book[] = [];

  constructor(totalBooks: number) {
    this.totalBooksSize = totalBooks;
  }

  addBook(book: Book): boolean {
    // 1. Library should not store books more than assigned capacity.
    // 2. Library should not store same book multiple times.

    if (this.getTotalStoredBooks() >= this.totalBooksSize) {
      console.log('Library exceeded capacity');
      return false;
    }

    if (this.hasThisBook(book)) {
      console.log('Book ' + book.name + ' is already added');
      return false;
    }

    this.store.push(book);
      console.log('Book ' + book.name + ' is added');
      return true;
  }

  searchBook(bookName: string): Book | null {
    const result = this.store.find((book) => book.name === bookName);
    return result || null;
  }

  deleteBook(bookName: string): boolean {
    const bookIndex = this.store.findIndex((book) => book.name === bookName);

    if (bookIndex === -1) {
      console.log('Book ' + bookName + ' is not available to delete');
      return false;
    }

    this.store.splice(bookIndex, 1);
      console.log('Book ' + bookName + ' is deleted');
      return true;
  }

  getAvailableBooks(): string {
    return this.store.map((book) => book.name).join(',\n');
  }

  getTotalStoredBooks(): number {
    return this.store.length;
  }

  private hasThisBook(thisBook: Book): boolean {
    const result = this.store.find((book) => book.name === thisBook.name);
    return result !== undefined;
  }
}

// Usage
const book1: Book = {
  name: 'Design Patterns: Elements of Reusable Object-Oriented Software',
  pages: 617,
  isPublished: true,
  authors: ['Erich Gamma', 'John Vlissides', 'Richard Helm', 'Ralph Johnson'],
};

const book2: Book = {
  name: 'Clean Code',
  pages: 900,
  isPublished: true,
  authors: ['Robert Cecil Martin'],
};

const book3: Book = {
  name: 'Head First Java',
  pages: 560,
  isPublished: true,
  authors: ['Kathy Sierra', 'Bert Bates'],
};

const library = new Library(100);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book3);
library.addBook(book3);

console.log('Available Books: ', library.getAvailableBooks());

console.log('Search Books: ', library.searchBook('Head First Java')?.name);

library.deleteBook('Head First Java');
console.log('Available Books After Deletion: ', library.getAvailableBooks());

export {};
