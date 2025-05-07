// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //select by id of horn-select
  const hornSelect = document.getElementById('horn-select');
  //select by query of expose img
  const hornImg= document.querySelector('#expose img');
  //select by query of audio
  const audioEl= document.querySelector('audio');
  //select by element id of volume
  const volSlider = document.getElementById('volume');
  //select by query of volume-controls in html file
  const volIcon = document.querySelector('#volume-controls img');
  //select by query of button
  const playButton = document.querySelector('button');
  //create confetti
  const confetti = new JSConfetti(); 

  //select rught horn
  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;

    if (horn==='air-horn'){
      hornImg.src = 'assets/images/air-horn.svg';
      audioEl.src= 'assets/audio/air-horn.mp3';
    }
    else if (horn==='car-horn'){
      hornImg.src = 'assets/images/car-horn.svg';
      audioEl.src= 'assets/audio/car-horn.mp3';
    }
    if (horn==='party-horn'){
      hornImg.src = 'assets/images/party-horn.svg';
      audioEl.src= 'assets/audio/party-horn.mp3';
    }
  });
  
  //volume based on input
  volSlider.addEventListener('input', () => {
    const vol = volSlider.value;
    audioEl.volume= vol/100;

  let iconLevel =0;
  if (vol == 0){
    iconLevel=0;
    volIcon.src= 'assets/icons/volume-level-0.svg';
    volIcon.alt = 'Volume level 0';
  }
  else if (vol > 0 && vol <33){
    iconLevel=1;
    volIcon.src= 'assets/icons/volume-level-1.svg';
    volIcon.alt = 'Volume level 1';
  }
  else if (vol >= 33 && vol <67){
    iconLevel =2;
    volIcon.src= 'assets/icons/volume-level-2.svg';
    volIcon.alt = 'Volume level 2';
  }
  else if (vol >= 67){
    iconLevel=3;
    volIcon.src= 'assets/icons/volume-level-3.svg';
    volIcon.alt = 'Volume level 3';
  }
  });

  //play based on click
  playButton.addEventListener('click', () => {
    //if no horn is selected
    if(!audioEl.src) {
      return;
    }
    //plays selected audio file
    audioEl.play();
    //if party horn is selected, loads confetti
    if (hornSelect.value === 'party-horn') {
      confetti.addConfetti();
    }
  });
}