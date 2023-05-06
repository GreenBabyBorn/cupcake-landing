let header = document.querySelector(".header");
let sticky = header.offsetTop;

function stickyScroll() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function () {
  stickyScroll();
};

let bg = document.querySelectorAll('[class*="berry-"]');
for (let i = 0; i < bg.length; i++) {
  window.addEventListener("mousemove", function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg[i].style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
  });
}
