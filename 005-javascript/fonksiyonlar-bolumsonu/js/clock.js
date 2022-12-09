let counter =0;

let counterDom=document.querySelector('#counter');
let increaseDom=document.querySelector('#increase');
let decreaseDom=document.querySelector('#decrease');

increaseDom.addEventListener("click", clickFnc);
decreaseDom.addEventListener("click", clickFnc);
function clickFnc (){ 
    console.log(this.id);
    this.id=="increase" ? counter+=1 : counter-=1;
    counterDom.innerHTML=counter;
}
