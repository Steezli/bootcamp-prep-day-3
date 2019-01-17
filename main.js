var x = prompt('dd');
if(x > 12){
    console.log(x);
    console.log('groovin with if')
}

else {
    console.log('tooooo small man!');
}

// 1 initialize
// 2 condition
// 3 Post Loop Action
for(var i = 0; i < x; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

function sayHello() {
    console.log('hi');
}

if(x % 2 === 0) {
    sayHello();
}

// eslint-disable-next-line
function evenOrOdd() {
    var input = document.getElementById('number');
    console.log(input.value);
    var y = 4;
    
    if(y % 2 === 0) {
        console.log('even');
    }  
    else {
        console.log('odd');
    }    
}


