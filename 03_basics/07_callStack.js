// -------------------------call stacks-------------------------------------------------

//1️⃣ this type  of structure has been formed when we call() functions.

//2️⃣ first of all there has been formed a globel execution context..

//3️⃣ ThiS system follows [ LIFO ] cycle [Last in first out].👈👈👈

//4️⃣ lets suppose if we call a " one() " function it comes inside the call stack and after
//    the workdone it outs from  the call stack. 🔍🔍🔍

//5️⃣ but if we call multiple functions inside a function then the last function is out 
//    first  and then 1 by 1 each fucnction is out from the call stack.🔍🔍🔍

// ↑                        ↑
// ↑                        ↑
// ↑                        ↑
// ↑                        ↑
// ↑                        ↑
// ↑------------------------↑
// ↑    Global-exe-context  ↑
// ↑→→→→→→→→→→→→→→→→→→→→→→→→↑