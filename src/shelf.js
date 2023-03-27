function shelfBook(title, shelf) {
  // shelfPos.unshift(title);
  if (shelf.length < 3) {

    shelf.unshift(title)
  }
  return shelfBook;

}


function unshelfBook(title, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf.splice(i, 1);
      return;
    }
  }
}


















module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};