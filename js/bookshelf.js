class Bookshelf {
    constructor() {
        this.books = []
    }

    addBookToBookshelf(book) {
        this.books.push(book)
    }

    //addBookToBookshelf(book){ 1hr mark on https://www.youtube.com/watch?v=k1eaLfoDY_E&ab_channel=FullstackAcademyPrograms
    //example
    //}

    render() {
        let cardRender = this.books.map((book) => book.render())
        let bookSection = document.querySelector('#booklist')
        bookSection.innerHTML = '';

        for (let card of cardRender) {
            bookSection.append(card)
        }

        // let ulBible = document.createElement('ul')

        // for (const book of this.books) {
        //     let bookOfEli = book.render()
        //     ulBible.appendChild(bookOfEli)

        // }
        // 
        // bookSection.appendChild(ulBible)


        return cardRender
    }
}
