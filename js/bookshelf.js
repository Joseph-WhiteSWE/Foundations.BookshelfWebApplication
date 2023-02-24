class Bookshelf 
{
    constructor() 
    {
        this.books = []
    }

    addBookToBookshelf(book) 
    {
        this.books.push(book)
    }

    render() 
    {
        let cardRender = this.books.map((book) => book.render())
        let bookSection = document.querySelector('#booklist')
        bookSection.innerHTML = '';

        for (let card of cardRender) 
        {
            bookSection.append(card)
        }

        return cardRender
    }
    renderByLang(lang) 
    {
        let bookSection = document.querySelector('#booklist')
        bookSection.innerText = ""

        let filteredBooks = this.books.filter((book) => book.language == lang)
        for (let book of filteredBooks )
        {
                bookSection.append(book.render())
        }
    }
}
