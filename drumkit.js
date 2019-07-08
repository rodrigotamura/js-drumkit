// Find out the key code on keycode.info

function playDrum( e ) {
    const   key = e.keyCode,
            audio = document.querySelector(`audio[data-key="${key}"]`),
            box = document.querySelector(`div[data-key="${key}"]`);
    
    if(!audio) return; // out of available keys 

    // playing audio
    audio.currentTime = 0; // without this command it will not allow us to hit fastly (F, F, F, F...)
    audio.play();

    // toggling sytle class
    box.classList.add('playing');
}

function removePlaying( e ) {
    if(e.propertyName != 'transform') return; // if is not a transform, scape

    this.classList.remove('playing');
}

/*
// for undone the key class in noob style
window.addEventListener('keyup', function(e) {
    const   key = e.keyCode,
            box = document.querySelector(`div[data-key="${key}"]`);

    // removing class
    box.classList.remove('playing');
})
*/

// for undone the key class professionally
const keys = document.querySelectorAll('.key');
keys.forEach(k => k.addEventListener('transitionend', removePlaying));

// playing drum
window.addEventListener('keydown', playDrum);