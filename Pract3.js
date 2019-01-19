var select1 = document.getElementsByName('cars')[0];
select1.onclick=function(event){
    console.log(event);
}
function clickCallback()
{
    console.log('clicked by add eventListner');
}
select1.addEventListener('click',clickCallback);
select1.removeEventListener('click',clickCallback);