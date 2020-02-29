var arrays = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var result = arrays.filter((numbers)=>{
     if(numbers%2!==0){
       console.log(`${numbers} is not even`);
     } else {
         console.log(`${numbers} is even`);
    }
});

/* ---------------------------- */
/* task: countEvenNumbers*/
/* ---------------------------- */


function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}   
document.write( randomNumber(1, 100) ); 

/* ---------------------------- */
/* task: countEvenNumbers*/
/* ---------------------------- */


var a = [1, 2, 3];
var b = [4, 5, 6];

let arrays = [a, b] 

let sums = arrays.reduce((sums, arr) => {
    arr.reverse().forEach((n, i) => sums[i] = (sums[i] || 0) + n)
    return sums
}, []).reverse()

console.log(sums)

/* ---------------------------- */
/* task: countEvenNumbers*/
/* ---------------------------- */


function palindrome(str){
    for (var i = 0; i <= str.length; i++){ 
        if  (str[i] !== str[str.length - 1 - i]) {
            return "The string is not a palindrome";
        }
    }
return "The string IS a palindrome"
}

palindrome("madam"); //"The string IS a palindrome"
palindrome("test"); //"The string is not a palindrome";