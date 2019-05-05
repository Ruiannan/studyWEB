// js 数组的常用方法  操作DOM  ---》 操作HTML     操作BOM  ---》 操作浏览器
// 改变原数组

var arr = [1,2,2,3,5];

// push()  在数组的最后一位添加数据的方法  （可以同时添加多位）
// 自己写个push方法
Array.prototype.mypush = function(){
    // this 就是 谁调用 this ，就指向谁
    for(var i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];
    }

    return this.length;   // 返回这个this 的长度

}

// pop() 剪切出数组的最后一位，返回这个剪切的值  （不可传参）


// shift()  在数组的第一位剪切数据的方法  返回剪切的数

// unshift() 在数组的第一位添加数据的方法   返回添加的数

// reverse()  数组值逆转  返回改变的原数组

// splice() 数组的剪切 arr.splice(1,3) 从第一位 切到 第三位
// arr.splice(2,0,999,888,777);  // 从数组的第二位开始 到 第0位 ，意思是在 数组的第二位出打开一个切口 ，往数组里 添加 999， 888， 777 等元素

// sort()  数组中元素的排序问题

var sortarr = [5,8,4,7,2,0,3,5,1,12];

// sortarr.sort();   // sort() 默认是按照 字符串asc码排序
// console.log(sortarr); 

// 1.必须写两个形参
// 2.规则：看返回值 
    // 1） 当返回值为负数时，前面的数放前面 
    // 2）为正数 ，后面的数放到前面
    // 3）为0 ，不动

sortarr.sort(function(a,b){

    // 升序
    return a-b;

    // 降序
    // return b-a;

});

// console.log(sortarr); 

var testarr = [1,3,5,6,7,8,9];
// 打乱有序数组  -- 面试题
testarr.sort(function(){

    return Math.random() - 0.5;

});


// 不改变原数组
// concat  arr1.concat(arr2);  将arr1 和 arr2 拼接

// slice()  slice(从该位开始截取,截取到该位)  两参数时
    // slice(从此位开始截取直到最后)  一个参数时

// join()  var str = arr.join('-'); 将数组连接成字符串 ---》 "1-3-4-6-8"    字符串有个方法 ： var arrtest = str.split('-');  ---》 ['1','3','4','6','8']




// ------------>  类数组


