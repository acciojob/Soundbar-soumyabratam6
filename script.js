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

// Get all the sound buttons
const buttons = document.querySelectorAll('.btn');

// Create a new audio object
let audio = new Audio();

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the name of the sound from the button's text
        const soundName = button.innerText;

        // Update the src of the audio object and play the sound
        audio.src = `sounds/${soundName}.mp3`; // replace .mp3 with the format of your sounds
        audio.play();
    });
});

// Get the stop button
const stopButton = document.querySelector('.stop');

// Add a click event listener to the stop button
stopButton.addEventListener('click', () => {
    // Stop the sound
    audio.pause();
    audio.currentTime = 0;
});