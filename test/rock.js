

function computerchoice(){
    var choice=['rock','paper','scissor']
    var index=Math.floor(Math.random()*choice.length)
   return choice[index]      
 }

function userchoice(user){

    var compchoice=computerchoice()
    console.log(compchoice)      
   if (user ==='rock'){
     if(compchoice === 'scissor'){
   // alert("user win")  
   document.write("user win")
   }
   else{
     if (user===compchoice){
      //alert(" draw")
      document.write("draw")
     }
     else {
     // alert("user loss ")
     document.write("user loss")
     }
   }
}

if (user ==='paper'){
  if(compchoice === 'rock'){
 //alert("user win")  
 document.write("user win")
}
else{
  if (user===compchoice){
   //alert(" draw")
   document.write("draw")
  }
  else {
  // alert("user loss ")
  document.write("user loss")
  }
}
}
 
if (user ==='scissor'){
  if(compchoice === 'paper'){
 //alert("user win")  
 document.write("user win")
}
else{
  if (user===compchoice){
   //alert(" draw")
   document.write("draw")
  }
  else {
  // alert("user loss ") 
  document.write("user loss")
  }
}
}
}