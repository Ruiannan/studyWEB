/**  关于 this 的指向问题：
 * 函数预编译过程中 this ----> window
 * 全局作用域里 this ------> window
 * call/apply 可以改变函数运行时 this 的指向
 * obj.func(); func() 里面的this 指向 obj （ 谁调用了函数里的方法，方法中的this就指向调用该方法的对象 ）
 */

 var name = '222';
 var a = {
     name : '111',
     say : function () {
         console.log(this.name);
         
     }
 }

 var fun = a.say;
 fun();  // 222
 a.say() // 111

 var b = {
     name : '333',
     say : function (fun) {
         fun();
     }
 }

 b.say(a.say);  // 222
 b.say = a.say;
 b.say(); // 333

//  var num = (function(n){
//         if(n == 1){
//             return 1;
//         }
//         return n * arguments.callee(n - 1);
//     }(15))


var bar = {a:'002'}
function print() {
    bar.a = 'a';
    Object.prototype.b = 'b';
    return function inner() {
        console.log(bar.a);
        console.log(bar.b);
        
    }
}

print()();

