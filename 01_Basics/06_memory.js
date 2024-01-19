// Basically there are two types of memories in javaScript.

// 1️⃣ Stack memory
// (All primitive data types => example [ B S - S N B U N ] stored in stack memory)

// 2️⃣ Heap memory 
//(All reference or non-premitive data types => example [ A F O ] stored in heap memory)


//  difference between Stack and Heap memory. ❗❗❗❗❗❗


// In JavaScript, stack memory manages function calls and local variables, with automatic allocation and short-lived lifespans. 

// Heap memory handles dynamic data like arrays, with manual or garbage collection management and longer persistence. 

// Stack is fast and efficient for short-term operations, while heap is suitable for larger, persistent data structures.

//  Key differences include automatic vs. manual management and speed of access. Understanding these distinctions is crucial for effective JavaScript memory management in interviews.


//  ** Best Practices: **

// Use stack for short-lived variables, keeping it automatic and efficient.
// Exercise caution with heap, managing it effectively to prevent memory leaks.