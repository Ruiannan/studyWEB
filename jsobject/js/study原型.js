// -------- 原型 应用--------

Car.prototype.height = 1400;    // 原型中存放所有Car 对象中的共有属性 或 方法
Car.prototype.lang = 4900;
Car.prototype.carName = 'BMW';

// or

// Car.prototype = {
//     height1 : 1400,
//     lang1 : 4900,
//     carName1 : 'BMW'
// }

function Car(color,owner){    // 构造函数

    this.owner = owner;
    this.color = color;

}

 var car1 = new Car('red','annan');
 var car2 = new Car('pink','rui');






// -------- 原型链 -------

// Object.prototype 为最祖先的原型 ，他没有 __proto__ 

// 绝大多数对象，最终都会继承自Object.prototype

// var obj = Object.create(原型);  创建对象


// --------- call / apply ---------
// call 和 apply 的作用是改变 this 指向

// call 和 apply 的区别是 call 传参为多个参数 ，apply 传参为[] , 一个 agruments

 function Name(age,sex) {
    this.age = age;
    this.sex = sex;
}

function Test(age,sex,mail) {
    Name.call(this,age,sex);
    this.mail = mail;
}

var test = new Test(88,'男','163');



