// 浅拷贝
    



// 深拷贝

var objjson = {
    name:'ran',
    age : 18,
    testarr : ['nanan','fjfj'],
    testObj : {
        say : {
            sex : '男'
        }
    }
}

var obj = {};


// 先循环判断属性是不是都是 原始值 使用 typeof（）判断
// 判断属性是对象 还是 数组  使用 instanceof 、toString、constructor 判断 都可以 一般使用 toString 判断返回值是不是  "[object Array]"
// 建立相应的数组和对象
// 递归  递归出口 ： 当属性值为原始值时，就是出口

function deepClone(origin,traget) {
    
    var traget = traget || {},
        toStr = Object.prototype.toString,  
        arrStr = "[object Array]";   // 同于判断 traget 是数组

    for(var item in origin){

        if (origin.hasOwnProperty(item)) {    //  hasOwnProperty(item)  用于判断 item 属性是不是原型中的 是 返回 false ，不是 返回 true
            
            if(typeof(origin[item]) == 'object'){
                // 是对象的话，判断是数组还是对象
                if(toStr.call(origin[item]) == arrStr){
                    traget[item] = [];
                }else{
                    traget[item] = {};
                }

                deepClone(origin[item],traget[item]);

            }else{
                traget[item] = origin[item];
            }

        }

    }

    return traget;
        

}

