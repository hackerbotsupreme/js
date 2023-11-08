// map/ reduce / filter function in javascript 

// ---------------------Array Map Method 

// map function 
// so what we have seen is for..each function takes three srguments which are -- 1.value,index,array --and prints them after performing some operations with them 2. its a loop 
// and  map function also  takes three arguments --index, vlaue and array and also performs some operation given but it returns them as an array set 
// let arr=[12,34,567,56767,5]
// let maparray=arr.map((value)=>{
//   console.log(element+element)
//   return element +1 
//   })
// console.log(maparray)


// and if we do 
let arr=[12,34,567,56767,5]
let maparray=arr.map((value, index)=>{
  console.log(value+value , index)
  return value +1
  })
console.log(maparray)
       
let aparray=arr.map((value, index)=>{
  console.log(value+value , index)//when we add 3rd imdex which is index
  return value //when we remove  +1 
  })
console.log(aparray)

let parray=arr.map((value, index,array)=>{
  console.log(value+value , index,array)//when we add 3rd index, which is array
  return value +1
  })
console.log(parray)


// map/ reduce / filter function in javascript 

// ---------------------Array filter Method 
let arr2=[1,34,6,7,8,6,43,7]
let greaterthan7=arr.filter((element)=>{
   return element>7
})

// console.log(greaterthan7)
// console.log(arr)
// we can also write these like this --> 
console.log(greaterthan7,arr2)




// Array reduce method ~Array Methods 
let arr3=[2,4,5,6,78,89,4,3]
let reducearray=arr3.reduce((Aloke,pramanik)=>{
  return Aloke+pramanik
})
console.log(reducearray)



