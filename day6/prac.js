// //EVENT BUBBLING
// const parent = document.querySelector("#parent")
// const child = document.querySelector("#child")

// parent.addEventListener(
//     "click",
//     ()=>{
//         console.log("parent")
//     }
// )

// child.addEventListener(
//     "click",
//     ()=>{
//         console.log("child")
//     }
// )




// console.log("start")
// setTimeout(() => {
//     console.log("hello")
// }, 6000);

// console.log("end")





console.log("hello")
var a = 10555
var b= 256

setTimeout(()=>{
    console.log("call")
},0)

function mul(x,y){
    const result = a*b
    return result
}

var c = mul(a,b)
console.log("mul result")