
//1.array maximum and minimum
let maxiMin =[10,100,200,30,400,500,700]
console.log(Math.max(... maxiMin));
console.log(Math.min(... maxiMin));
//2.Flatening array
let flate=[[1,2],[3,4],[5,6],[6,7],[7,8]]
let flatearray=flate.flat();
console.log(flatearray);
//3.array spreading
let spread=[1,2,3,4];
let spread1=[5,6,7,8];
let result=[...spread, ...spread1];
console.log(result);
//4.array index of first occurance
let occurarray=[10,20,66,100];
let occ=100;
let occ1=occurarray.indexOf(occ);
console.log(occ1);
//5.new array creating with given length

let arr_length=5;
let new_array=Array(arr_length).fill(10*10);
console.log(new_array);






