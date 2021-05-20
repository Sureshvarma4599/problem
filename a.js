function remove(str1,str2){
    var str;
for(var i=0;i<str1.length;i++){
    str=[];
    for(var j=0;j<str2.length;j++){
       if(str[i]!==str[j]){
           str.push(str[i])
           
       }
    }
    return str
}
}
remove("ono")