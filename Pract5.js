function showLength(array)
{
    if(array.length>5)
    {
        let greater='length is greater';
        console.log(greater);
        // console.log(lesser);//Lesser is not defined
    }
    else if(array.length<5)
    {
        let lesser='length is lesser'
        console.log(lesser);
        // console.log(greater);//Lesser is not defined 
    }
    else
    {
        let equal='length is equal to 5'
        console.log(equal);
        // console.log(greater);  //Error greater is not defined..
    }
}
showLength([1,2,3,4,5,6]);