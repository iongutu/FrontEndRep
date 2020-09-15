let favoriteBook = [];
function addFavoriteBook(bookName)
{
  if(!bookName.includes("Great"))
  {
    favoriteBook.push(bookName);
  }
}
addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
function printFavoriteBooks(){
  console.log(`The favorite Books are ${favoriteBook.length}`);
  for(let book of favoriteBook)
  {
    console.log(`${book}`);
  }
}


printFavoriteBooks()