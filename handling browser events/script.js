let x=function(e){
    console.log(e)  // it generates pointer event in the console which is an event object 
    console.log(e.target)  // this will  give the target button 
    alert("hello World1")
  } 
  //we can also do this 
  let x=function(){
    alert("hello World1")
  }
  //and this 
  let x=function(event){
    alert("hello World1")
     console.log(e) 
  }
  // above two, when an event happens  the browser creates  an event object , puts details into it and passes it as an argument to the handler 
  
  
  btn.addEventListener('click',x)
  
  let y=function(e){
    alert("hello World2")
  }
  btn.addEventListener('click',y)
  let a = prompt('what is your  favourite number ?');
  if(a=='2'){
    btn.removeEventListener('click',y)
  }
//   if you write simply the function to remove then it will not be done 
//   so to make it work you have to make same reference that you pass to 
//   event listener and remove event listener 
  
  