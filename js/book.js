class Book {
    constructor(author, language, subject, title, comments) {
        this.author = author
        this.language = language
        this.subject = subject
        this.title = title
        this.comments = comments
    }

    render() {
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

        let comment = document.createElement('li')
        comment.innerText = this.comments
        comment.classList.add('cmtInput')

        //comment button section
        let commentBtn = document.createElement('button')
        commentBtn.classList.add('cmtbtn')
        commentBtn.innerText = 'Comment'
        //-------------------- new code underneath

        //user input section 
        let commentInput = document.createElement('input')
        commentInput.id = ('book-comment')
        commentInput.type = 'text';
        commentInput.maxLength = 280;
        commentInput.style.height = '100px'
        commentInput.style.width = '300px'
        commentInput.style.display = 'none'
        commentInput.style.borderRadius = '10px'
        //-------------------- new code underneath

        //submit button section 
        let sendBtn = document.createElement('button')
        sendBtn.classList.add('submit')
        sendBtn.innerText = 'Send'
        sendBtn.style.display = 'none'
        //-------------------- new code underneath

        let commentSection = document.createElement('div'); // new

        commentBtn.addEventListener('click', () => {
            commentInput.value = ''; // new
            commentInput.style.display = 'block'
            sendBtn.style.display = 'block'
            //-------------------- new code underneath

        });

        sendBtn.addEventListener('click', () => // new
        {
            let commentText = commentInput.value; // new
            commentInput.style.display = 'none'; // new
            sendBtn.style.display = 'none'; // new

            let comment = document.createElement('p'); // new
            comment.classList.add('cmtInput') // new
            comment.innerText = commentText; // new
            commentSection.innerText = ""
            commentSection.appendChild(comment); // new
            this.comments = commentText
        });

        card.append(author)
        card.append(language)
        card.append(subject)
        card.append(title)
        card.append(commentBtn)
        card.append(comment)
        card.append(commentInput)
        card.append(sendBtn)
        //-------------------- new code underneath
        card.append(commentSection)

        return card
    }

}