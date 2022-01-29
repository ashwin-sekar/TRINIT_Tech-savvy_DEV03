const fs = require("fs");
const csv = fs.readFileSync("../files/Untitled_1.csv");

var array = csv.toString().split("\r");

const keys = array[0];
array.shift();

let result = {};

let voltage = [];
let current = [];
let power_factor = [];
let power = [];
let energy = [];

array.forEach((element, index) => {
  let data = element.split(",");
  voltage.push(data[0].split("\n").pop());
  current.push(data[1]);
  power_factor.push(data[2]);
  power.push(data[3]);
  energy.push(data[4]);
});
// let something = array[0].split(",");
// a - energy, v - voltage, t - power, l - power factor, o - current
Object.assign(result, { [keys[0]]: voltage });
Object.assign(result, { [keys[1]]: current });
Object.assign(result, { [keys[2]]: power_factor });
Object.assign(result, { [keys[3]]: power });
Object.assign(result, { [keys[4]]: energy });

fs.writeFileSync("./plot.json", JSON.stringify(result, null, 2));
