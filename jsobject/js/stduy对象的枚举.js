//枚举对象(获取对象里的每个值) enumeration 

// for in 循环
var obj = {
    name : 'lll',
    age : 12,
    sex : '男',
    height :156,
    change : {
        lastName : 'deng'
    },
    __proto__ : {
        newName : 'hehehe'
    }
}

for(var parmes in obj){
    if(obj.hasOwnProperty(parmes)){  // hasOwnProperty 过滤属性是否为自己定义的  返回值为 bool 值
        console.log(obj[parmes]);
        
    }
}



function B(){

}

var a = new B();

// A instanceof B
// 看 A对象的原型链上  有没有 B的原型

// arr instanceof Array  --->  true
// obj instanceof Array  --->  false
// 通过 arr 和 obj 的返回值不同 ，可以用来判断一个变量是对象还是数组


