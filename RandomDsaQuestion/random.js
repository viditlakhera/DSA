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
// console.log(product);

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

// console.log(zeros);


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

// ispallindrom(ispallindrome);


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

// checkanagram(firstword,secondword);


// find first missing number in array 

let missing = [1,3,4,5];
let initial = missing[0];
function missingnumber(missing,initial){
    if(missingnumber.length == 0){
        return 'empty array'
    }
    for( let i=0; i< missing.length; i++){
       if(initial != missing[i]){
        return initial
       }
       initial++;
    }

    return 'no number is missing'
}
// console.log(missingnumber(missing,initial))


let json = { 
    "shipped": [ { "orderId": 1, "status": "shipped", "amount": 100 }, { "orderId": 3, "status": "shipped", "amount": 200 } ],
"pending": [ { "orderId": 2, "status": "pending", "amount": 50 } ], 
"canceled": [ { "orderId": 4, "status": "canceled", "amount": 30 } ]
 }


 function tofind(json,orderid,key){
  let value = json[key];

  if(!value){
    return 'no key is present on json with ' + key + ' name';
  }
  let data = {};
  let amount = 0;
  for( let i =0; i<value.length; i++){
    if( value[i].orderId == orderid){
        data = {
            status : value[i].status,
            amount: value[i].amount
        }
    }
    amount+= value[i].amount
  }
   
  data['totalamount'] = amount
  return data;
 }

 console.log(tofind(json,3,"canceled"));

 //find duplicate------------

 let duplicatearray = [2,1,33,44,2,1,0,0,6,8,7,9,8];

 function duplicate(array){
   let data = {};
   let duplicate = [];
   for( let i =0; i<array.length;i++){
    if( data[array[i]]){
        data[array[i]] = data[array[i]] + 1
    }else{
        data[array[i]] = 1
    }
   }
   for( let ele in data){
    if(data[ele] > 1 ){
      duplicate.push(ele)
    }
   }
   return duplicate;
 }

 console.log(duplicate(duplicatearray));


 //Maximum product of a triplet (subsequence of size 3) in array
let maximumthree = [22,33,22,11,2];
let count = 3;
function maximumthreeproduct(maximumthree, count){
    let sorted = maximumthree.sort((a,b) => b-a)
    let product = 1;
    for ( let i=0; i< count; i++){
       product *=sorted[i]
    }
return product
}
 console.log(maximumthreeproduct(maximumthree, count));

 //reverse a string;

 let str = 'hello';
 function toreverse(str){
   if( str.length == 0){
    return 'empty string';
   }
    let sr = str.split('').reverse().join('');
   return sr;
 }

//  console.log(toreverse(str));


 function toreversewithoutinbuilt(str){
   let newstring = '';
   for(let i = str.length - 1; i>=0; i--){
    newstring += str[i];
   }

   return newstring
 }

 console.log(toreversewithoutinbuilt('hello world'));


 function replacechar(str,index,char){
    let newstring = '';
    for( let i= 0; i< str.length; i++){
      i== index ? newstring+=char: newstring+=str[i]
    }
    return newstring;
 }

//  console.log(replacechar(str,1,'k'))

 //---------------------------------------

 //timer based event priorty checking
 console.log('aa');
// setTimeout(()=> console.log("timeout"));
// setInterval(()=> console.log('ssss'), 2000);
// clearInterval();
// process.nextTick(()=>console.log("fffff"));

//------------------------------------sort

let unsort = [22,33,1,22,335];
console.log(unsort.sort((a,b) => a - b));

//------------------------------------reverse

console.log(unsort.reverse())

//------------repeated ele in array-----

let repeated = [1,2,2,3,5,6,77,4,77]
let obj = {};
for( let i = 0; i< repeated.length; i++){
if(obj[repeated[i]]){
    obj[repeated[i]] = obj[repeated[i]] + 1
}else{
    obj[repeated[i]] = 1
}
}
let repeatednumber = []
for( let ele in obj){
    obj[ele] > 1 ? repeatednumber.push(Number(ele)): '';
}

// console.log(repeatednumber)