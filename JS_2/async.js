// Challenge 1
// Thinking point (no writing code necessary for this challenge): Inspect the code given to you in Challenge 1. In what order should the console logs come out? Howdy first or Partnah first?

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}

//testMe();


// Challenge 2
// Create a function delayedGreet that console logs welcome after 3 seconds.

function printHello(){
console.log("Hello");
}
function delayedGreed()
{
  setTimeout(()=>console.log("heo1"),5000);
}

//delayedGreed();
// Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds.

function helloGoodbye(){
  console.log("Hello");
  setTimeout(()=>console.log("Good bye"), 2000);
}


//helloGoodbye()
//Challenge 4 and challenge 5
// Create a function brokenRecord that console logs hi again every second. Use the End Code button to stop the console logs when you are satisfied that it is working.

function brokenRecord()
{
 const repeat =  setInterval(()=>console.log("hi"),1000); 
 setTimeout(()=>clearInterval(repeat),5000);
}
//brokenRecord();
//challange 6

function everyXsecsForYsecs(func, interval,duration)
{
    const intervals = setInterval(()=>func(),interval); 
    setTimeout(()=>clearInterval(intervals),duration);
}

//everyXsecsForYsecs(printHello,2000,5000);


// Challenge 7
// Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.

// When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.


function delayCounter(target,wait)
{
   let counter = 0;
   let intervalid;
  return function myfunc(){
     if(counter == 0)
     {
       counter++;
       intervalid = setInterval(()=>console.log(myfunc()),wait);
      }
      else if (counter== target)
      {
        clearInterval(intervalid);
        return counter;
      }
      else
      {
        return counter++;
      }
   }

}


// const datas = delayCounter(5,100);
// datas();


// Write a function, promised, that takes in a value. This function will return a promise that will resolve after 2 seconds.

// Hint: take a look at the Promise object docs on MDN.

function promised(input)
{
  const promiseA = new Promise((resolve,reject)=>
  {
    setTimeout(()=> resolve(input),2000);
    
  });
  promiseA.then((sucesedMessage)=>
  {
    console.log("Yay " + sucesedMessage);
  })

  
}

//promised("ROxanica ");



class SecondClock
{
  constructor(cb)
  {
  this.cb = cb;
  this.seconds = 0;
  this.myInterval = undefined;
}
  start()
  {

     this.myInterval = setInterval(()=>
     {
           this.seconds++;
     this.cb(this.seconds%60);
     }, 1000);
  }
  
  reset()
  {
  this.seconds = 0;
    clearInterval(this.myInterval);
  }
}


const myClass = new SecondClock((val)=>console.log(val));
myClass.start();
setTimeout(()=>
{
  clock.reset();
  console.log("Stopped after 10 sec")
  }, 10000);




