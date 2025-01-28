//merge two arrays --------------------------------
let array1 = [1,2,3,4];
let array2 = [523,4];

function tomergearrays(a,b){
    let start = 0;
    let final = a.length + b.length
    for( let i = a.length; i< final; i++){
        a[i] = b[start];
        start++
    }
    return a
}

console.log(tomergearrays(array1,array2));