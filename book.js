        //######### A BOOK LIBRARY


        let bookLibrary = [];


        // ADD NEW BOOK 

        function addBook(title, author, year){
            let id = bookLibrary.length +1;

            title = title.toUpperCase() ;
            author = author.toUpperCase();

            let newBook = {
                title: title,
                id: id,
                author: author,
                year: year
            };

            bookLibrary.push(newBook)
        }

       

        addBook("RICHEST MAN IN BABYLON", "GEORGE S. CLASON", 1926)
        addBook("atomic habits", "james clear", 2018)
        addBook("man's search for meaning", "viktor e. frankl", 1946)
        addBook("mindset: the new psychology of success", "carol s. dweck", 2006)
        addBook("the alchemist", "paulo coelho", 1988)
        addBook("the power of now", "eckhart tolle", 1997)
        addBook("meditations", "marcus aurelius", "170 and 180 AD")
        addBook("emotional intelligence", "daniel goleman", 1995)
        addBook("daring greatly", "brene brown", 2012)
        addBook("thinking, fast and slow", "daniel kahneman", 2011)
        addBook("the 7 habits of highly effective people", "stephen r. covey", 1989)


        console.log(bookLibrary);
        
        console.log("-----------------------------------------------");



        // DELETE A BOOK

        function deleteBook(id){
            bookLibrary.splice(id -1, 1)

        }

        deleteBook(5)

        console.log("AFTER DELETING: ", bookLibrary);



        console.log("-----------------------------------------------");



        // UPDATE A BOOK

            function updateBook(title,  author, year) {
            title = title.toUpperCase();
            author = author.toUpperCase();
            let found = false;
    
            for (let i = 0; i < bookLibrary.length; i++) {
                if (bookLibrary[i].title === title) {
                    console.log("Book already exists:", bookLibrary[i]);
                    found = true;
                    break;
                }
            }
        
            if (!found) {
                addBook(title, author, year);
                console.log(bookLibrary);
                
            }
        }

        updateBook("habits", "james", 2098)

        console.log("-----------------------------------------------");


            // GET A BOOK 

            function getBook(search) {
                search = search.toUpperCase();
                let found = false;
            
                for (let i = 0; i < bookLibrary.length; i++) {
                    if (bookLibrary[i].title.toUpperCase() === search) {
                        console.log("Book Found:", bookLibrary[i]);
                        found = true;
                        break; 
                    }
                }
            
                if (!found) {
                    console.log("Book Not Available");
                }
            }
            

            getBook("the power of now")
                


    console.log("-----------------------------------------------");
        
        

        


        
