function sumOfTheNumber(a,b){
if(a===b){

    return(a+b)*3;
}
else(a<=b)
{
    return(a+b);
}
}
console.log(sumOfTheNumber(7,8));
//part2
function rangeNo(num1,num2){
 return(num1 >=50 && num2<=99)
  
}
console.log(rangeNo(99,40))
//part3
function closestNo(c,d)
{

 let num1=100-c;
 let num2=100-d;
 if (num1<num2){
  return(num2)
 }
else (nmu2<num1)
{
  return(num1)
}

}
console.log(closestNo(70,30))

function checkNearset(x,y){
const num1 =Math.abs(100-x) //70
const num2 =Math.abs (100-y) // 100
if (num1>num2){

    
  return y
}
else
{
  return x // 30
}

}
console.log(checkNearset(30,200))
