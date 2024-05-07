// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('img');

  function populateVoiceList() {
    const voices = window.speechSynthesis.getVoices(); 
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoice = voiceSelect.selectedOptions[0].value;
    const voices = window.speechSynthesis.getVoices();
    utterance.voice = voices.find((voice) => voice.name === selectedVoice);
    utterance.onstart = function () {
      faceImage.src = 'assets/images/smiling-open.png';
    };
    utterance.onend = function () {
      faceImage.src = 'assets/images/smiling.png';
    };
    window.speechSynthesis.speak(utterance);
  });
}