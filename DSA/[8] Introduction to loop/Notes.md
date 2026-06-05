# 📘 Introduction to Loops

Loops are used in programming to **execute a block of code repeatedly** until a certain condition is met.  
They help reduce code repetition and make programs more efficient.

---

## 🔹 Why Use Loops?

- Avoid writing the same code multiple times  
- Perform repetitive tasks easily  
- Work with arrays, strings, and data efficiently  

---

## 🔁 Types of Loops

Loops are mainly divided into two categories:

1. **Entry Controlled Loops**
2. **Exit Controlled Loops**

---

# 🔹 1. Entry Controlled Loop

In this type of loop, the **condition is checked before executing the loop body**.

👉 If the condition is **false initially**, the loop will **not execute even once**.

---

## ✅ Examples

### 🔸 `for` loop

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


# 🔹 2. Exit Controlled Loop

In this type of loop, the condition is checked after executing the loop body.**.

👉 The loop will execute at least once, even if the condition is false..


## ✅ Examples

### 🔸 `do...while` loop

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
