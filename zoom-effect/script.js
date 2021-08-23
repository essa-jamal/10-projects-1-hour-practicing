const mainContainer=document.querySelector('.main-container');
const img=document.querySelector('img');

img.addEventListener('mousemove',(e)=>{
const x=e.clientX-e.target.offsetLeft;
const y=e.clientY-e.target.offsetTop;

img.style.transformOrigin=`${x}px ${y}px`;
img.style.transform='scale(3)';

});
img.addEventListener("mouseleave",()=>{
    img.style.transformOrigin=`center center`;
    img.style.transform='scale(1)';

})