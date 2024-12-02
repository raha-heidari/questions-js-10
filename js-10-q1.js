// Using an example, explain the difference between block,global and function scope in variables.


// Global scope
let global = "I'm global";  

console.log(global);  // code here can use global



// function scope
function laptopName() {
    console.log(global); // code here can use global ✅
    let laptop = "hp";
    console.log(laptop); // ✅
  }
   laptopName();
   console.log(laptop); // => not defined



  // block scope
  {
    let num = 5; 
    console.log(num); // ✅
    
  }

  console.log(num); // num can NOT be used here  => not defined

  