//  ---------------- 闭包精讲 ----------------------
// 函数累加器
function add(){
    var num = 0;
    function a(){
        num++;
        console.log(num);
    }

    return a;

}

var myAdd = add();
// myAdd();
// myAdd();
// myAdd();
// myAdd();

// 闭包做 缓存(类似缓存效果)
function test(){
    var food = "apple";
    var obj = {
        eatFood : function (){
            if(food != ""){
                console.log("I am eating " + food);
                food = "";
            }else{
                console.log("There is nothing!empty!");
                
            }
        },
        pushFood : function (myFood){
            food = myFood;
        }
    }

    return obj;
}

var person = test();

// person.eatFood();
// person.eatFood();
// person.pushFood("banana");
// person.eatFood();


// -----------------闭包 铺垫------
// function a(){

//     function b(){
//         var bbb = 234;
//         document.write(aaa);
//     }

//     var aaa = 123;
//     return b;
// }

// var glob = 100;
// var demo  = a();

// demo();


// 使用立即执行函数解决闭包打印出 0 ~ 9
// function test(){
//     var arr = [];

//     for(var i = 0; i < 10; i++){
//         (function(j){
//             arr[j] = function(){
//                 document.write(j + " ");
//             }
//         }(i))

//     }

//     return arr;
// }

// var myArr = test();
// for(var j = 0; j < 10; j++){
//     myArr[j]();
// }





// ----------------立即执行函数--》 针对初始化功能的函数-----
// + - ! ()  可以将函数变为表达式 ，通过函数后面跟上(),实现立即执行这个函数，并释放改函数占的内存，只执行一次
// 语法形式
// (function abc(){
//     var a = 123;
//     var b = 234;
//     console.log(a + b);
    
// }())

// - function name666(params) {
//     console.log(666);
    
// }()

