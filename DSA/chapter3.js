//insert an element in array (without inbuilt)----------------------------

let array = [1,2,3,4,5,6];
let position = 7;
let value = 10;

function toinsert(array, position,value){
if( position >= array.length){
    return "this postion not exists in array"
}

for(let i=array.length - 1; i>=0 ; i--){
    if( i == position-1){
        array[i+1] = array[i];
        array[i] = value
        return array
    }
    array[i+1] = array[i]; 
}

}


console.log(toinsert(array,position, value))