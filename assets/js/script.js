const myLibrary = [];

function Book() {

    // constructor there
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    this.pages = document.getElementById('pg').value;
    this.isRead = false;

    this.info= function(){
        state = this.isRead ? 'read yet': 'not read yet';
        return this.title + ' by' + this.author + ', '+ this.pages + ' pages, ' + state;
    }

    this.setTitle = (titl) => {
        this.title=titl;
    }

    this.setAuthor = (auth) => {
        this.author=auth;
    }

    this.setPages = (pg) => {
        this.pages=pg;
    }

    this.setIsRead = (isRd) => {
        this.isRead=isRd;
    }
}

function addBookToLibrary() {
    myLibrary.push(new Book());
}

//variables
const books = document.getElementById('books');


//function to display library's books
myLibrary.sort((book1, book2) =>  book1.title > book2.title? 1:-1);

function display(myLibrary){
    books.textContent= '';
    for (let index = 0; index < myLibrary.length; index++) {
        const book = myLibrary[index];
        console.log(book);
        
        state = book.isRead ? 'read yet': 'not read yet';
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        books.appendChild(bookDiv);
        /* let btnDel= document.createElement('button');
        btnDel.classList.add('del');
        btnDel.textContent= 'X';
        bookDiv.appendChild(btnDel); */
        bookDiv.innerHTML += `
            <button class="del">X</button>
            <p> <strong>Title</strong> : ${book.title} </p>
            <p> <strong>Author</strong> : ${book.author} </p>
            <p> <strong>Pages</strong> : ${book.pages} pages</p>
            <p> <strong>State</strong> : ${state} </p>
            <button class="set">Change state</button>
            `;
        bookDiv.onclick=(e)=>{
            switch (e.target.classList.value) {
                case 'del':
                    /* myLibrary.unshift();  */
                    delete myLibrary[index];
                    display(myLibrary);
                    break;

                case 'set':
                    /* myLibrary.unshift();  */
                    book.setIsRead(!book.isRead);
                    display(myLibrary);
                    break;
                default:
                    break;
            }
        }
    };
}


//form for adding new book

//dialog
const dialog = document.querySelector('dialog');

//dialog opening
document.getElementById('newBook').onclick = ()=>{
    dialog.showModal();
}

//submit
document.getElementById('addBook').onclick = ()=>{
    addBookToLibrary();
    display(myLibrary);
    dialog.close();
}
