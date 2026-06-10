//global scope
// let name = "mehak"
// function show(){
//     console.log(name)
// }
// show()


//func scope
// function show(){
// let name = "mehak"
// }
// console.log(name)    //err
// show()


//block scope
// {
//     let city = "delhi"
//     console.log(city)
// }


//lexical
// function outer(){
//     let username = "parveen"
//     function inner(){
//         console.log(username)
//     }
//     inner()
// }
// outer()


//lexical chaining
// function a(){
//     let x = 10
//     function b(){
//         let y = 20
//         function c(){
//             console.log(x)
//             console.log(y)
//         }
//         c()
//     }
//     b()
// }
// a()
// console.log(x)


//closure
// function outer(){
//     let count = 0
//     function inner(){
//         count ++
//         console.log(count)
//     }
//     return inner
// }
// const result = outer()
// result()
// result()
// result()



// let company = "google"
// function department(){
//     let dept = "eng"
//     function team(){
//         let teamname = "frontend"
//         function employee(){
//             let emp = "ram"
//             console.log(company)
//             console.log(dept)
//             console.log(teamname)
//             console.log(emp)
//         }
//         employee()
//     }
//     team()
// }
// department()



// let name = "global"
// function outer(){
//     let name = "outer"
//     function inner(){
//         let name = "inner"
//         console.log(name)
//     }
//     inner()
// }
// outer()



// let a = 10
// function outer(){
//     let b = 20
//     return function middle(){
//         let c = 30
//         return function inner(){
//             console.log(a)
//             console.log(b)
//             console.log(c)
//         }
//     }
// }
// const x = outer()
// const y = x()
// y()



// let x = 1
// function a(){
//     let x = 2
//     function b(){
//         let x = 3
//         function c(){
//             let x = 4
//             function d(){
//                 console.log(x)
//             }
//             d()
//         }
//         c()
//     }
//     b()
// }
// a()



//iife
// (function(name){
//     console.log(name)
// })("ram")


// const result = (function(a,b){
//     return a+b
// })(10,20)
// console.log(result)


//hof
// function hello(){
// console.log("hello")
// }
// function execute(fn){
// fn()
// }
// execute(hello)



// function calculate(a,b,operation){
//     return operation(a,b)
// }
// function add(x,y){
//     return x+y
// }
// console.log(calculate(70,90,add))


// map()function: 
// const nums = [1,2,3,4]
// const result =  nums.map(nums => nums*2)
// console.log(result)



// const products =[
//     {id:1, name :"laptop" , price :40000, location : "panipat" },
//     {id:2, name :"tv" , price :140000, location : "delhi" },
//     {id:3, name :"bag" , price :20000, location : "noida" },
//     {id:4, name :"pen" , price :8000, location : "noida" },
//     {id:5, name :"book" , price :40000, location : "gurgaon" },
//     {id:6, name :"tablet" , price :120000, location : "panipat" },
//     {id:7, name :"ac" , price :400000, location : "delhi" }
// ]

// const result = products.map(products=>products.name)
// console.log(result)



//filter
// const arr=[10,20,30,40,50]
// const result = arr.filter(a =>a >= 30)
// console.log(result)


// const products=[
//     {price:10000},
//     {price:300},
//     {price:700},
//     {price:200},
// ]
// const res = products.filter(prod=> prod.price>500)
// console.log(res)



// const name = ["ram","amit","sachin","priyansh","ankush","sahil","gyan","shiv"]
// const result1 = name.filter(a => a[0]==="s")
// console.log(result1)


//reduce
// const nums = [1,2,3,4]
// const sum = nums.reduce((acc,curr) => acc+curr , 0)
// console.log(sum)


// const prices = [100,200,300,400,500]
// const mul = prices.reduce((acc,curr) => acc*curr , 1)
// console.log(mul)


// const arr= [10,50,20,30,90,60]
// const max = arr.reduce((acc,curr) => curr>acc ? curr : acc )
// console.log(max)


const words = ["hello" , "how" , "Are" , "you"]
const join = words.reduce((acc,curr) => acc + " " + curr , )
console.log(join)