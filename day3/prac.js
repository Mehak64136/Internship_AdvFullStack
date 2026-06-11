//OBJECT
// let student1name = "sachin"
// let student1age = 12
// let student1city = "panipat"

// let student2name = "sachin"
// let student2age = 12
// let student2city = "panipat"

// const allstudata=[
// {
//     name : "sachin",
//     age:12,
//     city : "panipat"
// }
// ]


// const student={
//     name : "mehak",
//     age : 20,
//     city : "panipat"
// }
// console.log(student.name)
// console.log(student["name"])

// let key = "name"
// console.log(student[key])
// console.log(student.key)



//Function(method) in Object
// const student={
//     name : "mehak",
//     age : 20,
//     city : "panipat",
//     sayYourSkills:function(){
//         console.log("hello my skills are mern stack")
//     }
// }

// student.sayYourSkills()



//this 
// const student={
//     name : "mehak",
//     age : 20,
//     city : "panipat",
//     skills:"mern stack",
//     sayYourSkills:function(){
//         console.log(this.skills)
//     }
// }

// student.sayYourSkills()



// const obj={
//     name :"ram"
// }

// const obj2 = obj
// obj2.name = "shyam"
// console.log(obj.name)




// const dog2 = {
//     name : "jack",
//     bark(){
//         console.log("heloo, i am barking")
//     }
// }

// const dog3 = {
//     name : "meta",
//     bark(){
//         console.log("heloo, i am barking")
//     }
// }

// const dog1 = {
//     name : "pilla",
//     bark(){
//         console.log("heloo, i am barking")
//     }
// }



//PROTOTYPE
// const animal = {
//     bark(){
//         console.log("hello, i am barking")
//     }
// }


// const dog = Object.create(animal)
// dog.name = "meta"
// dog.bark()





//CONSTRUCTOR FUNCTION
// const student1={
//     name:"ram",
//     age:25
// }

// const student2={
//     name:"praveen",
//     age:25
// }

// const student3={
//     name:"sachin",
//     age:24
// }

// const student={
//     name:"gyanni",
//     age:24
// }


// function student(name,age){
//     this.name = name;
//     this.age = age;
// }

// const s1 = new student("ram",25)
// const s2 = new student("sachin",30)

// console.log(s1)



// function user(name){
//     this.name = name
// }

// const u1 = new user("ram")
// console.log(u1.name)




// function student(name,age){
//     this.name=name
//     this.age=age
//     this.greet=function(){
//         console.log("hello")
//     }
// }
// const s1= new student("ram",25)
// const s2= new student("jatin",26)
// const s3= new student("pravin",28)

// console.log(s1,s2)




// function student(name,age){
//     this.name=name
//     this.age=age
// }

// student.prototype.greet = function(){
//     console.log("hello")
// }
// const s1= new student("ram",25)
// const s2= new student("jatin",26)
// const s3= new student("pravin",28)

// s1.greet()
// s2.greet()



// function student(){}
// console.log(student.prototype)



//proto
// function student(){}
// const s1 = new student()
// console.log(s1.__proto__===student.prototype)


//es6 classes
// function student(name,age){
//     this.name = name
//     this.age = age
// }

// student.prototype.greet=function(){
//     console.log("hello")
// }


// class student{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     greet(){
//         console.log("hello")
//     }
// }




//INHERITANCE
// class animal{
//     eat(){
//         console.log("eating")
//     }
// }

// class dog extends animal{

// }
// const d= new dog()
// d.eat()



// class animal{
//     constructor(name){
//         this.name = name
//     }
// }

// class dog extends animal{
//     constructor(name){
//         super(name)
//     }
// }
// const d= new dog("tom")



//getter / setter 
// class user{
//     get message(){
//         return "hello"
//     }
// }
// const u = new user()
// console.log(u.message)



// class user{
//     set age(value){
//         if(value<0){
//             throw error("invalid age")
//         }
//         this._age = value
//     }
// }



//static
// class mathhelper{
//     static add(a,b){
//         return a+b
//     }
// }

// mathhelper.add(10,20)


// class animal{
//     eat(){
//         console.log("eating")
//     }
// }
// class dog extends animal{
//     bark(){
//         console.log("wooo")
//     }
// }

// const d = new dog()
// d.bark()
// d.eat()