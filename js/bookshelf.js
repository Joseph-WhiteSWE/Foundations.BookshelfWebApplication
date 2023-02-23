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
}
