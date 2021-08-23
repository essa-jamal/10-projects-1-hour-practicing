const mainContainer=document.querySelector('.main-container');
const text="I Like My Work! and working as Developer";
let index=0;
function getText(){

mainContainer.innerText=text.slice(0,index);
index++;
if(index>text.length){
    index=0;
}
}
setInterval(getText,100);
