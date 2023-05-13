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

const bg = document.querySelectorAll('[class*="berry-"]');
for (let i = 0; i < bg.length; i++) {
  window.addEventListener("mousemove", (e) => {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    // console.log(window.getComputedStyle(bg[i]));
    bg[i].style.setProperty("--posX", -x * 100 + "px");
    bg[i].style.setProperty("--posY", -y * 100 + "px");
    // bg[i].style.transform =
    //   " translate(-" + x * 100 + "px, -" + y * 100 + "px) ";
  });
}

// Если JS включен удаляем класс

header.classList.remove("nojs-header");
