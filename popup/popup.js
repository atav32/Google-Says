var main = function() {
  var playButton = document.getElementById('play').addEventListener('click', openGame, false);
};

var openGame = function() {
  var gameUrl = 'http://www.google.com?googlesays=play';
  var preferencesUrl = 'https://www.google.com/preferences?hl=en&fg=1&googlesays=play'
  chrome.windows.create({"url": preferencesUrl, "incognito": true});
  chrome.tabs.create({"url": gameUrl});
};

main();
