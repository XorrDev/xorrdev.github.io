function Scrolled() {
  var floatCalled = window.pageYOffset;
  if(floatCalled > 100) {
    document.getElementById("staticMenu").style.visibility = "hidden";
    document.getElementById("floatMenu").style.visibility = "visible";
    document.getElementById("SMBtp").style.opacity = "0";
    document.getElementById("SMEchoCaves").style.opacity = "0";
    document.getElementById("SMCatalog").style.opacity = "0";
    document.getElementById("SMTp").style.opacity = "0";
    document.getElementById("SMCl").style.opacity = "0";
    document.getElementById("SMAbout").style.opacity = "0";
  }
  if(floatCalled > 150) {
    document.getElementById("FMBtp").style.opacity = "1";
    document.getElementById("FMEchoCaves").style.opacity = "1";
    document.getElementById("FMCatalog").style.opacity = "1";
    document.getElementById("FMTp").style.opacity = "1";
    document.getElementById("FMCl").style.opacity = "1";
    document.getElementById("FMAbout").style.opacity = "1";
  }
  if(floatCalled < 150) {
    document.getElementById("FMBtp").style.opacity = "0";
    document.getElementById("FMEchoCaves").style.opacity = "0";
    document.getElementById("FMCatalog").style.opacity = "0";
    document.getElementById("FMTp").style.opacity = "0";
    document.getElementById("FMCl").style.opacity = "0";
    document.getElementById("FMAbout").style.opacity = "0";
  }
  if(floatCalled < 100) {
    document.getElementById("floatMenu").style.visibility = "hidden";
    document.getElementById("staticMenu").style.visibility = "visible";
    document.getElementById("SMBtp").style.opacity = "1";
    document.getElementById("SMEchoCaves").style.opacity = "1";
    document.getElementById("SMCatalog").style.opacity = "1";
    document.getElementById("SMTp").style.opacity = "1";
    document.getElementById("SMCl").style.opacity = "1";
    document.getElementById("SMAbout").style.opacity = "1";
  }
}
function BackToProjects() {
  window.location.href = 'https://reactivepeakstudios.github.io/projects';
}
function EchoCaves() {
  window.location.href = 'https://reactivepeakstudios.github.io/echo-caves/';
}
function Themepunk() {
  window.location.href = 'https://reactivepeakstudios.github.io/echo-caves/themepunk';
}
function Changelog() {
  window.location.href = 'https://reactivepeakstudios.github.io/echo-caves/changelog';
}
function About() {
  window.location.href = 'https://reactivepeakstudios.github.io/echo-caves/about';
}
function searchALL() {
  document.getElementById(prevTag).style = "background-color: #484848;";
  document.getElementById("tagALL").style = "background-color: #00ACFF;";
  prevTag = "tagALL";
}
function searchOT() {
  document.getElementById(prevTag).style = "background-color: #484848;";
  document.getElementById("tagOT").style = "background-color: #00ACFF;";
  prevTag = "tagOT";
}
function searchCT() {
  document.getElementById(prevTag).style = "background-color: #484848;";
  document.getElementById("tagCT").style = "background-color: #00ACFF;";
  prevTag = "tagCT";
}
function searchDT() {
  document.getElementById(prevTag).style = "background-color: #484848;";
  document.getElementById("tagDT").style = "background-color: #00ACFF;";
  prevTag = "tagDT";
}
function searchLT() {
  document.getElementById(prevTag).style = "background-color: #484848";
  document.getElementById("tagLT").style = "background-color: #00ACFF;";
  prevTag = "tagLT";
}
function searchRA() {
  document.getElementById(prevTag).style = "background-color: #484848";
  document.getElementById("tagRA").style = "background-color: #00ACFF;";
  prevTag = "tagRA";
}

function searchThemes() {
  var input, filter, catalog, product, productHeader, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase(); 
  catalog = document.getElementById("products");
  product = catalog.getElementsByClassName("product-card");
  
  for (i = 0; i < product.length; i++) {
      productHeader = product[i].getElementsByTagName("p")[0];
      txtValue = productHeader.textContent || productHeader.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          product[i].style.display = "";
      } else {
          product[i].style.display = "none";
      }
  }
}