
const game = {
  'suspects' : [
  {
    name: "Rusty",
    color: "Orange"
  },
  {
    name: "Miss Scarlet",
    color : "Red"
  }
  ]
}
const [color1, color2] = [game.suspects[0].color,game.suspects[1].color]

var [{color : firstColor}, {color: secondColor}] = game.suspects;
 
//exercice 2 


const weapon = ['1','2','3'];

const makeBroken = function(item)
{
  return `broken ${item}`;
}

//arrays = weapon.map(makeBroken);
//console.log(weapon)

//.each vs .map

const _ = {};
_.each = function(list, callback)
{
  if (Array.isArray(list)){
    for(let i = 0;i<list.length;++i)
    {
       callback(list[i], i, list);
    }
  }
  else
  {
    for(var key in list)
    {
      callback(list[key],key,list);
    }
  }
}
/*
mama.each([1,2,3], function(val){ 
console.log(val + 1);
});



mama.map = function(list, callback)
{
  var result = [];
  for (var i =0;i<list.length;++i)
  {
    result.push(callback(list[i],i,list));
  }

  mama.each(list,function(v,i,list)
  {
      result.push(callback(v,i,list))
  })
  return result;
}

array = mama.map([1,2,3], function(val)
{
  return val + 2;
})*/


_.filter = function(arr, callback)
{
  const result = {};
  _.each(arr, function(v,i,arr)
  {
    if(callback(v,i,arr)){
      result.push(v);
    }
  });
/*  for(let i = 0;i<arr.length;++i)
  {
      if(callback(arr[i],i,arr))
      {
        result.push(arr[i]);
      }
  }
  */
  return result;
}

/*_.filter([1,2,3,4,5,6,7,8,9,10], function(val)
{
  if(val %2 == 0)
  {
    console.log(val);
  }
  });

*/
_.reduce = function(list, callback, acumulator)
{
  let memo = acumulator;
  for(let i = 0;i<list.length;++i)
  {
    if(i==0 && memo === undefined)
    {
        memo = list[0]
    }
    else
    {
      memo = callback(list[i],memo);
    }
    
  }
  return memo;
}



_.reduce([2,2,3], function(value, sum)
{
  return  sum + value;
  console.log(sum);
}  )

_.rightFirst= function(list)
{
  return list.reverse();

}

_.rightFirst([2,3,4,5,6]);




































