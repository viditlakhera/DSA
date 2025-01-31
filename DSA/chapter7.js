//little bit talk about space and time complexity ---

/* space complexity - directly depend on memory consumption 
   time complexity - number of lines of execution */


   //while loop to merge two sorted array in sorted third array;

let a = [22,33,44,55,66];
let b = [11,12,15,21,36,43,61,71,81];
let i=0;
let j =0;
let c= [];
while(i<a.length && j< b.length){
if(a[i]< b[j]){
    c[c.length] = a[i];
    i++
}else{
    c[c.length] = b[j];
    j++
}
}
console.log(c);

  
let total = i>j ? i : j;
let [greatestlength,largestarray]  = a.length > b.length ? [a.length, a] : [b.length, b];
for (let i = total;  i<greatestlength; i++ ){
    if( largestarray[total] > largestarray[total + 1]){
        let swap = largestarray[total + 1];
        largestarray[total + 1] = largestarray[total];
        largestarray[total] = swap;
        c[c.length] = largestarray[total]
    }else{
      c[c.length] = largestarray[total]
    }
}
console.log(c)