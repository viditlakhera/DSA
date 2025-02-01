//find the sorted array is in which order asc or descending ( it should be sorted in any order first)
let a = [55,44,22,11,33,22,11,33,71,56,33];
// a[0]< a[1]? console.log('ascending order'): console.log('descending order');




//-------------------Top 50 interview array question ( FROM GEEKS FOR GEEKS)

//1 ............second largest in array -------------------------------------------------
let largest = a.indexOf(Math.max(...a));
a.splice(largest,1);
let secondlargest = Math.max(...a);
// console.log(secondlargest)

// Maximum product of a triplet (subsequence of size 3) in array----
let sort = a.sort((a,b) => b - a);

 let product = a.slice(0,3).reduce((acc,value,i) => {
   return acc * value
},1);
console.log(product);