class Book 
{
    constructor(author, language, subject, title, comments) 
    {
        this.author = author
        this.language = language
        this.subject = subject
        this.title = title
        this.comments = comments
    }

    render() 
    {
        //creates elements that'll be rendered to the html at a later time
        let card = document.createElement('section')
        card.classList.add('card')

        let author = document.createElement('li')
        author.innerText = `Author: ${this.author}`

        let language = document.createElement('li')
        language.innerText = `Language: ${this.language}`

        let subject = document.createElement('li')
        subject.innerText = `Subject: ${this.subject}`

        let title = document.createElement('li')
        title.innerText = `Title: ${this.title}`

        let comment = document.createElement('li')
        comment.innerText = this.comments
        comment.classList.add('cmtInput')

        //comment button section
        let commentBtn = document.createElement('button')
        commentBtn.classList.add('cmtbtn')
        commentBtn.innerText = 'Comment'

        //user input section 
        let commentInput = document.createElement('input')
        commentInput.id = ('book-comment')
        commentInput.type = 'text';
        commentInput.maxLength = 280;
        commentInput.style.height = '100px'
        commentInput.style.width = '300px'
        commentInput.style.display = 'none'
        commentInput.style.borderRadius = '10px'

        //send button section 
        let sendBtn = document.createElement('button')
        sendBtn.classList.add('submit')
        sendBtn.innerText = 'Send'
        sendBtn.style.display = 'none'

        let commentSection = document.createElement('div');

        //show elements when the comment button is clicked
        commentBtn.addEventListener('click', () => 
        {
            commentInput.value = '';
            commentInput.style.display = 'block'
            sendBtn.style.display = 'block'

        });

        //show and hide elements when send button is clicked
        sendBtn.addEventListener('click', () => 
        {
            let commentText = commentInput.value;
            commentInput.style.display = 'none';
            sendBtn.style.display = 'none';

            let comment = document.createElement('p');
            comment.classList.add('cmtInput')
            comment.innerText = commentText;
            commentSection.innerText = " "
            commentSection.appendChild(comment);
            this.comments = commentText
        });

        //attach all elements to the section element
        card.append(author)
        card.append(language)
        card.append(subject)
        card.append(title)
        card.append(commentBtn)
        card.append(comment)
        card.append(commentInput)
        card.append(sendBtn)
        card.append(commentSection)

        return card
    }

}