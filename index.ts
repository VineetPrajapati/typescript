/* // string
let name1: string = "Vineet";
console.log(name1);

// number
let num: number = 123;
console.log(num);

//  Boolean
let val: boolean = true || false;
console.log(val);
*/

/* // Inference
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
console.log(person1().age); */

/* // type aliases
console.log(`----Type Aliases-----`);
type User = {
  name: string;
  age: number;
  location: string;
};
const user: User = {
  name: "John",
  age: 34,
  location: "USA",
};
user.location = "India";
console.log(user.location);

console.log(`----Optional Properties-----`);

type UserInfo = {
  name: string;
  age: number;
  email?: string;
  readonly Mob: number;
};

const userData: UserInfo = {
  name: "Alice",
  age: 34,
  Mob: 1234567890,
};
userData.email = "alice123@gmail.com";
// userData.Mob = 45643565 this value can't be changed due to its readonly
console.log(userData);

// Intersection Type
console.log(`----Intersection/Union Type-----`);
type UserType1 = {
  name: string;
  age: number | string;
};
type UserType2 = {
  email: string;
  location: string;
};
type UserIdentity = UserType1 & UserType2;

let userIdentity: UserIdentity = {
  name: "Buddha",
  age: "10000",
  email: "buddha@gmail.com",
  location: "Heaven",
};
console.log(userIdentity);*/

/*// literal types
console.log(`-----Literal Types-----`);
let myColor: "Red" | "Greed" | "Blue";
myColor = "Greed";
console.log(myColor);

// Tuples
console.log(`-----Tuples-----`);
let myArr: [string, number, boolean] = ["name", 12, false];
let [first, second] = myArr;
console.log(first);

// enum
console.log(`-----enum-----`);
enum weatherConditions {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}
let currentCOndition = weatherConditions.Sunny;
console.log(currentCOndition);

// Interface
console.log(`-----Interface-----`);
interface MoviesDetails {
  readonly name: string;
  rating: number;
  genre: string;
  description?: string;
}

let movie1: MoviesDetails = {
  name: "identity",
  rating: 9,
  genre: "crime",
};
console.log(
  `Name: ${movie1.name}, genre: ${movie1.genre}, rating: ${movie1.rating}`
);

interface EmployeeDetail {
  name: string;
  id: string;
  designation: string;
  year: number;
  location: string;
  greet: () => void;
}

const Employee1: EmployeeDetail = {
  name: "John Doe",
  id: "ABC",
  designation: "Web Developer",
  year: 4,
  location: "India",
  greet: () => `Hey! there`,
};

function employeeDetail(person: EmployeeDetail) {
  return `Name: ${person.name}, Id: ${person.id}, designation: ${
    person.designation
  }, year: ${person.year}, location: ${person.location}, ${person.greet()}`;
}
console.log(employeeDetail(Employee1));

// interface declarative
console.log(`-----Interface Declarative-----`);
interface Car {
  brand: string;
  start(): void;
}
interface Car {
  model: string;
  stop(): void;
}

let carInfo: Car = {
  brand: "BMW",
  model: "X5",
  start: () => console.log("start"),
  stop: () => console.log("stop!"),
};
console.log(carInfo.brand , carInfo.model);
carInfo.start();
carInfo.stop();
*/

// Generic Type
console.log(`-----Generic Type-----`);

function logVal<Type>(value: Type): void {
  console.log(value);
}
logVal<string>("Hello");
logVal<number>(12345);

function getFirstElem<T>(arr: T[]): void {
  console.log(arr[0]);
}
getFirstElem<number>([5, 6, 7, 8, 4]);
getFirstElem<string>(["Hello", "world"]);

interface ApiResponse<T> {
  status: number;
  data: T;
}
const userRes: ApiResponse<{ name: string }> = {
  status: 1,
  data: {
    name: "Vineet",
  },
};
console.log(userRes.data.name);

const userRes1: ApiResponse<{ num: number }> = {
  status: 0,
  data: {
    num: 2354,
  },
};
console.log(userRes1.data.num);
