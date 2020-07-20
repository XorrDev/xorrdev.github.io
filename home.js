function Scrolled() {
  var floatCalled = window.pageYOffset;
  if(floatCalled > 100) {
  document.getElementById("staticMenu").style.visibility = "hidden";
  document.getElementById("floatMenu").style.visibility = "visible";
  document.getElementById("SMHome").style.opacity = "0";
  document.getElementById("SMDownloads").style.opacity = "0";
  document.getElementById("SMProjects").style.opacity = "0";
  document.getElementById("SMAbout").style.opacity = "0";
  document.getElementById("SMContact").style.opacity = "0";
  }
  if(floatCalled > 150) {
    document.getElementById("FMHome").style.opacity = "1";
    document.getElementById("FMDownloads").style.opacity = "1";
    document.getElementById("FMProjects").style.opacity = "1";
    document.getElementById("FMAbout").style.opacity = "1";
    document.getElementById("FMContact").style.opacity = "1";
  }
  if(floatCalled < 150) {
    document.getElementById("FMHome").style.opacity = "0";
    document.getElementById("FMDownloads").style.opacity = "0";
    document.getElementById("FMProjects").style.opacity = "0";
    document.getElementById("FMAbout").style.opacity = "0";
    document.getElementById("FMContact").style.opacity = "0";
  }
  if(floatCalled < 100) {
    document.getElementById("floatMenu").style.visibility = "hidden";
    document.getElementById("staticMenu").style.visibility = "visible";
    document.getElementById("SMHome").style.opacity = "1";
    document.getElementById("SMDownloads").style.opacity = "1";
    document.getElementById("SMProjects").style.opacity = "1";
    document.getElementById("SMAbout").style.opacity = "1";
    document.getElementById("SMContact").style.opacity = "1";
  }
}
document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ 
        "'A lot of indie developers who became 'Overnight Successes' were working at it for ten years.' - Dan Adelman",
        "'Golden rule of level design - Finish your first level last.' - John Romero",
        "'Nobody in this industry knows what they’re doing, we just have a gut assumption.' - Cliff Bleszinski",
        "'You can make an amazing game, but you can't make a success. Your players make the success.' - Irme Jele",
        "'Lets optimize for player experience rather than what we think will make more money.' - Ron Carmel",
        "'The successful free to play games are selling positive emotions. Not content.' - Nicholas Lovell",
        "'It should be the experience, that is touching. What I strive for is to make the person playing the game the director.' - Shigeru Miyamoto.",
    ];
    function typeWriter (text, i, fnCallback) {
      if (i < (text.length)) {
       document.getElementById("descF").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>'; 
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 50);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 2000);
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined') {
          setTimeout(function() {
            StartTextAnimation(0);
          }, 2000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function() {
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });
  function logoVisibility() {
    var displayPortWidth = window.innerWidth;
    var displayPortHeight = window.innerHeight;
    if(displayPortWidth < 960) {
        document.getElementById("SLogo").style.visibility = "hidden";
    }  
    if(displayPortWidth > 960) {
            document.getElementById("SLogo").style.visibility = "visible";
    }
}
function Downloads() {
  window.location.href = 'https://reactivepeakstudios.github.io/downloads';
}
function Projects() {
  window.location.href = 'https://reactivepeakstudios.github.io/projects';
}
function About() {
  window.location.href = 'https://reactivepeakstudios.github.io/about';
}
function Contact() {
  window.location.href = 'https://reactivepeakstudios.github.io/contact';
}
