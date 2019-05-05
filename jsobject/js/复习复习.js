// 包装类 的复习
var str = 'abc';

console.log(str.length);   // ----> 包装类：new String('abc').length;


var num = 123;
// 包装类过程 ：
num.abc = 'abc';  // new Number(num).acb = 'abc';  delete  : 系统创建完后就会销毁这个 new Number(num).acb

console.log(num.abc);  // 再次调用是再次生成一个新的 ： new Number(num).acb;  此时没有赋值，所以值为 undefined



// 原型 的复习 （原型是基于构造函数的）



// this  和 call


// 浅克隆
// 将对象的属性循环放到 新对象中 ，但是当拷贝到对象中的引用值时，拷贝的是相同的引用值地址，
// 当对象1 的引用值发生改变， 对象2中的该引用值也会改变，因为他们所指向同一个内存地址

// 深度克隆  （解决 ：浅拷贝只能拷贝引用值地址的问题）
// 深拷贝步骤：
// 1.循环这个对象
// 2.使用 typeof 判断这个对象的属性值是不是 原始值
// 3.如果是引用值 开始判断这个值是数组 还是 对象 ------> Object.prototype.toString.call('放入引用值') == “[object Array]”  / “[object object]”  
// 4.判断好引用值类型后  回调这个深度克隆的函数方法，传入这个引用值为参数，当所有的引用值对象处理到原始值后，返回用于接受数据的新数组
// 这个回调的出口就是  ： 当值全为 原始值时，就不会再 回调这个函数


// undefined 无法和 null 和 数字 比较



// 复习 : 预编译四步  （预编译发生在函数执行的前一刻）
// 找函数声明
// 找变量声明
// 实参形参相统一
// 将函数和函数声明统一




//字符串去重
var str = 'aadjjdkkkfff';
var strarr = str.split('');

console.log(strarr);

Array.prototype.unique = function(){

    var strobj = {},
        arr = [],
        strlen = this.length;

    for(var i = 0; i < strlen; i++){

        if(!strobj[this[i]]){

            strobj[this[i]] = 'abccc';

            arr.push([this[i]]);

        }
    }
    return arr;
}

var testarr = strarr.unique();

// 将去重后的数组合并为字符串
var teststr = testarr.join('');

console.log(teststr);




// 一个字符串[a-z]组成，请找出该字符串第一个只出现一次的字母

var azStr = 'ruiwaeuiowrerwberoiwuoruwieou';
var str1 = azStr.split('');
console.log(str1);


Array.prototype.myique = function(){

    var strobj = {},
        arrobj = {
            uniqueArr:[],
            notiqueArr:[],
        },
        strlen = this.length;

    for(var i = 0; i < strlen; i++){

        if(!strobj[this[i]]){

            strobj[this[i]] = 'abccc';
            arrobj.uniqueArr.push(this[i]);

        }else{
            arrobj.notiqueArr.push(this[i]);
        }
    }
    return arrobj;
}

var azArr1 = str1.myique().uniqueArr;
var azArr2 = str1.myique().notiqueArr;

var mybj = function(tragat,option){

    var tlen = tragat.length,
        olen = option.length,
        newArr = [];

        for (let i = 0; i < tlen; i++) {
            
            for (let j = 0; j < olen; j++) {

                if(!(tragat[i] == option[j])){
                    newArr.push(option[j]);
                }
                
            }
            
        }

    return newArr.unique();    

}

var hahah = mybj(azArr1,azArr2);


// console.log(azArr1);
// console.log(azArr2);


