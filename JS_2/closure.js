
console.log('Hello, world!');

// CHALLENGE 1
function createFunction() {
	
  function returnWord()
  {
  	console.log("hello");  
	}
  return returnWord;
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');


//challange 2
function createFunctionPrinter(input)
{
 
  function print()
  {
    console.log(input)
  }
  return print;
}

const funct = createFunctionPrinter("Roxanica");
funct();

//challange 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

 // willCounter();
 // willCounter();
 // willCounter();
 // jasCounter();
 // willCounter();
 


function addByX(input) {
    function sum(x)
    {
      return x + input;
      
    }
    return sum
}

const addbytww = addByX(2);
// addbytww(3);
// addbytww(5);

//challange 4 
// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
function once(callback)
{
let counter = 0;
let firstData;
  function myfunct(inp)
  {
    if(counter == 0)
    {
      firstData = callback(inp);
      counter++;
      return firstData;
    }
    else
    {
      return firstData;
    }
  }
  return myfunct;
}
// const data =once(addbytww)
// console.log(data(2))


// Challenge 5
// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

function after(count, func) {
  let counter = 0;
  function funt(){
  if(count == counter)
  {
    console.log( func(1));
  }
  else
  {
    counter++;
  }
  }
  
  return funt;
}


// const mydata = after(2, addbytww);
// mydata();
// mydata();
// mydata();


// Challenge 6
// Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();



function delay(callback, time, ...args)
{
setTimeout(()=>callback(...args), time);
}
delay(addbytww,1000 , 2);


// Challenge 7
// Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.



function printNames(names)
{
  let counter =0;
  function getNames()
  {
  if(names.length && counter< names.length)
  {
    console.log(names[counter]);
    counter++;
  }
  else
    console.log("All guys were printed!!!");
  
  }
  return getNames
}

// const nume = ["Andrei", "Vasilica", "Ionica"];
// const names=  printNames(nume);
// names();
// names();
// names();
// names();



// Challenge 8
// Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.


function saveOutput(funct,password)
{
  let otherInput = {};
  function savepass(data)
  {
    if(data==password)
    {
      return otherInput;
    }
    else
    {
      otherInput[data]= funct(data);
      return funct(data);
    }
  }
  return savepass;
}




// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2));
// console.log(multBy2AndLog(9));
// console.log(multBy2AndLog('boo'));


// Challenge 9
// Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.


function cycleIterator(arr)
{
  let counter =0;
  function repetitiveReturn()
  {
    if(arr.length && counter<=arr.length-1)
    {
      console.log(arr[counter]);
      counter++;
    }
    else
    {
      counter=0;
      repetitiveReturn();
    }
  }
  return repetitiveReturn;
}


// const nume = ["Andrei", "Vasilica", "Ionica"];

// const myy = cycleIterator(nume);

// myy();
// myy();
// myy();
// myy();
// myy();
// myy();
// myy();


const defineFirstArg = (inputFunc, arg) => {

      return function (...addtionalArgs) {
        return inputFunc(arg, ...addtionalArgs)
      }
    }
f2 = defineFirstArg(console.log,"x")
f2("y","z",'f')




//
// Challenge 11
// Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an output key that contains the result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects.


function datestamp(funct)
{
  date = new Date();
  let obj = {};
  function mustReturn(input)
  {
    obj['date'] = date;
    obj['output'] = funct(input);
    return obj;
  }
  return mustReturn;
}


// const stampedMultBy2 = datestamp(n => n * 2);
// console.log(stampedMultBy2(4))
// console.log(stampedMultBy2(6))

// Challenge 12
// Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).

function result(){
let mainArg = [];
  function my(...args)
  {
    if(arguments.length == 2)
    {
      mainArg.push([arguments[0], arguments[1]]);
     
    }
    else
    {

    mainArg.forEach(data=>
    { 
     if(arguments[0].includes(data[0]))
      {
       arguments[0]  =  arguments[0].replace(data[0], data[1])
      }
    
      }
      )
      return arguments[0];
    }
    
  }
  return my
}

const data = result();
data('dogs', 'cats');
data('quick', 'slow');
console.log(data('The quick, brown fox jumps over the lazy dogs.'));









