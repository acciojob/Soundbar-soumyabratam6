//your JS code here. If required.
function playSound(soundFileName) {
  var audio = new Audio('sounds/' + soundFileName);
  audio.play();
}

function stopAllSounds() {
  var sounds = document.getElementsByTagName('audio');
  for (var i = 0; i < sounds.length; i++) {
    sounds[i].pause();
    sounds[i].currentTime = 0;
  }
function playSound(soundName) {
  var audio = document.getElementById("audioPlayer");
  audio.src = "sounds/" + soundName;
  audio.play();
}

function stopSound() {
  var audio = document.getElementById("audioPlayer");
  audio.pause();
  audio.currentTime = 0;
}