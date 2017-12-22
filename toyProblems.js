//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function(string){
    return string.split('').reverse().join('')
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function(arr){
    Array.from( new Set ([...arr]))
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function(str){
    let arr =[];
    str.split(' ').forEach(function(elem){
      arr.push(elem.replace(elem[0], elem[0].toUpperCase()))
    })
    return arr.join(' ')
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: function(str){
    let count = 0;
    for(var i =0; i< str.length; i++){
      if (str[i] === 'A'|| 
          str[i] === 'E'||
          str[i] === 'I'||
          str[i] === 'O'||
          str[i] === 'U'||
          str[i] === 'a'||
          str[i] === 'e'||
          str[i] === 'i'||
          str[i] === 'o'||
          str[i] === 'u'){
        count++;
      }
    }
    return count
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function(num){
    if(num<1){
      return false
    }
    for(var i=2;i < num;i++) {
        if( num% i === 0) {
            return false;
        }
    }
    return true;
},
  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined
}
