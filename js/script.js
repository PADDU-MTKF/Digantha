// let btn=document.querySelector('.btn');

// btn.addEventListener('click',()=>{

//     let url='index2.html'
//     window.location.assign(url)
// })

function image_link() {
  let img = document.getElementsByTagName("img");

  for (let i = 0; i < img.length; i++) {
    let sr = img[i].src;
    if (sr.includes("drive.google.com/file")) {
      sr = sr.replace("file/d/", "uc?id=");
      sr = sr.replace("/view?usp=sharing", "");
      // console.log(sr);
      img[i].src = sr;
    }
  }
}

window.onload = function () {
  image_link();
};

let timer_element = document.querySelector(".btn");
// Set the countdown date and time
var countdownDate = new Date("April 04, 2025 08:30:00").getTime();

// Update the countdown every second
var countdownTimer = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countdownDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in the console or update it on a webpage
  timer_element.innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  // If the countdown is finished, clear the interval
  if (distance < 0) {
    clearInterval(countdownTimer);
    timer_element.innerHTML("Countdown finished!");
    // Perform any additional actions when the countdown is finished
  }
}, 1000);

//

let box = document.querySelectorAll(".box");
let se = document.querySelectorAll(".secondary");

box.forEach((item, i1) => {
  item.addEventListener("mouseover", () => {
    se.forEach((s, i2) => {
      if (i1 === i2) {
        s.classList.add("drop_text");
      } else {
        s.classList.remove("drop_text");
      }
    });
  });
});
box.forEach((item, i1) => {
  item.addEventListener("mouseout", () => {
    se.forEach((s, i2) => {
      if (i1 === i2) {
        s.classList.remove("drop_text");
        // s.classList.add("drop_text")
      }
    });
  });
});

box.forEach((item, i1) => {
  item.addEventListener("click", () => {
    se.forEach((s, i2) => {
      if (i1 === i2) {
        // Append the data to the URL as a query string
        let key = s.textContent;
        im_src = item.querySelector("img").src;
        var destinationURL =
          "content.html" +
          "?key=" +
          encodeURIComponent(key) +
          "&img=" +
          encodeURIComponent(im_src);
        // Redirect to the receiving HTML file
        window.location.href = destinationURL;
      }
    });
  });
});

let reg_btn = document.getElementById("register");
reg_btn.addEventListener("click", () => {
  window.location.href =
    "https://docs.google.com/forms/d/e/1FAIpQLSeSKx4clWuAyXEu-4239dRgcsLZzX1IGBJRvLKrMhvVnb6mMw/viewform?usp=dialog";     // Chang the URL to the google form reg form ...............................................
});


//preloader

if (!sessionStorage.getItem("loaded")) {
  setTimeout(() => {
    var preloader = document.querySelector(".preloader");
    preloader.classList.add("fade-out");

    setTimeout(function () {
      preloader.style.display = "none";
    }, 500); // Adjust the timeout value to match the duration of the fade-out animation
  }, 4000);
  sessionStorage.setItem("loaded", true);
} else {
  setTimeout(() => {
    var preloader = document.querySelector(".preloader");
    preloader.classList.add("fade-out");

    setTimeout(function () {
      preloader.style.display = "none";
    }, 500); // Adjust the timeout value to match the duration of the fade-out animation
  }, 1000);
}

/*
// Detect when all images have finished loading
document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll("img");
  var loadedImages = 0;

  // Increment the loadedImages count when each image finishes loading
  function imageLoaded() {
    loadedImages++;
    if (loadedImages === images.length) {
      var preloader = document.querySelector(".preloader");
      preloader.classList.add("fade-out");

      setTimeout(function () {
        preloader.style.display = "none";
      }, 500); // Adjust the timeout value to match the duration of the fade-out animation

      // preloader.style.display = "none"; // Hide the preloader when all images are loaded
    }
  }

  // Attach the imageLoaded function to the load event of each image
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("load", imageLoaded);
  }
});
*/

// // this is for hamburg
// const hamburger = document.querySelector(".hamburger");
// let ham = document.querySelector("#navbar ul");

// hamburger.addEventListener("click", function () {
//   this.classList.toggle("is-active");
//   ham.classList.add("visi");
// });

let gli = document.querySelector("#ab");
let t = document.querySelector(".btn");

setInterval(() => {
  gli.classList.toggle("glitch-text");
  t.classList.toggle("glitch-text");
}, 1000);
