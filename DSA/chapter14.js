//reverse array through recursion-----------------------------------
let array = [1,2,3,4,5];
let count = 0;
let length = Math.floor(array.length/2);

function reverse(array, count,length){
    if(count == length){
        return array
    }else{
        let intial = array[count];
        let final = array[(array.length - 1) - count] 
        array[count] = final;
        array[(array.length - 1) - count]  = intial;
        count++
    }
return reverse(array, count, length);

}

console.log(reverse(array,count,length));