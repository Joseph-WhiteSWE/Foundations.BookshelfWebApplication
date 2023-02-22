let library = new Bookshelf()

for (const bookinBookData of bookData) 
{
    let book = new Book
        (
            bookinBookData.author,
            bookinBookData.language,
            bookinBookData.subject,
            bookinBookData.title
        )

    library.addBookToBookshelf(book)
}
library.render()

//Add Books section 

let addBtn = document.getElementById('add-btn')
addBtn.addEventListener('click', () => 
{

    let authorInput = document.getElementById('book-author').value
    let langInput = document.getElementById('book-lang').value
    let subjectInput = document.getElementById('book-subject').value
    let titleInput = document.getElementById('book-title').value

    if (authorInput.length === 0) 
    {
        return alert('Invalid Input')
    }

    let newBook = new Book(authorInput, langInput, subjectInput, titleInput)
    library.addBookToBookshelf(newBook)

    library.render()
})