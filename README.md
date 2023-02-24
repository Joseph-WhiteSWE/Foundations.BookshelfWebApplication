# Foundations.BookshelfWebApplication

General Code
(1) Design choices are explained and documented in comments.
(2) DOM elements are styled via CSS.

Navigation
($) A Navigation Bar is included in the web app with links to other parts of the site e.g. "About", "Contact".
($) No real information is required. Dummy data or lorum ipsum is fine!

Add Books
($) Users can enter book title, author, subjects, language and add new Books.
($) The Bookshelf instance is updated accordingly.
($) The Bookshelf instance renders Books accurately.

Comments
($) Users can leave comments no longer than 280 characters on any Book they want.
($) Users can press a "Comment" button which reveals a `text` input element. Users can then type their comment and click "send" to add it to the Book.
($) The Book and Bookshelf instances are updated accordingly.
($) The comments persist even if a search or sort rerenders the Books.

TDD 5 Alternate: create four buttons for English, French, German and Finnish. When you click any of the buttons, the button should use the `filter` method to only display the bookshelf data that matches that language. Language codes are listed below.
en => English
de => German
fr => French
fi => Finnish
