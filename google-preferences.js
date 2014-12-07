console.log('google-preferences');

var main = function() {
  if (playingGoogleSays()) {
    turnOffInstantResults();
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

var turnOffInstantResults = function() {
  var instantRadioMenu = document.getElementById('instant-radio');
  var saveButton = document.getElementsByClassName('jfk-button-action');
  saveButton.click();
};

main();
