// Primitive Types Declaration
const bookName =
  'Design Patterns: Elements of Reusable Object-Oriented Software';
let pages = 617;
const isPublished = true;

// Non-Primitive Types Declaration
const authors = [
  'Erich Gamma',
  'John Vlissides',
  'Richard Helm',
  'Ralph Johnson',
];

const book = {
  name: 'Design Patterns: Elements of Reusable Object-Oriented Software',
  pages: 617,
  isPublished: true,
  authors: ['Erich Gamma', 'John Vlissides', 'Richard Helm', 'Ralph Johnson'],
};

// Function declaration
function printBook(nameOftheBook, numberOfPages, authors) {
  console.log('Book Name: ', nameOftheBook);
  console.log('Number of Pages: ', numberOfPages);
  console.log('Written By : ', authors.join(','));
}

function printBookByObj(book) {
  console.log('Book Name: ', book.name);
  console.log('Number of Pages: ', book.pages);
  console.log('Written By : ', book.authors.join(','));
}

function getCompletionTimeEstimation(book) {
  const timeInHours = book.pages / 20;
  // aprx 30.85 hours
  return timeInHours;
}
