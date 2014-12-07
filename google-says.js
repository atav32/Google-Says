console.log('google says');

var main = function() {
  if (playingGoogleSays()) {
      startGame();
  }
};

var playingGoogleSays = function() {
  if (document.URL.indexOf('googlesays') > -1) {
    console.log('playing');
    return true;
  } else {
    return false;
  }
};

var startGame = function() {
  console.log('start game')
};

main();
