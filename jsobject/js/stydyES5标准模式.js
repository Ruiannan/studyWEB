// 启用 ES5.0 的方法：解决ES5.0 和 ES3.0 之间方法冲突的问题
// "use strict"  // 全局严格模式


// 测试  arguments.callee es3.0 可用  ，es5.0 不可用
function test(){
    "use strict"   //局部函数内部严格模式

    console.log(arguments.callee);
    
}

test();


// 被 es5.0 禁用的函数

// with()    with(){}  -----> 可以直接指定 执行期上下文  缺点：改变作用域链，影响效率   所以 ES5.0中禁用了

// arguments.callee

// func.caller  ---->  test.caller  test是个函数

// 变量赋值前必须声明

// 局部this必须被赋值 ， 局部的this es5.0 严格模式下 预编译的时候不再指向window ，必须要赋值

// 拒绝重复属性和参数  



// eval  ---->  能把字符串当做js代码用 