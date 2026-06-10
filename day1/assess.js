// 1. Create a variable using const and store your college name. Print it.
const collegeName = "Geeta University";
console.log("College Name is :", collegeName);


// 2. Create a variable using let and update its value three times.
let marks = 40;
console.log("Initial marks:", marks);
marks = 60;
console.log("Updated 1st time:", marks);
marks = 80;
console.log("Updated 2nd time:", marks);
marks = 100;
console.log("Updated 3rd time:", marks);


// 3. Create a block using {} and show that a variable declared with let cannot be accessed outside it.
{
  let score = 99;
  console.log("Inside block score:", score);
}
// console.log(score);  -> it will create error as it is not defined outside the block


// 4. Write a program to swap two numbers using array destructuring.
let a = 20;
let b = 30;
console.log("Before swap:", a, b);
[a, b] = [b, a];
console.log("After swap:", a, b);

// 5. Create an arrow function that returns the cube of a number.
const cube = x => x * x * x;
console.log("Cube of 9 is :", cube(9));


// 6. Create an arrow function to check whether a number is even or odd.
const oddeven = num => (num % 2 === 0 ? "Even" : "Odd");
console.log("91 is", oddeven(91));
console.log("22 is", oddeven(22));


// 7. Create an arrow function that finds the maximum of three numbers.
const maxxx = (x, y, z) => Math.max(x, y, z);
console.log("Max of 2,6,8 is :", maxxx(2,6,8));


// 8. Use destructuring to get first, second and remaining values.
// const nums = [10, 20, 30, 40, 50]; 
const nums = [10, 20, 30, 40, 50];
const [first, second, ...remaining] = nums;
console.log("First:", first);
console.log("Second:", second);
console.log("Remaining:", remaining);


// 9. Create a function that receives a user's name and age and returns a greeting using template literals.
function greeting(name, age) {
  return `Hello ${name}, you are ${age} years old.`;
}
console.log(greeting("Ram", 25));


// 10. Generate the following URL dynamically using template literals.
const userId = 101;
const apiUrl = `/api/users/${userId}`;
console.log(apiUrl);


// 11. Create an object and destructure all properties.
const student = {
  name: "Ram",
  age: 25,
  course: "MERN"
};
const { name, age, course } = student;
console.log("Name is:", name);
console.log("Age is:", age);
console.log("Course is:", course);


// 12. Rename course to technology while destructuring.
const { course: technology } = student;
console.log("Technology:", technology);


// 13. Create a function with a default parameter.
function createUser(name, role = "Student") {
  return `Name: ${name}, Role: ${role}`;
}
console.log(createUser("Ram"));
console.log(createUser("Sham", "Teacher"));


// 14. Create a calculator function where the operation defaults to "add".
function calculator(x, y, operation = "add") {
  if (operation === "add") return x + y;
  if (operation === "subtract") return x - y;
  if (operation === "multiply") return x * y;
  if (operation === "divide") return x / y;
  return null;
}
console.log("Add:", calculator(80, 40));
console.log("Subtract:", calculator(80,40, "subtract"));


// 15. Create a function that receives unlimited numbers and returns their sum using the Rest Operator.
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum:", sumAll(100,200,300,400));


// 16. Create a function that receives unlimited numbers and returns the largest number.
function maxAll(...numbers) {
  return Math.max(...numbers);
}
console.log("Largest:", maxAll(10, 20, 30, 40));


// 17. Merge two arrays using the Spread Operator.
const frontend = ["HTML", "CSS"];
const backend = ["Node", "Express"];
const fullStack = [...frontend, ...backend];
console.log("Full Stack:", fullStack);


// 18. Copy an array using the Spread Operator and add one extra value.
const copysub = [...frontend, "JavaScript"];
console.log("Copied array with extra:", copysub);


// 19. Copy an object and update only the email property.
const user = {
  name: "Ram",
  email: "ram@example.com"
};
const updatedUser = { ...user, email: "ram.new@example.com" };
console.log("Updated user:", updatedUser);


// 20. Create a product object and create a new object with an added discount field using the Spread Operator.
const product = {
  name: "Laptop",
  price: 50000
};
const discountedProduct = { ...product, discount: "10%" };
console.log("Product with discount:", discountedProduct);


// 21. Use map() and an arrow function to return only names from the given array.
const users = [
  { name: "Ram", age: 25 },
  { name: "Mohan", age: 30 },
  { name: "Amit", age: 22 }
];
const userNames = users.map(user => user.name);
console.log("User names:", userNames);


// 22. Use filter() to get users whose age is greater than 24.
const usersAbove24 = users.filter(user => user.age > 24);
console.log("Users older than 24:", usersAbove24);


// 23. Use reduce() to calculate the total age of all users.
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log("Total age:", totalAge);


// 24. Create a function createInvoice(customerName, amount) and return a formatted string.
function createInvoice(customerName, amount) {
  return `Invoice for ${customerName}: $${amount.toFixed(2)}`;
}
console.log(createInvoice("Ram", 1300));


// 25. Mini Challenge: calculate total marks and average.
const student2 = {
  name: "Ram",
  marks: [80, 90, 70, 85]
};
const { name: studentName, marks } = student2;
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const averageMarks = totalMarks / marks.length;
console.log(`Student: ${studentName}`);
console.log(`Total: ${totalMarks}`);
console.log(`Average: ${averageMarks}`);