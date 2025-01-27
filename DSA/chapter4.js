//delete an element in array-------

// this function delete according to index position
let array = [2,3,4,5,6];
let position = 5;

function todelete(array,position){
    if(position > array.length){
        return 'position not exists'
    }
    for(let i=position - 1; i<array.length;i++){
        array[i] = array[i+1];
    }
    
    array.length = array.length - 1;
  
    return array
}

console.log(todelete(array,position))