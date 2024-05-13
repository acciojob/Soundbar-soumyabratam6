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

// Get all the sound buttons
const buttons = document.querySelectorAll('.btn');

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the name of the sound from the button's text
        const soundName = button.innerText + '.mp3';

        // Play the sound
        playSound(soundName);
    });
});

// Get the stop button
const stopButton = document.querySelector('.stop');

// Add a click event listener to the stop button
stopButton.addEventListener('click', stopSound);