function  createTitle(title) {
 return `The ${title}`
}
 




function buildMainCharacter(name, age, pronouns) {
    var buildMain = {
      name: name,
      age: age,
      pronouns: pronouns
    }
    return buildMain;
  };
   



function saveReview (review, reviews) {
  // reviews.push(review);
  console.log(reviews);
  if (reviews.indexOf(review) > -1) {

  } else {
    return reviews.push(review);
  }
  }
  // return reviews.push(review);






function calculatePageCount(bookTitle) {
 
  return bookTitle.length * 20
}


function writeBook (bookTitle, bookCharacter, genre) {
  var book = {}
  book.title = bookTitle
  book.mainCharacter = bookCharacter
  book.pageCount = calculatePageCount(bookTitle)
  book.genre = genre
 
  return book
}


function editBook(bookObj) {
  bookObj.pageCount = bookObj.pageCount * .75
}






 module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}