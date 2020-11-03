
var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})
function solve(lines){
    var temp = lines[0];
    for(let i =0;i<temp;i++){
        if(isPrime(lines[i])){
            console.log("a是Prime")
        }else{
            console.log("a是Composite")
        }
    }
    
    function isPrime(lines) {
        if(lines===1)return false
        for(let i=2;i<line[i];i++){
            if(lines[i]%i ===0){
                return false
            }
           
        } return true
    
    }  
}
