"use strict"

var charPool = ['!', '/', '[', ']', '#', '{', '}', '@', '.', ':', ';', '*', '=', '|', '?', '>', '<', '&', '-'];

var addText = function(elementId, text) {
  var textArr = text.split('');
  var textCopy = text.slice(0);

  var element = document.getElementById(elementId);
  textArr.forEach(function(letter) {
    var spanLetter = document.createElement("span");
    spanLetter.setAttribute("id", "shuffle")
    spanLetter.innerHTML = letter;
    element.appendChild(spanLetter);
  });
  var letters = Array.prototype.slice.call(element.children);
  for (var j = 0; j < letters.length; j++) {
    shuffleText(letters[j]);
  }
}

var shuffleText = function(element) {
    var initLetter = element.innerHTML;
    var shuffleTimes = 5 + Math.floor(Math.random() * 5);
    var i = 0;
    var interval = setInterval(function() {
      if (i < shuffleTimes) {
        //setTimeout(function() {changeLetter(element)}, 1000 * i );
        changeLetter(element)
      } else {
        clearInterval(interval);
        element.innerHTML = initLetter;
      }
      i++;
    }, 15 * shuffleTimes);

}

var changeLetter = function(el) {
  if (el.innerHTML !== " ") {
    var randChar = Math.floor(Math.random() * charPool.length);
    el.innerHTML = charPool[randChar];
  }
}

window.addEventListener('load', addText("testId", "test test text text"));
