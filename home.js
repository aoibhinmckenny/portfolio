//HOME PAGE VIDEO//
const video = document.getElementById("video");

video.addEventListener("click", () => {
    if(video.paused){
        video.play();
    } else{
        video.pause();
    }
})

//PODCAST//

const audio = document.getElementById("podcastAudio");
const playBtn = document.getElementById("play-btn");
const playIcon = playBtn.querySelector("i");
const progressFill = document.querySelector(".progress-fill");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playIcon.classList.remove("bx-play");
    playIcon.classList.add("bx-pause");
  } else {
    audio.pause();
    playIcon.classList.remove("bx-pause");
    playIcon.classList.add("bx-play");
  }
});

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  const progressPercent = (currentTime / duration) * 100;
  progressFill.style.width = progressPercent + "%";
});

//TIMES//

const currentTimeEl = document.querySelector(".current-time");
const durationEl = document.querySelector(".duration");

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

audio.addEventListener("timeupdate", () => {
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});

//SKIP//

const progressBar = document.querySelector(".progress-bar");

progressBar.addEventListener("click", (e) => {
  const width = progressBar.clientWidth;
  const clickX = e.offsetX;

  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});

const rewindBtn = document.querySelector(".rewind-btn");
const forwardBtn = document.querySelector(".forward-btn");

rewindBtn.addEventListener("click", () => {
  audio.currentTime = Math.max(0, audio.currentTime - 10);
});

forwardBtn.addEventListener("click", () => {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
});