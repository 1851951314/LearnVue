// 1.使用commonjs的模块化规范
const { sum, mul } = require('./math.js');

sum(10, 20);
mul(10, 20);

// 2.使用ES6的模块化规范
import { name, age, height } from "./info";

console.log(name);
console.log(age);
console.log(height);