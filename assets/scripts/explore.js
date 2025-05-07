// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //from speech synthesis documentation provided
  const voiceSel = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const txtArea = document.getElementById('text-to-speak');
  const faceImg = document.querySelector('img');

  const synth = window.speechSynthesis;
  let voices = [];
  //referenced the link given to us on the lab write up
  function popVoices() {
    //retreives the voices
    voices = synth.getVoices();
    voiceSel.innerHTML='';
    const defaultOpt= document.createElement('option');
    //for default
    defaultOpt.textContent= 'Select Voice:';
    defaultOpt.disabled=true;
    defaultOpt.selected=true;
    voiceSel.appendChild(defaultOpt);

    //populates the voices
    for(let i = 0; i< voices.length;i++){
      const option= document.createElement("option");
      option.textContent = `${voices[i].name}
      (${voices[i].lang})`;
      if (voices[i].default) { 
        option.textContent += " - DEFAULT";
      }
      option.setAttribute("value",i);
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSel.appendChild(option);
    }
  }

  popVoices();
  if (speechSynthesis.onvoiceschanged !== undefined ) {
    speechSynthesis.onvoiceschanged = popVoices;
  }

  //speak on click
  speakButton.addEventListener('click', () => {
    const text = txtArea.value;
    const selectedIdx = voiceSel.value;

    if(!text || selectedIdx === 'select'){
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice= voices[selectedIdx];
    //face image when speaking
    faceImg.src= 'assets/images/smiling-open.png';

    //when speaking stops, put back smiley face
    utterance.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };
    synth.speak(utterance);
  });

}