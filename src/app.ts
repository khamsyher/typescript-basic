// ATM basic program

// let number:number=3;
// let result: string;

// switch(number){
//     case 1:
//         result = "Check money in account"
//         break;
//     case 2:
//         result = "Get money"
//         break;
//     case 3:
//         result = "Push money in"
//         break;
//     default:
//         result = "Please again"
//         break;
// }

// console.log(` Result : ${result}`)



// for loop 1 to 10

// for(let i:number=1; i<=10; i++){
//     console.log(i)
// }


// this is function 

// const number=(n:number):string=>{
//     if(n%2 ==0){
//         return "ເລກຄູ່"
//     }
//     else{
//         return "ເລກຄິີ່"
//     }
// }

// console.log(number(99))


// this is default paramentors in function

// function intraduction(name:string, age:number,address:string="xaysomboun"){
//     console.log(name,age,address)
// }

// intraduction("kham",20,"xaysomboun")
// intraduction("win",22,"veingchan")
// intraduction("chit",21,"xaysomboun")
// intraduction("chai",21)

// this object

// const person={
//     name: 'kham',
//     age:20
// }

// function fullname(data:{name:string, age:number}){
//     console.log(`Name: ${data.name}  and  Age: ${data.age}`)
// }

// fullname(person)


// this is type alieses


type employee ={
    readonly id:number,
    name:string,
    age:number,
    salary:number,
    phone?: string
}

let emp1:employee={id:1, name:"kham",age:20,salary:600000,phone:"020 xx-xxx-xxx"}
let emp2:employee={id:2, name:"see",age:21,salary:630000,phone:"020 xx-xxx-xxx"}
let emp3:employee={id:3, name:"see",age:21,salary:630000}

console.log(emp1)
console.log(emp2)
console.log(emp3)