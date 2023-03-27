
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


  function checkoutBook(denverLibrary, book, genre) {
    var bookFound = false;
  for ( i = 0; i < denverLibrary.shelves[genre].length; i++) {
    if (denverLibrary.shelves[genre][i].title === book) {
      denverLibrary.shelves[genre].splice(i, 1);
      bookFound = true;
      break;
    }
  }
  
  if (bookFound) {
    return `You have now checked out ${book} from the ${denverLibrary.name}.`;
  } else {
    return `Sorry, there are currently no copies of ${book} available at the ${denverLibrary.name}.`;
  }
  }


  
  function takeStock(auroraLibrary, genre) {
    
    auroraLibrary = 'Aurora Public Library';
    var bookAmount = [2];


    return `There are a total of ${bookAmount} ${genre} books at the ${auroraLibrary}.`;
  //  for (i = 0; i < denverLibrary.shelves.length; i++) {

    // bookAmount++;
  }
  























module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};