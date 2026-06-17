// const promise = new Promise((resolve, reject )=>{
//     resolve("hello form promise")
//     resolve(100)
// })

// promise.then((data)=>{
//     console.log(data)
// })



// const promise = new Promise((resolve, reject )=>{
//     reject("network error")
// })

// promise.catch((error)=>{
//     console.log(error)
// })




// const promise = new Promise((resolve , reject)=>{
//     let success = true

//     if(success){
//         resolve("success")
//     }else{
//         reject("failed")
//     }
// })

// promise.then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })





//API FETCHING
// fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })






// const result = fetch("https://jsonplaceholder.typicode.com/users")
// console.log(result.data)




//PROMISE CHAINING
// Promise.resolve(10)
// .then((num)=>{
//     return num*2
// })
// .then((num)=>{
//     return num+5
// })
// .then((num)=>{
//     console.log(num)
// })




//CATCH PROPAGATION
// Promise.resolve()
// .then(()=>{
//     console.log("step 1")
// })
// .then(()=>{
//     console.log("step2 ")
//     throw new Error ("booommmmmm")
// })
// .then(()=>{
//     console.log("step 3")
// })
// .catch((err)=>{
//     console.log(err.message)
// })





// PROMISE METHODS
// Promise.all([
//     Promise.resolve("milk"),
//     Promise.resolve("sugar"),
//     Promise.resolve("tea")
// ]).then(console.log)



// Promise.all([
//     Promise.resolve("milk"),
//     Promise.reject("sugar"),
//     Promise.resolve("tea"),
//     Promise.reject("day"),
// ]).then(console.log).catch(console.log)




// Promise.allSettled([
//     Promise.resolve("milk"),
//     Promise.reject("sugar"),
//     Promise.resolve("tea"),
//     Promise.reject("day"),
// ]).then(console.log).catch(console.log)





// const p1 = new Promise(resolve =>{
//     setTimeout(()=>{
//         resolve("a")
//     },3000)
// })
// const p2 = new Promise(resolve =>{
//     setTimeout(()=>{
//         resolve("b")
//     },1000)
// })

// Promise.race([p1,p2])
// .then(console.log)



// Promise.any([
//     Promise.reject("a"),
//     Promise.reject("b"),
//     Promise.resolve("c")
// ])
// .then(console.log)




// function getusers(callback){
//     setTimeout(()=>{
//         callback({
//             id:1,
//             name:"mehak"
//         })
//     },2000)
// }
// getusers((user)=>{
//     console.log(user)
// })




// function getUsers(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({
//             id:1,
//             name:"mehak"
//         })
//     },2000)
//   })
// }
// getUsers().then((user)=>{
//     console.log(user)
// })





// function fetchUser(cb){
//     setTimeout(()=>{
//         cb("ram")
//     },1000)
// }



// function FetchUsers(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(
          
//         "mehak"
//         )
//     },1000)
//   })
// }
// FetchUsers().then((user)=>{
//     console.log(user)
// })