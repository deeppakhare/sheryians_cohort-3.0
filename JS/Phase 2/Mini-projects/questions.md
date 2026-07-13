### Project 1: To-Do List (in-memory)

```jsx
let todos = [];

function addTodo(task) {
    todos.push({ id: todos.length + 1, task, done: false });
}

function completeTodo(id) {
    let todo = todos.find(t => t.id === id);
    if (todo) todo.done = true;
}

function removeTodo(id) {
    todos = todos.filter(t => t.id !== id);
}

function showTodos() {
    todos.forEach(t => {
        console.log(`${t.id}. [${t.done ? "x" : " "}] ${t.task}`);
    });
}

addTodo("Learn JS");
addTodo("Build a project");
addTodo("Sleep");
completeTodo(1);
showTodos();
// 1. [x] Learn JS
// 2. [ ] Build a project
// 3. [ ] Sleep
```

### Project 2: Student Grade Tracker

```jsx
let students = [
    { name: "Aman", marks: [80, 90, 75] },
    { name: "Priya", marks: [95, 85, 92] },
    { name: "Raj", marks: [60, 55, 70] }
];

function getAverage(marks) {
    return marks.reduce((sum, m) => sum + m, 0) / marks.length;
}

function getGrade(avg) {
    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 60) return "C";
    return "F";
}

students.forEach(s => {
    let avg = getAverage(s.marks);
    console.log(`${s.name}: Avg = ${avg.toFixed(2)}, Grade = ${getGrade(avg)}`);
});
```


### Project 3: Shopping Cart Logic

```jsx
let cart = [];

function addItem(name, price, qty = 1) {
    let existing = cart.find(item => item.name === name);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ name, price, qty });
    }
}

function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
}

function getTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function showCart() {
    cart.forEach(item => {
        console.log(`${item.name} x${item.qty} = ₹${item.price * item.qty}`);
    });
    console.log(`Total: ₹${getTotal()}`);
}

addItem("Notebook", 50, 2);
addItem("Pen", 10, 5);
addItem("Notebook", 50);   // adds to existing
showCart();
```


### Project 4: Word Frequency Counter

```jsx
function wordFrequency(text) {
    let words = text.toLowerCase().split(/\\s+/);
    let freq = {};

    words.forEach(word => {
        freq[word] = (freq[word] || 0) + 1;
    });

    return freq;
}

let text = "the quick brown fox jumps over the lazy dog the fox is quick";
console.log(wordFrequency(text));
// { the: 3, quick: 2, brown: 1, fox: 2, jumps: 1, over: 1, lazy: 1, dog: 1, is: 1 }
```


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