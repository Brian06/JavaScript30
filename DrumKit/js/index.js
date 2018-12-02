function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing'); //this is the key
}

function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0; //rewind
  audio.play();
  key.classList.add('playing');
}

window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)) 