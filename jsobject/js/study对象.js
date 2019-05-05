// ------ 定义对象 --
var my = {
    name : "annan",
    age : "22",
    health : 100,
    eat : function () {
        console.log("eating apple!");
        
    }

}

// 对象的 增删改查
// 删除 
delete my.age
// console.log(my);

// ------ 使用 charCodeAt 来读取字符串占的字节个数 ----
var str = "lkkgkkkggk 哈哈哈";
var count = 0;
for(var i = 0;i<str.length;i++){

    var code = str[i].charCodeAt();

    if(code > 255){
        count += 2;
    }else{
        count++;
    }

}
// console.log(count);




