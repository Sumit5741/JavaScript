var sum=function()
{
console.log('sum function'); 
}
var sub=function(call1)
{
console.log('sub function'); 
call1(sum);
}
var mul=function(call2)
{
console.log('mul function');
call2();
}
var fun1=function(a,b,call)
{
    // return a+b;
    console.log(a+b + ' outer function');
    call(mul);
}
fun1(10,20,sub);