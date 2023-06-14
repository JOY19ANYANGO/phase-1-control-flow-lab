function scuberGreetingForFeet(feet) {
  let result;
  if (feet <= 400) {
    result = 'This one is on me!';
  } else if (feet >= 2000 && feet <= 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    result = 'No can do.';
  }
  return result;
}

scuberGreetingForFeet(199)
scuberGreetingForFeet(2001)
scuberGreetingForFeet(2501) 

function ternaryCheckCity(city){
  let result
  if(city==='NYC'){
    result='Ok, sounds good.'
  }else if(city==='Pittsburgh'){
    result='No go.'
  }
  return result;
}
ternaryCheckCity('NYC')
ternaryCheckCity('Pittsburgh')

function switchOnCharmFromTip(tip){
  let result;
  switch(tip){
    case 'generous':
      result='Thank you so much.'
      break
    case 'not as generous':
      result='Thank you.'
       break
     default:
      result="Bye."        
       }
       return result

}