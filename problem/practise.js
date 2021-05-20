var num = 12345;
var digit;
var sum =0;
var temp = num;
while(num>0){
 digit = num % 10;
sum = sum * 10+ digit;
num = parseInt(num/10);

}
console.log(sum);

function rev(num){
  var a = num;
  var b;
  var sum =0;
  var temp = num;
  while(num>0){
    b=num%10;
    sum=sum*10+b;
    num=parseInt(num/10);
  }
  return sum;

}
rev(12345)

function revString(str){
let newString='';
for(let i=str.length-1;i>=0;i--){

  newString+=str[i]
}
return newString;
}
revString('varma');
 


function duplicates(arr){
  var count=0;
 for(var i=0;i<arr.length;i++){
   for(var j=1;j<arr.length;j++){
     if(arr[i]!=arr[j]){
      j++;
     }
    if(arr[i]==arr[j]){
  count++;
  arr[i]=arr[j];
  arr[j]=arr[j+1];
    }

   }
 }
return count;

}
duplicates([1,2,1,5,4])
