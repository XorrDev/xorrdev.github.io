function Scrolled() {
  var floatCalled = window.pageYOffset;
  if(floatCalled > 100) {
  document.getElementById("staticMenu").style.visibility = "hidden";
  document.getElementById("floatMenu").style.visibility = "visible";
  document.getElementById("SMHome").style.opacity = "0";
  document.getElementById("SMCl").style.opacity = "0";
  }
  if(floatCalled > 150) {
    document.getElementById("FMHome").style.opacity = "1";
    document.getElementById("FMCl").style.opacity = "1";
  }
  if(floatCalled < 150) {
    document.getElementById("FMHome").style.opacity = "0";
    document.getElementById("FMCl").style.opacity = "0";
  }
  if(floatCalled < 100) {
    document.getElementById("floatMenu").style.visibility = "hidden";
    document.getElementById("staticMenu").style.visibility = "visible";
    document.getElementById("SMHome").style.opacity = "1";
    document.getElementById("SMCl").style.opacity = "1";
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
