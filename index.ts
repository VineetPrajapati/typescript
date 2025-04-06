// string
let name1: string = "Vineet";
console.log(name1);

// number
let num: number = 123;
console.log(num);

//  Boolean
let val: boolean = true || false;
console.log(val);

// Inference
console.log(`---------------Inference-------------`);

let tech = "TypeScript";
// tech = 8; we can't use number as a value of tech bcz it inferring the "tech" type is string
let number = 8;
// number = "val" same with this as well
console.log(tech);
console.log(number);

// any type
console.log(`---------------any type-------------`);
let colors: any = "colors";
colors = 20;
colors = false;
console.log(colors);

// Function Parameters Annotations
console.log(`---------Function Parameters Annotations--------`);
// regular function
function addNum(num: number) {
  return num + 1;
}
console.log(addNum(4));

// Arrow function
const multi = (num1: number, num2: number) => num1 * num2;
console.log(multi(4, 10));

// Array type
console.log(`---------Array type--------`);
// method 1
let numb1: number[] = [12, 3, 5];
console.log(numb1);
let arr1: string[] = ["hello", "how are", "you"];
arr1.push("buddy");
console.log(arr1);

// method 2
let num2: Array<number> = [34, 6, 7];
console.log(num2);

let arr2: Array<string> = ["hey!", "guys"];
console.log(arr2);

// object type
console.log(`---------Object--------`);

let person: { firstName: string; lastName: string; age: number } = {
  firstName: "Vineet",
  lastName: "Prajapati",
  age: 23,
};
console.log(
  `Name : ${person.firstName} ${person.lastName}, Age: ${person.age}`
);

// using function
function person1() : {firstName: string; lastName: string; age: number} {
  return {
    firstName: "John",
    lastName: "Doe",
    age: 45,
  };
}
console.log(person1().age);
