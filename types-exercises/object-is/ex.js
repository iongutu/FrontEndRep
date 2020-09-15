// TODO: define polyfill for `Object.is(..)`
if(Object.is)
{
  Object.is = function Objectis(par1,par2)
  {
   var xneg = isZeroNeg(par1);
   var yneg = isZeroNeg(par2);
   if(xneg || yneg)
   {
     return xneg&&yneg;
   }
   if(isNaN(par1) || isNaN(par2))
   {
     return isNaN(par1) && isNaN(par2);
   }
   if(par1===par2)
   {
     return true;
   }
   else{
     return false;
   }
   
   
      
  };
  
  function isZeroNeg(x)
  {
    return x===0 && 1/x === -Infinity;
  }
  function isNaN(x)
  {
    return x!==x;
  }
}


// tests:

console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
