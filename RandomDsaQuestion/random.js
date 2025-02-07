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

//Maximum consecutive one’s in a binary array----------------------------------------------------------------
let arr = [1,0,0,1,1,0,1,0, 0 ,0 , 1,1,1,1,1,0,1,11,1,1,1,1,1,1];

let flag = false 
let max = 0;
let comparitivemax = 0;

for( let i=0; i<arr.length; i++){
    if( arr[i] == 1){
        flag = true
        comparitivemax++
    }else{
        flag = false;
        if(comparitivemax > max || (max == 0 && comparitivemax ==0) ){
            max = comparitivemax;
        }
        comparitivemax = 0;
    }
    if( i == (arr.length - 1) && comparitivemax > max){
        max = comparitivemax;
        comparitivemax = 0;
    }
}

// console.log( max)



//Move all zeros to the end of arrays -----------------------------------------------------------------------
let zeros = [0,0,23,23,1,0,33,2,1,77,90,10,0,0,5];

for(let i = 0; i< zeros.length; i++){
    if( zeros[i] == 0){
        let temp = zeros[i];
        for( let j= i; j<zeros.length;j++){
           zeros[j] = zeros[j+1] 
           if(j == zeros.length - 1){
            zeros[zeros.length - 1] = temp
           }  
        }
    }
}

console.log(zeros);


//pallindrome

let ispallindrome = 'cvaavcs';
function ispallindrom(){
    let Maximum = Math.floor(ispallindrome.length/2);
    for( let i =0 ; i<Maximum; i++){
        if(ispallindrome[i] != ispallindrome[(ispallindrome.length - 1) -i]){
            return console.log('not pallindrome')
        }
    }
    
   return console.log('pallindrome')
}

ispallindrom(ispallindrome);


// anagram

let firstword = 'sweet';
let secondword = 'tesewk';

function checkanagram(firstword,secondword){
if( firstword.length != secondword.length){
    return 'not anagram'
}
let newf = firstword.split('').sort()
let news = secondword.split('').sort()
console.log(newf,news)
for( let i =0; i< firstword.length; i++){
    if(news[i] != newf[i]){
        return 'not anagram'
    }
}

return 'anagram'
}

checkanagram(firstword,secondword);