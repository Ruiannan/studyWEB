// 封装type
// typeof([])  ---》 array
// typeof({})  ---》 object
// typeof(function) ---》object
// typeof(new Number) ---》number Object
// typeof(123) ---》number

function objtype(target){

    // 方式一：
    // var objprot = Object.prototype.toString.call(target);

    // if(typeof(target) === null){
    //     return 'null';
    // }

    // if(objprot == "[object Array]"){
    //     return 'Array';
    // }else if(objprot == "[object Object]"){
    //     return 'Object';
    // }else if(objprot == "[object Function]"){
    //     return 'Object';
    // }else if(objprot == "[object Number]" && typeof(target) == 'number'){
    //     return 'number';
    // }else if(objprot == "[object Number]" && typeof(target) != 'number'){
    //     return 'number Object';
    // }else{
    //     return target;
    // }

    // 方式二：
    var template = {
        "[object Object]" : 'object',
        "[object Array]" : 'Array',
        "[object Number]" : 'number - object',
        "[object Boolean]" : 'boolean - object',
        "[object String]" : 'string - object'
    }  
    
    if(typeof(target) === null){
        return 'null';
    }else if(typeof(target) == 'object'){
        var objprot = Object.prototype.toString.call(target);
        return template[objprot];
    }else{
        return typeof(target);
    }

}



// 数组去重 ： 要求在原型链上编程  (原理 ： 将数组每一位 当做对象属性，对象的属性名相同且有值时不会添加到对象中，循环添加到新数组中，并返回新数组)
var test = [22,22,33,4,566,77,88,566,'a','a','b','ldldkkd','男','aaoo','888'];
Array.prototype.unique = function(){
    var temp = {},
        arr = [],
        len = this.length;

    for (var i = 0; i < len; i++) {
        
        if(!temp[this[i]]){

            temp[this[i]] = 'abc';
            arr.push(this[i]);

        }
    }

    return arr;
}

test.sort((a,b)=>{return a-b;});

