// ### Project 5: Library Management System

// Combines arrays, objects, and functions beautifully.

let library = {
    books: [],

    addbook(title, author) {
        let check = this.books.find(name => name.title === title);      
        
        if (check) {
            return 'It is alredy available'
        }
        this.books.push({
            id: this.books.length + 1,
            title,
            author,
            isBorrowd: false
        });
        return "Book added successfully"
    }
};
library.addbook("Rich", "Deep");
console.log(library.addbook("Rich1", "Deep"));
console.log(library.books);
