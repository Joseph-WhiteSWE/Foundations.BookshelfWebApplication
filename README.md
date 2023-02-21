# Foundations.BookshelfWebApplication

General Code
(1) Design choices are explained and documented in comments.
(2) DOM elements are styled via CSS.

Navigation
($) A Navigation Bar is included in the web app with links to other parts of the site e.g. "About", "Contact".
(2) No real information is required. Dummy data or lorum ipsum is fine!

Add Books
(1) Users can enter book title, author, subjects, language and add new Books.
(2) The Bookshelf instance is updated accordingly.
(3) The Bookshelf instance renders Books accurately.

Comments
(1) Users can leave comments no longer than 280 characters on any Book they want.
(2) Users can press a "Comment" button which reveals a `text` input element. Users can then type their comment and click "send" to add it to the Book.
(3) The Book and Bookshelf instances are updated accordingly.
(4) The comments persist even if a search or sort rerenders the Books.
(5) Data can be stored locally or in state memory. A database is not required.

TDD 5 Alternate: use the `filter` method on search terms so that the word "THE" doesn't affect any search term outcomes