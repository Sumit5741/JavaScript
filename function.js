var fun1=()=>console.log('Helloooo!!');
(function fun2(a,callback){
console.log(a);
console.log('Hiiiii!!');
callback();
})(10,fun1);

// (function first()
// {
//     console.log("Hello");
// })
// (function second(callback)
// {
//     console.log("Hiiiiii!");
//     callback();
// })(first);



