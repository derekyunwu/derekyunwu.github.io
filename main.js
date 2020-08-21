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
