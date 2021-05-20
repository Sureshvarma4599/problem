// sum of n natutal numbers big o
function addUpTo(n){
    return n*(n+1)/2

}
var t1=performance.now()
addUpTo(1000000000)
var t2=performance.now()
console.log((t2-t1)/1000)
//exectues in 0.00000004 sec


function printAllPairs(n){
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            console.log(i,j)
        }
    }
}
printAllPairs(20)
//executes in 0.02 sec