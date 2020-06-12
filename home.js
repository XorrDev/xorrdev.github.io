function Scrolled() {
    var floatCalled = window.pageYOffset;
    if(floatCalled > 100) {
    document.getElementById("staticMenu").style.visibility = "hidden";
    document.getElementById("floatMenu").style.visibility = "visible";
    }
    if(floatCalled < 100) {
        document.getElementById("floatMenu").style.visibility = "hidden";
        document.getElementById("staticMenu").style.visibility = "visible";
    } 
    if(floatCalled > 150) {
        document.getElementById("SMButton").style.visibility = "visible";
    }
}
document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ 
        "'A lot of indie developers who became 'Overnight Successes' were working at it for ten years.' - Dan Adelman",
        "'Golden rule of level design - Finish your first level last.' - John Romero",
        "'Nobody in this industry knows what they’re doing, we just have a gut assumption.' - Cliff Bleszinski",
        "'You can make an amazing game, but you can't make a success. Your players make the success.' - Irme Jele",
        "'Lets optimize for player experience rather than what we think will make more money.' - Ron Carmel",
        "'The successful free to play games are selling positive emotions. Not content.' - Nicholas Lovell",
        "'It should be the experience, that is touching. What I strive for is to make the person playing the game the director.' - Shigeru Miyamoto.",
    ];
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter (text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.getElementById("descF").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>'; 
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 50);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 2000);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 2000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });
