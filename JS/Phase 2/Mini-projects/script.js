// ### Project 1: To-Do List (in-memory)

let todos = [];

function addTodo(task) {
  todos.push({id:todos.length+1,task,isComplete: false});
  console.log(`Task Added successfully`);
  
}

function completeTodo(id){
    let check = todos.find(n => n.id === id);
    if(check){
        check.isComplete = true;
        return "Completed"
    } else{
        return "Not valid id"
    }
}

function removeTodo(id){
    let check = todos.find(n => n.id === id );
    if(check && check.isComplete){
        let index = todos.indexOf(check);
        todos.splice(index,1);
        return "Removed it"
    } else{
        return "Check if is completed or check Id "
    }
}

function showTodo(todo) {
    todo.forEach(element => {
        console.log(`${element.id} is ${element.task}[${element.isComplete ? "Done" : "Not Done"}]`);
        
    });
}

addTodo("Learn JS")
addTodo("DSA Practice")
addTodo("Communication")
addTodo("Practice Web Dev")
addTodo("Practice Backend")

console.log(completeTodo(2));
console.log(completeTodo(3));

console.log(removeTodo(5));

showTodo(todos)


// ### Project 2: Student Grade Tracker

// let students = [
//   { name: "Aman", marks: [80, 90, 75] },
//   { name: "Priya", marks: [95, 85, 92] },
//   { name: "Raj", marks: [60, 55, 70] },
// ];

// function getAverage(marks) {
//   return marks.reduce((sum, m) => sum + m, 0) / marks.length;
// }

// function getGrade(avg) {
//   if (avg >= 90) return "A";
//   if (avg >= 75) return "B";
//   if (avg >= 60) return "C";
//   return "F";
// }

// students.forEach((s) => {
//   let avg = getAverage(s.marks);
//   console.log(`${s.name}: Avg = ${avg.toFixed(2)}, Grade = ${getGrade(avg)}`);
// });


// ### Project 3: Shopping Cart Logic

// let cart = [];

// let addItem = (name, price, qty) => {
//   let check = cart.find((n) => n.name === name);
//   if (check) {
//     check.qty += qty;
//     return "Item already exist";
//   } else {
//     cart.push({ name, price, qty });
//   }
//   return "Item Added";
// };

// let removeItem = (name) => {
//   let check = cart.find((n) => n.name === name);
//   if (check) {
//     cart = cart.filter((item) => item.name !== name);
//     return "Removed";
//   } else {
//     return "Not found";
//   }
// };

// let getTotal = (name) => {
//     let check = cart.find((n) => n.name === name);
//   if (check) {
//     let total = check.qty * check.price;
//     return total;
//   } else {
//     return "Not found";
//   }
// };

// let showCart = () => {
//     cart.forEach((item) => {
//         console.log(`name -> ${item.name}, price -> ${item.price}, qty-> ${item.qty}`);
//         console.log(`Total: ₹${getTotal(item.name)}`);
//     })

// }

// console.log(addItem("Book", 120, 5));
// console.log(addItem("Pencil", 5, 15));
// console.log(addItem("BookCover", 15, 10));

// console.log(removeItem("BookCover"));

// console.log(getTotal("Book"));

// console.log(showCart());

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
