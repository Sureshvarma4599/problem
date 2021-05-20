// string palidrome
function palindrome(string){
    const len = string.length;
    for(i=0;i<len/2;i++){
        if(string[i]!==string[len-1-i]){
          return "not palindrome"
        }else{
            return "it is a palindrome";
        }
    }
    }
    palindrome(varav)
    //builtin method
    function palindrome(str) {
        var re = /[\W_]/g;
        var lowRegStr = str.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join(''); 
        return reverseStr === lowRegStr;
      }
      palindrome("A man, a plan, a canal. Panama");

      // pure recursion method
      var isPalindrome=function(str){
          var strLength=str.length;
          if(strLength===0 ||strLength===1)return true
          if(str[0]===str[strLength-1]){
              return isPalindrome(str.slice(1,strLength-1))
          }
        return false;
      }
      isPalindrome('surus')