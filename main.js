var prev = window.pageYOffset;
var nav = document.getElementById("navbar");
window.onscroll = function () {
  var curr = window.pageYOffset;
  if (prev > curr) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
  prev = curr;
};

function showMoreSkills() {
  var buttonText = document.getElementById("morebutton");
  var moreSkills = document.getElementById("more");
  var directionIcon = document.getElementById("direction-icon");

  if (moreSkills.style.display === "inline") {
    moreSkills.style.display = "none";
    buttonText.innerHTML = "View More";
    directionIcon.setAttribute("name", "chevron-down-outline");
  } else {
    moreSkills.style.display = "inline";
    buttonText.innerHTML = "View Less";
    directionIcon.setAttribute("name", "chevron-up-outline");
  }
}

// function showMoreSkills() {
//   var buttonText = document.getElementById("morebutton");
//   var moreSkills = document.getElementById("more");
//   var directionIcon = document.getElementById("direction-icon");

//   if (moreSkills.style.maxHeight) {
//     moreSkills.style.maxHeight = null;
//     buttonText.innerHTML = "View More";
//     directionIcon.setAttribute("name", "chevron-down-outline");
//   } else {
//     moreSkills.style.maxHeight = moreSkills.scrollHeight + "px";
//     buttonText.innerHTML = "View Less";
//     directionIcon.setAttribute("name", "chevron-up-outline");
//   }
// }

function badBackground(elem) {
  var hobby = document.getElementById("hobby");
  hobby.style.backgroundImage = elem.getAttribute("img-url");
  var hobbies = hobby.getElementsByClassName("hobby-txt");

  for (var i = 0; i < hobbies.length; i++) {
    if (hobbies[i].className.includes("active")) {
      hobbies[i].className = hobbies[i].className.replace(" active", "");
    }
  }
  elem.className += " active";
}
