// Q1 
// Create your own function: 
// greetUser(name, callback) 
// Output: 
// Hello Ram 
// Welcome Ram 

function greetUser(name, callback) {
    callback(name);
}

function display(name) {
    console.log("Hello " + name);
    console.log("Welcome " + name);
}

greetUser("Ram", display);


// Q2 
// Create: 
// calculate(a,b,callback) 
// Perform: 
// ● Add 
// ● Multiply 
// ● Divide 
// Using callback. 

function calculate(a, b, callback) {
    return callback(a, b);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));   


// Q3 
// Create a custom callback based calculator. 
// Input: 
// calculator(20,10,operation) 
// Output should depend on operation callback. 

function calculator(a, b, operation) {
    return operation(a, b);
}

console.log(calculator(20, 10, (a, b) => a + b));
console.log(calculator(20, 10, (a, b) => a - b));
console.log(calculator(20, 10, (a, b) => a * b));

// Q4 
// Create a function: 
// processStudent(student, callback) 
// Callback should print student details. 

function Student(student, callback) {
    callback(student);
}

const studentData = { name: "Mehak", age: 20, grade: "A" };

Student(studentData, function(student) {
    console.log(`Student Details: Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
});

// Q5 
// Create a function: 
// downloadFile(callback) 
// Simulate file download after 2 sec. 

function download(callback) {
    console.log("Downloading file...");
    setTimeout(() => {
        callback("my file");
    }, 2000);
}

download((fileName) => {
    console.log(`${fileName} has downloaded completely.`);
});

// Q6 
// Create: 
// registerUser(callback) 
// After registration callback should send welcome email. 

function registerUser(callback) {
    console.log("User Registered");
    callback();
}

function sendWelcomeEmail() {
    console.log("Welcome Email Sent");
}

registerUser(sendWelcomeEmail);

// Q7 
// Create: 
// placeOrder(callback) 
// After order callback should generate invoice. 

function placeOrder(orderId, callback) {
    console.log(`Order ${orderId} placed.`);
    callback(orderId);
}

placeOrder("Or0112", (id) => {
    console.log(`Invoice generated successfully for order: ${id}`);
});

// Q8 
// Create: 
// fetchUser(callback) 
// Return dummy user after 3 sec. 

function fetchUser(callback) {
    setTimeout(() => {
        let user = {
            id: 1,
            name: "Ram"
        };

        callback(user);
    }, 3000);
}

fetchUser((user) => {
    console.log(user);
});


// Q9 
// Create callback-based OTP verification. 

function verifyOTP(inputOTP, actualOTP, callback) {
    if (inputOTP === actualOTP) {
        callback(null, "Verification successful!");
    } else {
        callback("Incorrect OTP. Access denied.", null);
    }
}

verifyOTP("4321", "4321", (error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log(success);
    }
});

// Q10 
// Create callback-based login system.

function loginSystem(username, password, callback) {
    if (username === "admin" && password === "pass123") {
        callback(null, "Access granted.");
    } else {
        callback("Invalid credentials.", null);
    }
}

loginSystem("admin", "pass123", (err, message) => {
    if (err) {
        console.log(err);
    } else {
        console.log(message);
    }
});

// Q11 
// Predict output 
// console.log("A"); 
// setTimeout(()=>{ 
// console.log("B"); 
// },0); 
// console.log("C"); 

// A
// C
// B

// Q12 
// Predict output 
// setTimeout(()=>{ 
// console.log(1); 
// },1000); 
// console.log(2); 

// 2
// 1

// Q13 
// Predict output 
// console.log("Start"); 
// setTimeout(()=>{ 
// console.log("Timeout"); 
// },0); 
// console.log("End"); 

//Start
// End
// Timeout

// Q14 
// Create countdown: 
// 5 
// 4 
// 3 
// 2 
// 1 
// Boom 
// Using setTimeout. 

function countdown(num) {
    if (num > 0) {
        console.log(num);
        setTimeout(() => countdown(num - 1), 1000);
    } else {
        console.log("Boom");
    }
}
countdown(5);

// Q15 
// Create digital bomb timer. 

let time = 10;

function bombTimer() {
    if (time > 0) {
        console.log(time);
        time--;

        setTimeout(bombTimer, 1000);
    } else {
        console.log("BOOOOOOOOOOOM!!!!!!!");
    }
}

bombTimer();

// Q16 
// Create delayed greeting system. 
// User enters name. 
// After 2 sec greeting appears. 
function greetUser(name) {
    setTimeout(() => {
        console.log("Hello " + name);
    }, 2000);
}

greetUser("Mehak");


// Q17 
// Create delayed notification system. 

function showNotification(message) {
    setTimeout(() => {
        console.log("Notification:", message);
    }, 3000);
}

showNotification("Your order has been shipped.");


// Q18 
// Create delayed button disable feature. 
function simulateButtonDisable() {
    let button = { disabled: false, innerText: "Click Me" };
    console.log("Button status:", button);

    setTimeout(() => {
        button.disabled = true;
        button.innerText = "Disabled";
        console.log("Button status updated:", button);
    }, 4000);
}
simulateButtonDisable();


// Q19 
// Create delayed redirect simulation. 
console.log("Redirecting in 3 seconds...");

setTimeout(() => {
    console.log("Redirected to Home Page");
}, 3000);


// Q20 
// Create a function: 
// wait(seconds, callback)

function wait(seconds, callback) {
    setTimeout(callback, seconds * 1000);
}

wait(3, () => {
    console.log("3 seconds completed.");
});


// Q21 
// Simulate: 
// Login 
// ↓ 
// Get User 
// ↓ 
// Get Orders 
// ↓ 
// Show Orders 
// Using nested callbacks. 
function login(callback) {
    setTimeout(() => {
        console.log("Login Successful");
        callback();
    }, 1000);
}

function getUser(callback) {
    setTimeout(() => {
        console.log("User Data Fetched");
        callback();
    }, 1000);
}

function getOrders(callback) {
    setTimeout(() => {
        console.log("Orders Fetched");
        callback();
    }, 1000);
}

login(() => {
    getUser(() => {
        getOrders(() => {
            console.log("Showing Orders");
        });
    });
});


// Q22 
// Create callback hell with 5 nested levels. 

function step1(callback) {
    setTimeout(() => { console.log("Level 1 Complete"); callback(); }, 500);
}
function step2(callback) {
    setTimeout(() => { console.log("Level 2 Complete"); callback(); }, 500);
}
function step3(callback) {
    setTimeout(() => { console.log("Level 3 Complete"); callback(); }, 500);
}
function step4(callback) {
    setTimeout(() => { console.log("Level 4 Complete"); callback(); }, 500);
}
function step5() {
    setTimeout(() => { console.log("Level 5 Complete - Ultimate Pyramid of Doom reached!"); }, 500);
}


step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                step5();
            });
        });
    });
});

// Q23 
// Simulate food ordering system. 
// Order 
// ↓ 
// Cook 
// ↓ 
// Pack 
// ↓ 
// Deliver 

function orderFood(item, callback) {
    console.log(`Food Ordered: ${item}`);
    setTimeout(() => callback(item), 1000);
}

function cookFood(item, callback) {
    console.log(`Cooking: ${item}...`);
    setTimeout(() => callback(item), 1500);
}

function packFood(item, callback) {
    console.log(`Packing: ${item} in eco-containers...`);
    setTimeout(() => callback(item), 800);
}

function deliverFood(item) {
    console.log(`Delivered: Hot ${item} has arrived at your doorstep! `);
}


orderFood("Pasta", (item) => {
    cookFood(item, (cookedItem) => {
        packFood(cookedItem, (packedItem) => {
            deliverFood(packedItem);
        });
    });
});

// Q24 
// Simulate hospital process. 
// Registration 
// ↓ 
// Doctor 
// ↓ 
// Test 
// ↓ 
// Medicine 

function registration(cb) {
    setTimeout(() => {
        console.log("Registration Done");
        cb();
    }, 1000);
}

function doctor(cb) {
    setTimeout(() => {
        console.log("Doctor Consultation Done");
        cb();
    }, 1000);
}

function test(cb) {
    setTimeout(() => {
        console.log("Tests Completed");
        cb();
    }, 1000);
}

function medicine() {
    setTimeout(() => {
        console.log("Medicine Provided");
    }, 1000);
}

registration(() => {
    doctor(() => {
        test(() => {
            medicine();
        });
    });
});

// Q25 
// Simulate college admission process. 
// Form 
// ↓ 
// Verification 
// ↓ 
// Payment 
// ↓ 
// Admission 

function submitForm(student, callback) {
    console.log(`Application form submitted for ${student}.`);
    setTimeout(() => callback(student), 1000);
}

function verifyDocuments(student, callback) {
    console.log(`Verifying certificates for ${student}...`);
    setTimeout(() => callback(student), 1200);
}

function processPayment(student, callback) {
    console.log(`Processing semester fees payment for ${student}...`);
    setTimeout(() => callback(student), 1000);
}

function finalAdmission(student) {
    console.log(`Admission Granted! Welcome to the university, ${student}. 🎉`);
}


submitForm("Mehak", (name) => {
    verifyDocuments(name, (name) => {
        processPayment(name, (name) => {
            finalAdmission(name);
        });
    });
});

// Q26 
// Create callback chain for: 
// Signup 
// ↓ 
// Verify Email 
// ↓ 
// Login 
// ↓ 
// Dashboard 

function signup(email, callback) {
    console.log(`Creating account for: ${email}`);
    setTimeout(() => callback(email), 1000);
}

function verifyEmail(email, callback) {
    console.log(`Verification link clicked for ${email}. Email Verified.`);
    setTimeout(() => callback(email), 1000);
}

function loginUser(email, callback) {
    console.log(`Logging in user: ${email}`);
    setTimeout(() => callback(email), 800);
}

function loadDashboard(email) {
    console.log(`Welcome back ${email}! Loading your dashboard analytics...`);
}


signup("helloo@example.com", (email) => {
    verifyEmail(email, (email) => {
        loginUser(email, (email) => {
            loadDashboard(email);
        });
    });
});


// Q27 
// Create nested callbacks with random delays. 

function randomTask(name, callback) {
    let delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
        console.log(name + " completed in " + delay + " ms");
        callback();
    }, delay);
}

randomTask("Task 1", () => {
    randomTask("Task 2", () => {
        randomTask("Task 3", () => {
            console.log("All Tasks Completed");
        });
    });
});

// Q28 
// Create callback-based weather fetching simulation. 

function fetchWeather(callback) {
    setTimeout(() => {
        let weather = {
            city: "Delhi",
            temp: "35°C"
        };

        callback(weather);
    }, 2000);
}

fetchWeather((data) => {
    console.log("City:", data.city);
    console.log("Temperature:", data.temp);
});


// Q29 
// Create callback-based e-commerce checkout flow. 

function checkInventory(cartItem, callback) {
    console.log(`Checking inventory stock for: ${cartItem}`);
    setTimeout(() => callback(cartItem), 800);
}

function calculateTax(item, callback) {
    console.log(`Calculating structural tax for ${item}...`);
    setTimeout(() => callback(item, 18), 700); // 18% tax
}

function chargeCard(item, tax, callback) {
    console.log(`Charging customer account for ${item} (including ${tax}% tax)...`);
    setTimeout(() => callback(true), 1500);
}


checkInventory("MacBook Pro", (item) => {
    calculateTax(item, (item, taxRate) => {
        chargeCard(item, taxRate, (isSuccess) => {
            if (isSuccess) console.log("Transaction secure. Order pipeline started!");
        });
    });
});

// Q30 
// Create callback-based movie booking flow.

function selectMovie(cb) {
    setTimeout(() => {
        console.log("Movie Selected");
        cb();
    }, 1000);
}

function selectSeat(cb) {
    setTimeout(() => {
        console.log("Seat Selected");
        cb();
    }, 1000);
}

function makePayment(cb) {
    setTimeout(() => {
        console.log("Payment Done");
        cb();
    }, 1000);
}

function ticketBooked() {
    console.log("Ticket Booked Successfully");
}

selectMovie(() => {
    selectSeat(() => {
        makePayment(() => {
            ticketBooked();
        });
    });
});


// Q31 
// Create live clock. 

// function startLiveClock() {
//     setInterval(() => {
//         const now = new Date();
//         const timeString = now.toLocaleTimeString();
//         console.log(`Current Time: ${timeString}`);
//     }, 1000);
// }

// startLiveClock();


// Q33 
// Create traffic light simulation. 
// Red 
// ↓ 
// Yellow 
// ↓ 
// Green 
// Repeat forever. 


function runTrafficLight() {
    function changeLight() {
        console.log(" RED - Stop!");
        
        setTimeout(() => {
            console.log(" YELLOW - Prepare!");
            
            setTimeout(() => {
                console.log(" GREEN - Go!");
                
                setTimeout(() => {
                    changeLight();
                }, 4000); 
                
            }, 2000); 
            
        }, 4000); 
    }
    
    changeLight();
}
runTrafficLight();

// Q34 
// Create auto slider. 
// Every 3 sec image changes. 

const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
let currentIndex = 0;

function startAutoSlider() {
    console.log(`Showing slide: ${images[currentIndex]}`);
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        console.log(`Showing slide: ${images[currentIndex]}`);
    }, 3000);
}
startAutoSlider();


// Q36 
// Predict Output 
// console.log("A"); 
// setTimeout(()=>{ 
// console.log("B"); 
// },1000); 
// setTimeout(()=>{ 
// console.log("C"); 
// },0); 
// console.log("D"); 

// A
// D
// C
// B

// Q37 
// Predict Output 
// function one(){ 
// console.log("One"); 
// } 
// setTimeout(one,0); 
// console.log("Two"); 

//Two
// One

// Q38 
// Predict Output 
// console.log("Start"); 
// for(let i=0;i<1000000000;i++){} 
// setTimeout(()=>{ 
// console.log("Timeout"); 
// },0); 
// console.log("End"); 

//Start
// End
// Timeout

// Q39 
// Create Event Loop Visualizer. 
// Show: 
// Call Stack 
// Web API 
// Callback Queue 
// Flow on screen using DOM. 

// Answer == in nine.html

// Q40 
//  FINAL BOSS 
// Build a Mini Async Task Manager

// Amswer == forty.html