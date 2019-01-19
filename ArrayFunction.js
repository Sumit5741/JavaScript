// *********Array Based Functions **********//

// Filter Function

var array=['Sumit','Vinit','Uttam','Menka','Manitha','Meghna','Sonia','Priyanga','Rashmi','Urmila'];
var filteredArray=array.filter(array=>array.length>=6);
console.log(filteredArray);

// Map Function

var array1=[1,4,9,16,25,36,49,64,81,100];
var mappedArray=array1.map(Math.sqrt);
var mappedArray=array1.map(Math.sqrt);    
console.log(mappedArray);

// Reduce Function

var array3=[1,2,3,4,5];
var reducedArray=array3.reduce(function(result,item){
return result+item},0);
console.log(reducedArray);

// For Each 

var array2=[10,20,30,40,50];
var emptyArray=[];
array2.forEach((item) =>
    emptyArray.push(item));
console.log(emptyArray);

// Some Function

var array4=[100,200,300,-400,500];
const someArray=array4.some((item)=>item<0);
console.log(someArray);

// Every Function

var array5=[1000,2000,3000,4000,5000];
var everyArray=array5.every((item)=>item>0);
console.log(everyArray);

 // find Function
const array6=[{id:1},{id:2},{id:3}];
var findArray=array6.find((item)=>item.id===2);
console.log(findArray);

// findIndex function

const array7=[{id:1},{id:2},{id:3}];
var findIndexArray=array7.findIndex((item)=>item.id===3);
console.log(findIndexArray);
