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

        //create comment button here
        //then target comment button with addeventlisteners when clicked
        let commentBtn = document.createElement('button')
        commentBtn.classList.add('comment')
        commentBtn.innerText = 'Comment'

        //comment section 
        let commentInput = document.createElement('input')
        commentInput.classList.add('cmtInput')
        commentInput.type = 'text';
        commentInput.maxLength = 280;
        commentInput.style.height = '100px'
        commentInput.style.width = '300px'
        commentInput.style.display = 'none'
        commentInput.style.borderRadius = '10px'

        let submitBtn = document.createElement('button')
        submitBtn.classList.add('submit')
        submitBtn.innerText = 'Submit'
        submitBtn.style.display = 'none'

        commentBtn.addEventListener('click', () => 
        {
            commentInput.style.display = 'block'
            submitBtn.style.display = 'block'
        });

        card.append(author)
        card.append(language)
        card.append(subject)
        card.append(title)
        card.append(commentBtn)
        card.append(commentInput)
        card.append(submitBtn)

        return card

    }

}