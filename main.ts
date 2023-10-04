// Primitive Types Declaration
const bookName: string =
  'Design Patterns: Elements of Reusable Object-Oriented Software';
let pages: number = 617;
const isPublished: boolean = true;

// Non-Primitive Types Declaration
const authors: string[] = [
  'Erich Gamma',
  'John Vlissides',
  'Richard Helm',
  'Ralph Johnson',
];

type Book = {
  name: string;
  pages: number;
  isPublished: boolean;
  authors: string[];
}

const book: Book = {
  name: 'Design Patterns: Elements of Reusable Object-Oriented Software',
  pages: 617,
  isPublished: true,
  authors: ['Erich Gamma', 'John Vlissides', 'Richard Helm', 'Ralph Johnson'],
};

// Function declaration
function printBook(
  nameOfTheBook: string,
  numberOfPages: number,
  authors: string[]
): void {
  console.log('Book Name: ', nameOfTheBook);
  console.log('Number of Pages: ', numberOfPages);
  console.log('Written By : ', authors.join(','));
}

function printBookByObj(book: Book): void {
  console.log('Book Name: ', book.name);
  console.log('Number of Pages: ', book.pages);
  console.log('Written By : ', book.authors.join(','));
}

function getCompletionTimeEstimation(book: Book): number {
  const timeInHours = book.pages / 20;
  // aprx 30.85 hours
  return timeInHours;
}

export {};
