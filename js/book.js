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
        let card = document.createElement('section')
        card.classList.add('card')

        let author = document.createElement('li')
        author.innerText = this.author

        let language = document.createElement('li')
        language.innerText = this.language

        let subject = document.createElement('li')
        subject.innerText = this.subject

        let title = document.createElement('li')
        title.innerText = this.title

        let commentBtn = document.createElement('button')
        commentBtn.classList.add('comment')
        commentBtn.style.height = '25px'
        commentBtn.style.width = '75px'
        commentBtn.innerText = 'comment'

        //create comment button here
        //then target comment button with queryselector and addeventlisteners when clicked

        card.append(author)
        card.append(language)
        card.append(subject)
        card.append(title)
        card.append(commentBtn)


        return card

    }

}
