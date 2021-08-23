const toastConatiner=document.querySelector('.toast-container');

const toastBtn=document.querySelector('.toast-button');

toastBtn.addEventListener('click',()=>{

    const toast=document.createElement('div');

    toast.classList.add('toast');
    toast.innerHTML='<button onclick="closeToast(this)">x</button>'+    
    "This is test";
    toastConatiner.appendChild(toast);
});
function closeToast(e){
e.parentElement.remove();
}