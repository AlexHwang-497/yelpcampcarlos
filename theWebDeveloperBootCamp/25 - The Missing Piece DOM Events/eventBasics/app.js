const btn = document.querySelector('#v2')

btn.onclick = function(){
    console.log('YOU Clicked ME!!!!')
    console.log('I hope it works!!!!')
}

function scream(){
    console.log('AAAAHHH')
    console.log('stop touching me!')
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = function () {
    alert('you cliked the h1!!!!')
}

const btn3 = document.querySelector('#v3');

btn3.addEventListener('mouseup',function(){alert('CLICKED!')})

function shout(){
    console.log('SHOUT!')
}
function twist() {
    console.log("TWIST!")
}
const tasButton = document.querySelector('#tas')
// tasButton.onclick =  shout;
// tasButton.onclick =  twist;

tasButton.addEventListener('click',twist, {once:true})
tasButton.addEventListener('click',shout)