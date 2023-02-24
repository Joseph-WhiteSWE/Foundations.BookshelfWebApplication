let library = new Bookshelf()

for (const bookinBookData of bookData) {
    let book = new Book
        (
            bookinBookData.author,
            bookinBookData.language,
            bookinBookData.subject,
            bookinBookData.title,
        )
    book.comments = "" // new


    library.addBookToBookshelf(book)
}
library.render()

let addGeBtn = document.getElementById('gr-btn')
addGeBtn.addEventListener('click', () => {
    library.renderByLang('gr')
})
let addEnBtn = document.getElementById('en-btn')
addEnBtn.addEventListener('click', () => {
    library.renderByLang('en')
})
let addFrBtn = document.getElementById('fr-btn')
addFrBtn.addEventListener('click', () => {
    library.renderByLang('fr')
})
let addFiBtn = document.getElementById('fn-btn')
addFiBtn.addEventListener('click', () => {
    library.renderByLang('fn')
})

let addBtn = document.getElementById('add-btn')
addBtn.addEventListener('click', () => {

    let authorInput = document.getElementById('book-author').value
    let langInput = document.getElementById('book-lang').value
    let subjectInput = document.getElementById('book-subject').value
    let titleInput = document.getElementById('book-title').value
    let commentInput = "" // new

    if (authorInput.length === 0) {
        return alert('Invalid Input')
    }

    let newBook = new Book(authorInput, langInput, subjectInput, titleInput, commentInput)
    library.addBookToBookshelf(newBook)

    library.render()
})