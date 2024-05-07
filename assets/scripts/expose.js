// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectedHorn = document.getElementById('horn-select');
  const hornImage = document.querySelector('img');
  const audio = document.querySelector('audio');
  const playSound = document.querySelector('button');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const jsConfetti = new JSConfetti();

  selectedHorn.addEventListener('change', (event) => {
    hornImage.src = `assets/images/${event.target.value}.svg`;
    audio.src = `assets/audio/${event.target.value}.mp3`;
  });

  playSound.addEventListener('click', () => {
    audio.play();
    if (selectedHorn.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

  volumeSlider.addEventListener('input', () => {
    let volume = volumeSlider.value;
    audio.volume = volume / 100;
    
    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });
}