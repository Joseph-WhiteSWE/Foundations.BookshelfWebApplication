class Bookshelf 
{
    constructor() 
    {
        // creates an empty array and pushes a parameter into it 
        this.books = []
    }

    addBookToBookshelf(book) 
    {
        this.books.push(book)
    }

    render() 
    {
        //iterates over this.books array and renders the book parameter
        let cardRender = this.books.map((book) => book.render())
        let bookSection = document.querySelector('#booklist')
        bookSection.innerHTML = '';

        //loops over this.books array and appends it to the section element
        for (let card of cardRender) 
        {
            bookSection.append(card)
        }

        return cardRender
    }
    renderByLang(lang) 
    {
        //filters the book according book language
        let bookSection = document.querySelector('#booklist')
        bookSection.innerText = ""

        let filteredBooks = this.books.filter((book) => book.language == lang)
        for (let book of filteredBooks) 
        {
            bookSection.append(book.render())
        }
    }
}
