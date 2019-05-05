//-----------------函数 小练习-------------------
function scream(animal) {
    switch (animal) {
        case 'dog':
            document.write('旺旺');
            return;
        case 'cat':
            document.write('喵喵');
            return;
        case 'fish':
            document.write('oooo');
            return;

    }
}

// 将输入数字  逆转  为汉字
function reverse(){
    var num = window.prompt('input');
    var str = '';
    for (var i = num.length-1; i >= 0; i--) {
        str += transfer(num[i]);
    }

    document.write(str);

}

// 转为 汉字数字
function transfer(target){
    switch(target){
        case '0':
            return '零';
        case '1':
            return '壹';
        case '2':
            return '贰';
        case '3':
            return '叁';
        case '4':
            return '肆';
        case '5':
            return '伍';
        case '6':
            return '陆';
        case '7':
            return '柒';
        case '8':
            return '捌';
        case '9':
            return '玖';

    }
}

// 实现 n 的阶乘  （递归 : 找规律 ，找出口） 规律：n! = n * (n - 1)!
function jc(n){
    if(n == 1 || n == 0){
        return 1;
    }

    return n * jc(n-1);
}

// 实现 斐波那契数列  规律：n = (n - 1) + (n - 2)
function fbnq(n){

    if (n == 1 || n == 2){
        return 1;
    }

    return fbnq(n - 1) + fbnq(n - 2);
}


// 输入一串低于10位的数字，输出这串数字的中文大写


//-------------------------预编译 --------------------------

// ---test1---
// function fun(a){
//     console.log(a);
//
//     var a = 123;
//     console.log(a);
//
//     function a(){};
//     console.log(a);
//
//     var b = function () {};
//     console.log(b);
//
//     function d() {}
//     console.log(d);
// }

// fun(123);

//----test2----
// function test(a,b){
//     console.log(a);  //function a() {}
//     console.log(b);  //undefined
//     var b = 234;
//     console.log(b);  //234
//     a = 123;
//     console.log(a);  //123
//     function a() {}
//     var a;
//     b = 234;
//     var b = function () {}
//     console.log(a);   //123
//     console.log(b);   //function () {}
//
// }
// test(1);

//-----test3---

// global = 100;
// function fn() {
//     console.log(global);  //undefined
//     global = 200;
//     console.log(global);  //200
//     var global = 300;
// }
// fn();
// var global;

//----test4--

// function test4() {
//     console.log(b);  //undeined
//     if(a){
//         var b = 100;
//     }
//     console.log(b);  //undeined
//     c = 234;
//     console.log(c);  // 234
// }

// var a;

// test4();
// a = 10;
// console.log(c); // 234

//-----test5---
// function bar() {
//     return foo;
//     foo = 10;
//     function foo() {
//
//     }
//     var foo = 11;
// }

// console.log(bar()); // function

// go{
//     bar:function,
//     foo:undefined,
// }
//
// AO {
//     foo :function,
//
// }

//----test6---
// console.log(bar());  // 11
// function bar() {
//     foo = 10;
//     function foo() {
//
//     }
//     var foo = 11;
//     return foo;  // 11
// }


//-----test7--
// GO{
//     a:100,
//     demo:function,
//     f:123,
// }

// a = 100;
// function demo(e) {
//     function e() {}
//     arguments[0] = 2;
//     document.write(e);  // 2
//     if (a){           //---------------->> if 中不能定义function (定义无效，预编译时不进if语句中)
//         var b = 123;
//         function c() {
//         //
//         }
//     }
//
//     var c;
//     a = 10;
//     var a;
//     document.write(b); //undefined
//     f = 123;
//     document.write(c);  //undefined
//     document.write(a);  // 10
//
// }

// AO{
//     e:2,
//     b:123,
//     c:function,
//     a:10,
// }

// var a;
// demo(1);
// document.write(a); //100
// document.write(f); //123

//----test8 ---
// var str = false + 1;
// console.log(str);  // 1

// var demo = false == 1;
// console.log(demo); // false

// if(typeof(a) && -true + (+undefined) + ""){   // 字符串 && 字符串
//     console.log('基础扎实')
//         console.log(-true);  // -1 ( true:1  false:0 )
//         console.log(+undefined);   // NaN
// }

// if(11 + '11' * 2 == 33){     //  乘法，减法，除法，摩尔，两边，不管两边为啥都转为数字
//     console.log('基础扎实')
// }

// !!" " + !!"" - !!false || document.write("你觉得能打印，你就是猪")   // trur + false - false =》 1 + 0 - 0

// ( window.foo || (window.foo = 'bar'));  //问 window.foo 等于啥？ ==> bar
// console.log(window.foo);

