const btn=document.querySelector('button');
btn.addEventListener('click',()=>{

    document.body.style.backgroundColor=getRandomColor();
});

function getRandomColor(){
    if(document.body.querySelector('.text-color')){
        document.body.querySelector('.text-color').remove();
     }
 const textColor=document.createElement('div');
 textColor.classList.add('text-color')
 textColor.innerHTML='';
 const r=Math.floor( 255*Math.random());
 const g=Math.floor(255*Math.random());
 const b=Math.floor(255*Math.random());
 const a=Math.random();
 const color='rgba('+(255-r)+','+(255-g)+','+(255-b)+','+(1-a)+')'; 
 textColor.innerHTML='rgba('+r+','+g+','+b+','+a+')<br>'+color;
 
 textColor.style.color=color;
 
 document.body.append(textColor);  
 return textColor.innerText;
}