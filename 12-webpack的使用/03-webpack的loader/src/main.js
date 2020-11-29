// 1.使用commonjs的模块化规范
const { sum, mul } = require('./js/math.js');

sum(10, 20);
mul(10, 20);

// 2.使用ES6的模块化规范
import { name, age, height } from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件
require('./css/nomal.css');

// 4.依赖less文件
require('./css/special.less');
document.writeln('<h2>Hello</h2>')