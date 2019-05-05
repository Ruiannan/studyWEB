//1. 实现方法的连续调用

var testObj = {
    say : function sayObj(){
        console.log('you can say!');
        return this;     // 当函数不写return 时，默认返回的是 undefined ；这里设定返回 this (this 指向为自己 --> testObj )
    },
    drink : function drinkObj(){
        console.log('you can drink!');
        return this;
    },
    smoke : function smokeObj(){
        console.log('you can smoke!');
        return this;
    }
}

// 连续调用测试
// testObj.say().drink().smoke().say();


// 2.属性的表示方法
var demoObj = {
    wife1 : {name:'laora'},
    wife2 : {name:'lisa'},
    wife3 : {name:'mare'},
    wife4 : {name:'yu'},
    saywife : function(num){
        return this['wife' + num].name;    // this.wife1 ---->  this['wife1']  (实际转化过程)
        
    }
}
