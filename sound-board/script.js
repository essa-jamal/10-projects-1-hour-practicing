const sounds = document.querySelectorAll(".sound-container audio");

sounds.forEach((sound) => {
  const soundBtn = document.createElement("button");
  soundBtn.classList.add("button");
    soundBtn.innerText = (sound.src
    .replace("http://127.0.0.1:5500/sound-board/sounds/", ""))
    .replace(".mp3", "");
  document.body.appendChild(soundBtn);
  soundBtn.addEventListener("click", () => {
  //  console.log(sound);
    stopSounds();
    sound.play();
  });
});
function stopSounds() {
  sounds.forEach((song) => {
   
    song.pause();
    song.currentTime = 0;
  });
}
