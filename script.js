let num = 266219;
let arr = num.toString().split("").map(parseFloat);
let res = 1;

for( let i = 0; i < arr.length; i++){
  res *= arr[i];
}
console.log(res);

console.log(String(res**3).slice(0,2));