let numbers = [1,2,3,4,5,6,7];

let doubled_numbers = numbers.map(function(num){
    return num*2;
})
console.log(doubled_numbers);
let even_numbers = numbers.filter(function(num1){
    return num1%2==0;
})
console.log(even_numbers);
 for(let i=0;i<numbers.length;i++) {
    console.log(numbers[i]);
 }