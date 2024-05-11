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
// Get all the sound buttons
const buttons = document.querySelectorAll('.btn');

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the name of the sound from the button's text
        const soundName = button.innerText;

        // Create a new audio object and play the sound
        const audio = new Audio(`sounds/${soundName}.mp3`); // replace .mp3 with the format of your sounds
        audio.play();
    });
});

// Get the stop button
const stopButton = document.querySelector('.stop');

// Add a click event listener to the stop button
stopButton.addEventListener('click', () => {
    // Stop all sounds
    // This can be tricky as there's no stop method for audio in JavaScript
    // One way to do it is to pause the audio and set its current time to 0
    buttons.forEach(button => {
        const soundName = button.innerText;
        const audio = new Audio(`sounds/${soundName}.mp3`);
        audio.pause();
        audio.currentTime = 0;
    });
});
}