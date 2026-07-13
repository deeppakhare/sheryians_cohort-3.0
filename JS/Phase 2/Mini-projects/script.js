
// ### Project 4: Word Frequency Counter


// function frequency(text) {
//     let words = text.toLowerCase().split(/\s+/);
//     let freq = {};
//     words.forEach(word => {
//         freq[word] = (freq[word] || 0) + 1;
//     })
//     return freq;
// }

// let text = "The quick brown fox jumps Over the lazy dog the fox is Quick"
// console.log(frequency(text));



// ### Project 5: Library Management System

// Combines arrays, objects, and functions beautifully.

// let library = {
//     books: [],

//     addBook(title, author) {
//         let check = this.books.find(name => name.title === title);      
//         if (check) {
//             return 'It is alredy available'
//         }
//         this.books.push({
//             id: this.books.length + 1,
//             title,
//             author,
//             isBorrowd: false
//         });
//         return `Book added successfully `
//     },

//     borrowBook(id){
//         let checkId = this.books.find(n => n.id === id)
        
//         if(!checkId) return " book  Not found";

//         if(checkId.isBorrowd) return "Already borrowed"
//         checkId.isBorrowd = true;
//         return "Borrowed success"
//     },

//     returnBook(id){
//         let checkId = this.books.find(n => n.id === id)

//         if(!checkId) return " book Not found";

//         if(checkId.isBorrowd == false) return "wrond id"
//         checkId.isBorrowd = false;
//         return "Book Returned"
//     },

//     availableBooks() {
//         return this.books.filter((n) => n.isBorrowd === false);
//     }
// };
// console.log(library.addBook("Rich1", "Deep"));
// console.log(library.addBook("Rich2", "Deep"));
// console.log(library.addBook("Rich3", "Deep"));
// console.log(library.addBook("Rich4", "Deep"));


// console.log(library.borrowBook(2));
// console.log(library.borrowBook(4));

// console.log(library.books);

// console.log(library.returnBook(2));

// console.log(library.books);


// console.log(library.availableBooks());
