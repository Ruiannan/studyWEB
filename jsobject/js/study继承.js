// 构造函数的继承  （圆满的圣杯模式）

// Father.prototype.lastName = 'rui';
// function Father(){

// }

// function Son(){

// }

// 现在想要 Son 构造函数 继承到lastName 属性，并可以往Son 的原型中添加属性时，不改变Father 构造函数的原型中的属性 
// （圆满的圣杯模式）

// 起中间件作用的构造函
// F.prototype = Father.prototype;
// function F(){

// }

// Son.prototype = new F();  // 当 Son.prototype = new F() 时 ，所指向的对象是一个新创建的对象引用地址 ，所以在 Son 的原型中添加属性 ，不会影响到 Father 的原型

// Son.prototype.sex = '男';

// test 原型中的属性是否不一样
// var son = new Son();
// var father = new Father(); 


// -----------------------------------------------------------

// 封装成函数
function inherit(Target,Origin){
    function F(){}
    F.prototype = Origin.prototype;

    Target.prototype = new F();
    Target.prototype.constuctor = Target;       // 能够知道自己的 构造函数是什么
    Target.prototype.uber = Origin.prototype;   // 超类 ： 能够知道究竟是继承自那个构造函数

}

Father.prototype.lastName = 'rui';
function Father(){

}

function Son(){

}

inherit(Son,Father);

// Test 
Son.prototype.sex = '男';

var son1 = new Son();
var father1 = new Father(); 

