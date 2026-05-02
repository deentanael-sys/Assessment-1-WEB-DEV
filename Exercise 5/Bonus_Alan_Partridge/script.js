document.querySelectorAll('audio').forEach(audio => {
        audio.volume = 0.03; 
    });

    // script that listens for the click event and plays the audio when clicked
    // you can also click the button multiple times to play the audio multiple times, it will not wait for the audio to finish before playing it again
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const audio = button.querySelector('audio');
            audio.pause();
            audio.currentTime = 0;
            audio.play();
        });
    });