function Scrolled() {
  var floatCalled = window.pageYOffset;
  if(floatCalled > 100) {
    document.getElementById("staticMenu").style.visibility = "hidden";
    document.getElementById("floatMenu").style.visibility = "visible";
    document.getElementById("SMProjects").style.opacity = "0";
  }
  if(floatCalled > 150) {
    document.getElementById("FMProjects").style.opacity = "1";
  }
  if(floatCalled < 150) {
    document.getElementById("FMProjects").style.opacity = "0";
  }
  if(floatCalled < 100) {
    document.getElementById("floatMenu").style.visibility = "hidden";
    document.getElementById("staticMenu").style.visibility = "visible";
    document.getElementById("SMProjects").style.opacity = "1";
  }
  if(floatCalled > 600) {
    document.getElementById("ft1").style.opacity = "1";
    document.getElementById("ft2").style.opacity = "1";
    document.getElementById("ft3").style.opacity = "1";
    document.getElementById("ft4").style.opacity = "1";
    document.getElementById("ft5").style.opacity = "1";
  }
}
  function Projects() {
    window.location.href = 'https://reactivepeakstudios.github.io/projects';
  }
  function addHeroZitus() {
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=733952380772679763&permissions=0&scope=bot';
  }
  