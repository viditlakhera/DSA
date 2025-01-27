//recursion is basically function calling itself again and again until specific condition satisfied
// two type of recursion
//1. direct recursion----------------------------------
// factorial program------------
function factorial(num){
    if( num == 1){
        return num;
    }
    return num * factorial(num -1)
}
// console.log(factorial(5));

//2.indirect program -----------------------------
//two function calling each other until specific condition satisfy------

let amout = 100;
let apple = 0;
function buyapple(amount){
    if(amount<=0){
        return console.log(`total amount remains ${amount} and total apple we get ${apple}`)
    }
    apple++;
    buymore(amount)
}

function buymore(amount){
 buyapple( amount - 10);
}

buyapple(amout);