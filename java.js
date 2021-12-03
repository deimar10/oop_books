/*const book = new Book('TÕde ja Õigus', 'Tammsaare', '123456' )
console.log(book)
for (let key in book) {
    console.log(key + " " + book[key])
}
*/

// UI object
const ui = new UI()
const ls = new LS()



const form = document.querySelector('form');
form.addEventListener('submit', addBook);
document.addEventListener('DOMContentLoaded', getBooksFromLocalStorage);

function getBooksFromLocalStorage() {
    let books = ls.getData('books')
   for (let i = 0; i < books.length; i++){
       let book = books[i];
       ui.addBook(book)
   }
}


function addBook(event){
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    //create book
    const book = new Book(title, author, isbn)
    // add book value to visual by UI object
    ui.addBook(book)
    ls.addBook(book)


    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";

    event.preventDefault();
}