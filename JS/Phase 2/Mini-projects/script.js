// ### Project 1: To-Do List (in-memory)

// ```jsx
// let todos = [];

// function addTodo(task) {
//     todos.push({ id: todos.length + 1, task, done: false });
// }

// function completeTodo(id) {
//     let todo = todos.find(t => t.id === id);
//     if (todo) todo.done = true;
// }

// function removeTodo(id) {
//     todos = todos.filter(t => t.id !== id);
// }

// function showTodos() {
//     todos.forEach(t => {
//         console.log(`${t.id}. [${t.done ? "x" : " "}] ${t.task}`);
//     });
// }

// addTodo("Learn JS");
// addTodo("Build a project");
// addTodo("Sleep");
// completeTodo(1);
// showTodos();
// // 1. [x] Learn JS
// // 2. [ ] Build a project
// // 3. [ ] Sleep
// ```



// ### Project 2: Student Grade Tracker

// ```jsx
// let students = [
//     { name: "Aman", marks: [80, 90, 75] },
//     { name: "Priya", marks: [95, 85, 92] },
//     { name: "Raj", marks: [60, 55, 70] }
// ];

// function getAverage(marks) {
//     return marks.reduce((sum, m) => sum + m, 0) / marks.length;
// }

// function getGrade(avg) {
//     if (avg >= 90) return "A";
//     if (avg >= 75) return "B";
//     if (avg >= 60) return "C";
//     return "F";
// }

// students.forEach(s => {
//     let avg = getAverage(s.marks);
//     console.log(`${s.name}: Avg = ${avg.toFixed(2)}, Grade = ${getGrade(avg)}`);
// });
// ```