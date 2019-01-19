var array=[];
for(let i=0;i<5;i++)
{
    array.push(function() {console.log(i)});
}
array[0]();
array[1]();
array[4]();
