const openBtn=document.getElementById('open');
const closeBtn=document.getElementById('close');
const popupContainer=document.querySelector('.popup-container');

openBtn.addEventListener('click',()=>{
    popupContainer.classList.toggle('active');

});
closeBtn.addEventListener('click',()=>{

    popupContainer.classList.toggle('active');
})