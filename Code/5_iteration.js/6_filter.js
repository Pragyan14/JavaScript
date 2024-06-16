// filter can return values

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numberLargerThanFour = numbers.filter((num) => {
  return num > 4;
});

console.log(numberLargerThanFour);

const books = [
  {
    title: "Book one",
    pages: 92,
    publish: 1920,
    genre: "Sc-fi",
  },
  {
    title: "Book two",
    pages: 192,
    publish: 1968,
    genre: "History",
  },
  {
    title: "Book three",
    pages: 102,
    publish: 1959,
    genre: "Sc-fi",
  },
  {
    title: "Book four",
    pages: 78,
    publish: 2000,
    genre: "Comedy",
  },
  {
    title: "Book five",
    pages: 30,
    publish: 1979,
    genre: "Poem",
  },
];

let filterdBooks = books.filter((book) => {
  return book.pages > 100 && book.genre === "Sc-fi";
});

console.log(filterdBooks);
