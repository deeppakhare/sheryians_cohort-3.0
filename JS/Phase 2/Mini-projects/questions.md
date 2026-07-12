### Project 5: Library Management System

Combines arrays, objects, and functions beautifully.

```jsx
let library = {
    books: [],

    addBook(title, author) {
        this.books.push({
            id: this.books.length + 1,
            title,
            author,
            borrowed: false
        });
    },

    borrowBook(id) {
        let book = this.books.find(b => b.id === id);
        if (!book) return "Book not found";
        if (book.borrowed) return "Already borrowed";
        book.borrowed = true;
        return `You borrowed "${book.title}"`;
    },

    returnBook(id) {
        let book = this.books.find(b => b.id === id);
        if (!book) return "Book not found";
        book.borrowed = false;
        return `You returned "${book.title}"`;
    },

    availableBooks() {
        return this.books.filter(b => !b.borrowed);
    }
};

library.addBook("Atomic Habits", "James Clear");
library.addBook("Deep Work", "Cal Newport");
console.log(library.borrowBook(1));
console.log(library.availableBooks());
```