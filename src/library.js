
function createLibrary (libraryName) {
  var denverLibrary = {};
  denverLibrary.name = libraryName;
  denverLibrary.shelves = {
    fantasy: [],
    fiction: [],
    nonFiction: [],

  };
  return denverLibrary;
}

function addBook(denverLibrary, book) {
  if (book.genre === 'fantasy') {
    denverLibrary.shelves.fantasy.push(book);
  } else if (book.genre === 'fiction') {
    denverLibrary.shelves.fiction.push(book);
  } else if (book.genre === 'nonFiction') {
    denverLibrary.shelves.nonFiction.push(book);
  }
}























module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  // takeStock
};