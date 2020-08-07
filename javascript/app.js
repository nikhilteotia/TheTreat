//for navbar animation active and slide in

const navSlide = () => {
  const hamMenu = document.querySelector(".ham-menu");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  var hamImg = document.getElementById("ham-img");

  hamMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //change of images is here note:: change path of sever with the current directory or with __dir if on server.

    if (hamImg.src == "/images/icons/ham-menu.svg") {
      hamImg.src = "/images/icons/cross.png";
    } else {
      hamImg.src = "/images/icons/ham-menu.svg";
    }

    // animation of navbar is here
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};

navSlide();
