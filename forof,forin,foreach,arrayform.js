let arr=[34,32,23,23,3,536]


// for loop
for( let i=0; i<arr.length;i++){
  console.log(arr[i])
}
return arr


//  for.. each
arr.forEach((element)=>
  {console.log(element +1)})
arr.forEach((element)=>
  {console.log(element*element )})
//  array.. from ~~ Array.from(element)
// araayfrom used to create an array forom what ever the element
let name = "alioke pramanik "
let arayname=Array.from(name)
console.log(arayname)



//  for..of 
for (let item of arr){
    console.log(item)
  }
  
  
  //  for..in 
  for (let i in arr){
    console.log(arr[i])
  }
  