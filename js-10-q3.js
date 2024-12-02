// According to your js10 session, write a code that shows why we shouldn't use var?


 //for (var, let, const)
 console.log("for with var");
 for (var i = 1; i <= 5; i++) {
  console.log(i);
 }
console.log("i:", i); // 6 ✅

 console.log("for with let");
for (let i = 1; i <= 5; i++) {
   console.log(i);
 }
 console.log("i:", i); // not defined 

 console.log("for with const"); // It is not possible because const is constant❌
 for (const i = 1; i <= 5; i++) {
   console.log(i);
 }