const books = [
  { title: "Book A", author: "Author X", year: 1990, genres: ["fiction", "mystery"] },
  { title: "Book B", author: "Author Y", year: 1985, genres: ["non-fiction", "history"] },
  { title: "Book C", author: "Author X", year: 2000, genres: ["fiction", "thriller"] },
  { title: "Book D", author: "Author Z", year: 2010, genres: ["fiction", "mystery"] },
  // Add more books as needed
];
// Create a function that accepts the books array and a year, and returns an array of books published after that year.
function getBooksData(books,year){
  const booksData  = books.filter(book => book.year > year)
  console.log(booksData);
}
getBooksData(books, 1990);

// Count Books by Genre: Implement a function that takes the books array as input and returns an object where each key is a genre, and its value is the count of books in that genre.
// Output should be:
// fiction: 3
// mystery: 1
// thriller: 1

// getBooksData(books);
function countBooksByGenre(books) {
  const genreCounts = {};
  books.forEach(book => {
    // Loop through genres of each book as genres is an array
    book.genres.forEach(genre => {
      // Increment count for genre or initialize to 1 if not present
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });
  });

  return genreCounts;
}

const genreCounts = countBooksByGenre(books);
console.log('Count of books by genre:', genreCounts);


// Find Authors with Most Books: Write a function to identify the author(s) with the most books published. Return an array of objects, each containing an author's name and their total number of books.
// Below function is to get author name with book count.
//AuthorX: 2
//Author Y:1
//Athor Z: 1

const authorCounts = books.reduce((acc, book) => {
  const existingAuthor = acc.find(author => author.name == book.author);
  if (existingAuthor) {
    existingAuthor.count++;
  } else {
    acc.push({ name: book.author, count: 1 });
  }
  return acc;
}, []);

console.log("Author name with number of books published:",authorCounts);

//Combine all of above to generate a report

function generateReport() {
  const reportObject = {};
  const totalNumberOfBooks = books.length;
  const bookAfterYear = books.filter(book => book.year > '2000');
  reportObject['totalNumberOfBooks'] = totalNumberOfBooks;
  reportObject['booksByGenre'] = countBooksByGenre(books);
  reportObject['bookAfterYear'] = bookAfterYear;
  console.log(reportObject);
}

generateReport();
