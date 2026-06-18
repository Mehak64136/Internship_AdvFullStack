// getuser()
// .then((user)=>{
//     return getorder(user.id)
// })

// .then((orders)=>{
//     return getpayment(orders.id)
// })

// .then((payment)=>{
//     console.log(payment)
// })

// .catch(console.log)




//ASYNC
// async function greet(){
//     return "hello"
// }

// console.log(greet())



// async function getno(){
//     return 100
// }

// return Promise.resolve(100)





//AWAIT
// const promise = Promise.resolve("mehak")
// async function getdata() {
//     const result = await promise
//     console.log(result)
// }

// getdata()
// console.log(getdata())






// function getusers(){
//     return promise.resolve({
//         name : "ram"
//     })
// }
// getusers()
// .then(user=>{
//     console.log(user)
// })




// const promise = Promise.resolve({name : "ram"})
// async function getusers() {
//     const result = await promise
//     console.log(result)
// }

// getusers()





// async function main() {
//     const logindata = await login() 
//     const user = await getuser()
//     const getorders = await orders ()
// }




//ERROR HANDLING IN ASYNC
// fetchdata()
// .catch((err)=>{
//     console.log(err)
// })


// with try catch
// try{
//     const data = await fetchdata()
// }catch(err){
//     console.log(err)
// }

//can also be written as:
// await fetchdata().catch(console.log)





//sequential execution: will execute line by line - total execution time - 9 sec
// const user = await getuser()
// const orders = await getorders()
// const uspayment = await getpayment()


// //parallel execution - total execution time - 3 sec
// const[user,order,payment] = await Promise.all([
//     getuser(),
//     getorders(),
//     getpayment()
// ])





//TOP LEVEL AWAIT
// async function main(paams) {
//     const data = await fetchdata()
// }

// // in  modern js:
// const data = await fetchdata()






//NORMAL ITERATION: use - array, string, map, set
// const arr=[10,20,30,40,50]
// for(const value of arr){
//     console.log(value)
// }


// problem - manlo values sath me nhi aa rhi or future me ek ek krke ayegi

// server data -> user 1(wait) -> user2 (wait) ->user3 : --- in this for of will not work

// we will use async iteration

// first to create async data sources:


// async function* getusers() {
//     yield"ram",
//     yield"shyam",
//     yield"shivam"
// }

// async function main() {
//     for await(const user of getusers()){
//         console.log(users)
//     }
// }