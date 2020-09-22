// Challenge 1
// A) Create a for loop that iterates through an array and returns the sum of the elements of the array.
// B) Create a functional iterator for an array that returns each value of the array when called, one element at a time.


function sumArray(arr)
{
  var sum = 0;
  for(let i = 0;i<arr.length;++i)
  {
    sum += arr[i];
  }
  return sum;
}

// const array = [1, 2, 3, 4];
// console.log(sumArray(array));


//b
function returnIterator(arr)
{
  let i =-1;
  function inner()
  {
    i++; 
    return arr[i];
  }
  return inner;
}

// const myIterator = returnIterator(array);
// console.log(myIterator());
// console.log(myIterator());
// console.log(myIterator());
// console.log(myIterator());


// Challenge 2
// Create an iterator with a next method that returns each value of the array when .next is called.


function returnIterator2(arr)
{
  let i =-1;
  const iterator = {
   next:
   function ()
      {
        i++; 
        return arr[i];
      }
    }
    return iterator;
}

 // const array = [1, 2, 3, 4];
 // const iteratorWithNext = returnIterator2(array);

// console.log(iteratorWithNext.next())
// console.log(iteratorWithNext.next())

// Challenge 3
// Write code to iterate through an entire array using your nextIterator and sum the values.
function foo1(array)
{
 const iteratorWithNext = returnIterator2(array);
let sum  = 0;
var varr = iteratorWithNext.next()
while(varr)
{
  sum += varr;
  varr = iteratorWithNext.next();
  
}
return sum;
}

const array4 = [1, 2, 3, 4];
// console.log(foo1(array4)); => 10



// Challenge 4
// Create an iterator with a next method that returns each value of a set when .next is called


function setIterator(set)
{
  let  setValue = set.values();
  
  const iterator = {
    next:
    function ()
    {
      var next = setValue.next();
      return next['value'];
      }
  }
  return iterator;
}

const mySet = new Set('hi');
const iterateSet = setIterator(mySet);

// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'i'


// Challenge 5
// Create an iterator with a next method that returns an array with two elements (where the first element is the index and the second is the value at that index) when .next is called.


function indValIterator(array)

{
    var i = 0;
  const iterator = {

    next :
    function ()
    {
      var data = [i, array[i]];
      i++;
      return data;
    }
  }
  return iterator;
}

const idx = indValIterator([1,4,3,7]);

// console.log(idx.next());
// console.log(idx.next());
// console.log(idx.next());
// [ 0, 1 ]
// [ 1, 4 ]
// [ 2, 3 ]


// Challenge 6
// Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!)
// Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!
function Words(string)
{
  this.str = string;
  }
Words.prototype[Symbol.iterator] = function ()
{
  var i =0;
  const words = this.str.split(/\s/);
  return {
    next:
    function ()
    {
    if(i<words.length)
    {
   const result = words[i];
    i++;
    
     return {value: result, done:false};     
     }
     else{
     return {done:true};
     }
    }
  
  
  }
  
}


const helloWord = new Words("Hello Mamama ma");

for(let word of helloWord)
{
  console.log(word);
}






