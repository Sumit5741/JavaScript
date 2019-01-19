/******* fnction to create fullname from firstname and lastname ********/

// var person =
// {
//     first_name:'Sumit',
//     last_name:'Kumar',
//     getFullName: function()
//    {
//        console.log(this.first_name+" "+this.last_name);
//    }
// }
// person.getFullName();


// /* making fullname from firstname and lastname using this and bind method*/

// var person =
// {
//     first_name:'Sumit',
//     last_name:'Kumar',
//     getFullName: function()
//    {
//        var self=this;
//        var name= function()
//        {
//        console.log(this.first_name+" "+this.last_name);
//         //    full_name=first_name+" "+last_name;
//        }.bind(this);
//        return name();
//     //    console.log(this.first_name+" "+this.last_name);
//    }
// }
// person.getFullName();



/* making fullname from firstname and lastname using arrow function*/

// var person =
// {
//     first_name:'Sumit',
//     last_name:'Kumar',
//     getFullName: function()
//    {
//     //    var self=this;
//        var name=() => console.log(this.first_name+" "+this.last_name);
//         //    full_name=first_name+" "+last_name;
//        return name();
//     //    console.log(this.first_name+" "+this.last_name);
//    }
// }
// person.getFullName();


/* creating fullname using the .....*/

// function createUser(first_name,last_name)
// {
//     var full_name=first_name+" "+last_name;
//     return{
//         first_name,
//         last_name,
//         full_name
//     };
// }
// let user=createUser('sumit','kumar');
// console.log(user.first_name,user.last_name,user.full_name);


// Destructuring

// var person={
//     first_name: 'Raj',
//     last_name: 'Kumar',
//     full_name: 'Raj Kumar'
// }
// let 
//     first_name=person.first_name,
//     last_name=person.last_name,
//     full_name=person.full_name
// console.log(first_name,last_name,full_name);


// // ************************************

// var person={
//     first_name: 'Raj',
//     last_name: 'Kumar',
//     full_name: 'Raj Kumar'
// }
// let
//  {
//     first_name,
//     last_name,
//     full_name
// }= person;
// console.log(first_name,last_name,full_name);

// ************************************

var person={
    first_name: 'Raj',
    last_name: 'Kumar',
    full_name: function(first_name,last_name)
{
    var full_name=first_name+" "+last_name;
    return full_name;
}
}

console.log(person.full_name('Sumit','Kumar'));
