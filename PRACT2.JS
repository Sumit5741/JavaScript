const companies=[
    {name:"one", category:"finabnce", start:1947, ends:2000},
    {name:"Two", category:"Sales", start:1948, ends:2001},
    {name:"Three", category:"IT", start:1959, ends:2002},
    {name:"Four", category:"Banking", start:1951, ends:2003},
    {name:"Five", category:"IT", start:1950, ends:2004}
];
 
const ages=[50,25,15,41,34,56,84,21,20,215,65,5,32,22];
// for loop
// for(let i=0;i<companies.length;i++)
// {
//     console.log(companies[i]);
// }

// *********froEach
// companies.forEach(function(index_Value)
// {
//     console.log(index_Value);     //{name:"one", category:"finabnce", start:1947, ends:2000},
                                     // {name:"Two", category:"Sales", start:1948, ends:2001},
                                     // {name:"Three", category:"Stock", start:1949, ends:2002},
                                     // {name:"Four", category:"Banking", start:1950, ends:2003},
                                     // {name:"Five", category:"IT", start:1951, ends:2004}
// });

// *******forLoop
// var canDrink=[];
// for(let i=0;i<ages.length;i++)
// {
//     // console.log(ages[i]); //50,25,15,41,34,56,84,21,20,215,65,32,22
//     if(ages[i]>=21)
//     {
//         canDrink.push(ages[i]);
//     }    
// }
// console.log(canDrink);   //50,25,41,34,56,84,215,65,32,22

// ******Filter

// const canDrink=ages.filter(function(age)
// {
//     if(age>=21)
//     {
//         return true;
//     }
// });
// console.log(canDrink);  //50,25,41,34,56,84,21,215,65,32,22


// ****** arrow function to find out the age 21 and greater

// const canDrink=ages.filter(age => age>=21);
// console.log(canDrink);  //50,25,41,34,56,84,21,215,65,32,22

// ******* function to find out the company name whose category is Retail

// const canDrink=ages.filter(function(age)
// {
//     if(age>=21)
//     {
//         return true;
//     }
// });
// console.log(canDrink);  //50,25,41,34,56,84,21,215,65,32,22

// ****function to find out all the companies whose type is retail

// const CompanyName=companies.filter(function(company)
// {
//     if(company.category==="IT")
//     {
//         return true;
//     }
// });
// console.log(CompanyName);  //50,25,41,34,56,84,21,215,65,32,22

//   *******arrow Function to find all ratail company

// const CompanyName=companies.filter(company => company.category==="IT");
// console.log(CompanyName);

// ********Get all compsnies started in 80sss

// const companyName=companies.filter(function(company)
// {
//     if(company.start>=1940 && company.start<=1950)
//     {
//         return true;
//     }    
// });
// console.log(companyName);

// *****Using Arrow Function

// const companyName=companies.filter(company => (company.start>=1940 && company.ends<=2005));
// console.log(companyName);


// ****Map functionssssss

// const companyName=companies.map(function(company)
// {
//     return company.name;
// });
// console.log(companyName);

// ***map function using to fetch the company Details.....

// const companyDetails=companies.map(company => `${company.name} [${company.start} to ${company.ends}]`);
// console.log(companyDetails);

// *****To find the square of the age using map and sqrt function...

// const ageSqrt=ages.map(age => Math.sqrt(age));
// console.log(ageSqrt);       // 7.0710678118654755,
                            // 5,
                            // 3.872983346207417,
                            // 6.4031242374328485,
                            // 5.830951894845301,
                            // 7.483314773547883,
                            // 9.16515138991168,
                            // 4.58257569495584,
                            // 4.47213595499958,
                            // 14.66287829861518,
                            // 8.06225774829855,
                            // 5.656854249492381,
                            // 4.69041575982343 


// ******How to use map function mapping to anther map

// const ageMap=ages.map(age => Math.sqrt(age)).map(age => age*2);
// console.log(ageMap);       

// Sorting Merthod

// To sort the comapanies according to the starting date

// const sortedCompany=companies.sort(function(c1,c2)
// {
//     if(c1.start>c2.start)
//     {
//         return 1;
//     }
//     else
//     {
//         return -1;
//     }
// });
// console.log(sortedCompany);

// using Arrow Function

// const sortedCompany=companies.sort((c1,c2) => (c1.start>c2.start ? 1 : -1));
// console.log(sortedCompany);

// ***function to sort the array of ages

// const sortedAges=ages.sort((a,b) => a-b);
// console.log(sortedAges);

// *****function Reduce to find the sum of ages using arrow function

// const ageSum=ages.reduce((total,age) => total+age,0);
// console.log(ageSum);

// ****reduce function to find the sum of ages using normal function

// const ageSum=ages.reduce(function(total,age)
// {
//     return total+age;
// },0);
// console.log(ageSum);

// combination of all function

const combination=ages
.map(age=>age*2)
.filter(age =>age>=60)
.sort((a,b)=>a-b)
.reduce((total,age) => total+age ,0);
console.log(combination);





