let arr1=[3,7,34,90,12];
 let array1=arr1[arr1.length -1];
console.log({array1});

let arr2 =[true,"green","where",12,56];
let lastElement=arr2[arr2.length -1];
console.log({lastElement});

let myPets=["cow","Bird","snake","Dog"];
let x=myPets.join();
console.log(x);

var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let sorted=arr3.sort((a,b)=>a-b);
console.log (sorted);

var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
function del(arr){
    return[...new Set(arr)];
}
console.log(del(arr));

function duplicate(arr){
    return arr.filter((a,b)=> arr.indexOf(a) !==b);
}
console.log(duplicate(arr));

const arr5=["the","way","x",4];
let search="we"
if(arr5.includes=(search)){
    console.log(search);
}
else{
    console.log("the search word is not found");
}
let word="sevink"
let y = word.split('').sort().join('');
console.log(y);