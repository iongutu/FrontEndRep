"use strict";
//1
function returnNum()
{
  return 3;
}

function returnNum1()
{
  return 4;
}
//2
function add(x1,x2)
{
  return x1+x2;
}

add(returnNum(),returnNum1());

//3

function add2(fn1,fn2)
{
    return add(fn1(), fn2());
}
add2(returnNum,returnNum1)

//4
function constant(v)
{
 return function f()
   {
   return v
   };
}

// var n1 = constant(5);
// var n2 = constant(6);
// add(n1,n2);

//5



function addnIterative(...fns)
{
  while(fns.length>2)
  {
      let [fn0,fn1, ...rest] = fns;
      fns = [
      function f(){
        return add2(fn0,fn1);
      },
      ...rest
      ];
  }
  return add2(fns[0],fns[1]);
};

// addnIterative(constant(3),constant(4), n1,n2);



function addnRecursive([fn0,fn1,...rest])
{
  if(rest.length == 0) 
    return add2(fn0,fn1);
    return addnRecursive([function f()
    {
      return add2(fn0,fn1);
    },
    ...rest
    ])
  
  
}
// addnRecursive([constant(3),constant(4), n1,n2]);

function addnReduce(...fns)
{
  return fns.reduce(function reducer(bigFn,fn)
  {
    return function f(){
       return add2(bigFn,fn) ;
     }
  })();
}
addnReduce(constant(3),constant(4))

//6
var numbers = [4,5,6,8,1,4,5];
addnRecursive(
numbers.reduce(function unique(newList,num)
{
  if(!newList.includes(num)) 
   return [...newList, num];
  return newList;
},[])//7
.filter(function isEven(v)
{
  return v%2==0;
})
.map(constant)
)










