function createHeartRain() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.top = Math.random() * 100 + "vh";
  heart.innerText = "💜";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
    console.log("removed");
  }, 1000 * Math.random() * 4);
}

setInterval(createHeartRain, 500);

function createRain() {
  const rain = document.createElement("div");
  rain.classList.add("rain");
  rain.innerText = "💧";
  rain.style.left = Math.random() * 100 + "vw";
  rain.style.animationDuration=Math.random()*2+3+'s';
  document.body.appendChild(rain);
  setTimeout(()=>{
    rain.remove();
    
    },1000*Math.random()*3);
}

setInterval(createRain, 500);

