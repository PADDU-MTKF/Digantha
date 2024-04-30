
// *********** code for rules popup ***********

let nav_rules = document.querySelector(".nav_rules");
let nav_rules_ = document.querySelector(".nav_rules_");
let nav_rules_button = document.querySelector(".nav_rules button");
let blr = document.querySelector("#blr");
nav_rules.addEventListener("click", () => {
  
  blr.classList.add("blur"); // Add blur class to body
  nav_rules_.classList.add("nav_rules_visible");
  document.body.classList.add("hide_scrole"); // Remove blur class from body

});

function disp() {
  nav_rules_.classList.remove("nav_rules_visible");
  blr.classList.remove("blur"); // Remove blur class from body
  document.body.classList.remove("hide_scrole"); // Remove blur class from body

}

function goBack() {
  window.history.back(); // Navigate back in the browsing history
}


window.history.replaceState('Object', 'Title', '/');