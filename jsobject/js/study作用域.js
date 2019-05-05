//-------------作用域------------

// function a(){

//     function b(){

//         function c(){

//         }
//         c();
//     }
//     b();

// }
// a();

// 模拟执行函数，作用域链的形成 (定义 和 执行时的上下文对象)

// a defined    a.[[scope]]  --> 0 : GO

// a doing      a.[[scope]]  --> 0 : aAO
//                               1 : GO

// b defined    b.[[scope]]  --> 0 : aAO
//                               1 : GO

// b doing      b.[[scope]]  --> 0 : bAO
//                               1 : aAO
//                               2 : GO

// c defined    c.[[scope]]  --> 0 : bAO
//                               1 ：aAO
//                               2 : GO

// c doing      c.[[scope]]  --> 0 : cAO
//                               1 : bAO
//                               2 : aAO
//                               3 : GO



 