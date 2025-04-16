let library = [];
let bookId = 100;

function addBook (author, title){
    const books = {
        author: author,
        title: title,
        bookId: bookId ++
    }
    library.push(books)
    console.log(`${title} by ${author} has been added to the library`)
    }
    addBook("peter", "Get money")
    addBook("jerry", "Get money")

    function currentBooks(){
        console.log(library)
    }

    currentBooks(library)
    
    function getBookById (id){
        return library.find(books => books.bookId === id)
    }
    console.log(getBookById(100))