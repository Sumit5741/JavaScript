var d,h,m,s;
function clok()
{
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();

if(h<=9)
{
    h= '0' +h;
}
if(m<=9)
{
    m= '0' +m;
}
if(s<=9)
{
    s= '0' +s;
}
var clock=h+":"+m+":"+s;
document.getElementById('id1').innerHTML=clock;
setTimeout(clok,1000);
}
clok();
