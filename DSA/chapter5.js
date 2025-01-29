//merge two arrays --------------------------------
let array1 = [1,2,3,4];
let array2 = [523,4,3,22,11,1];

function tomergearrays(a,b){
    let start = 0;
    let final = a.length + b.length
    for( let i = a.length; i< final; i++){
        a[i] = b[start];
        start++
    }
    return a
}

// console.log(tomergearrays(array1,array2));


//merge two array using third array (basically good and ideal way)---


function thirdArray(array1, array2){
    let array3 = [];

    //using two loop
    for( let i=0; i< array1.length; i++){
        array3[i] = array1[i]
    }

    for( let i=0; i< array2.length; i++){
        array3[array1.length + i] = array2[i]
    }

    return array3
}

console.log(thirdArray(array1,array2))