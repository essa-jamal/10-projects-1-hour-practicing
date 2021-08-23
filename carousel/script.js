const imgs=document.querySelector('.imgs')
const img=document.querySelectorAll('.imgs img')
index=0;

function run(){
    let trans=(-index*500)+'px';
    console.log(trans);

    imgs.style.transform='translateX('+trans+')';
    index=index+1;
    console.log(img.length);
    if(index>img.length-1){
        index=0;
    }
 
}
setInterval(run,2000);