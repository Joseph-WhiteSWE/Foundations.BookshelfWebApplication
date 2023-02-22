class Book 
{
    constructor(author, language, subject, title) 
    {
        this.author = author
        this.language = language
        this.subject = subject
        this.title = title
    }

    render() 
    {
        let bookOfEli = document.createElement('li')
        bookOfEli.innerText = this.title

        return bookOfEli

    }

}
