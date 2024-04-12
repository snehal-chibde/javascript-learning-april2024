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
function getBooksData(books){

  const booksData  = books.map(book => `${book.genres}`);
  // console.log(booksData);

  let gen = [];
  let str= ""
  for(let i=0; i<booksData.length; i++) {
    console.log("iuiiiiiiii",i, booksData.length);

    if(i != (booksData.length-1)) {
      console.log('in if');
      str += booksData[i] + ",";
    }
  }
  console.log(booksData.length);
  console.log(str);
  gen = str.split(',');
  console.log(gen);
  function countOccurrences(arr) {
    return arr.reduce(function(a, b){
      a[b] = a[b] + 1 || 1
      return a;
    }, {});
  }
  console.log(countOccurrences(gen));
}
getBooksData(books);

// fiction: 3
// mystery: 1
// thriller: 1


// Find Authors with Most Books: Write a function to identify the author(s) with the most books published. Return an array of objects, each containing an author's name and their total number of books.
// const authorData = books.map(book => `${book.author}:[${book.title}]`)
// console.log(authorData);



function findMostPublishedAuthors(books) {
  const authorCounts = books.reduce((acc, book) => {
    acc[book.author] = (acc[book.author] || 0) + 1;
    return acc;
  }, {});

  const maxCount = Math.max(...Object.values(authorCounts));

  return Object.entries(authorCounts)
    .filter(([author, count]) => count === maxCount)
    .map(([author, count]) => ({ author, count }));
}

console.log(findMostPublishedAuthors(books));


const authorCounts = books.reduce((acc, book) => {
  const existingAuthor = acc.find(author => author.name == book.author);
  console.log(existingAuthor);
  if (existingAuthor) {
    existingAuthor.count++;
  } else {
    acc.push({ name: book.author, count: 1 });
  }
  return acc;
}, []);

console.log(authorCounts);






function countBooksByGenre(books) {
  const genreCounts = {};

  // Loop through each book
  books.forEach(book => {
    // Loop through genres of each book
    book.genres.forEach(genre => {
      // Increment count for genre or initialize to 1 if not present
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });
  });

  return genreCounts;
}

const genreCounts = countBooksByGenre(books);
console.log(genreCounts);

// let authorBookData = [];
//   let str= "";
//   for(let i=0; i<authorData.length; i++) {
//     str += authorData[i] + ",";
//   }
//   console.log(str);
//   authorBookData = str.split(',');
//   console.log(authorBookData);
// const  bookTitle = books.map(book => `${book.title}`)
// console.log(bookTitle);
//AuthorX: 2
//Author Y:1
//Athor Z: 1


// const booksByXauthor = books.filter(function(book){
//   if(book.author == 'Author X'){
//     return true;
//   }
// });
// console.log(booksByXauthor);
