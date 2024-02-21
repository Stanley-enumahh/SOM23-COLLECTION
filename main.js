const menuBtn = document.querySelector(".menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
  menuBtn.name = menuBtn.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("nav-links-active");
});

/*links*/
const Links = document.querySelectorAll(".links");

Links.forEach(function (links) {
  links.addEventListener("click", function (e) {
    navLinks.classList.remove("nav-links-active");
    menuBtn.name = "menu";
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const topBar = document.querySelector(".top-bar");
    let position = element.offsetTop - topBar.getBoundingClientRect().height;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

const dealInfo = document.querySelectorAll(".deal-info h1");

const FutureDate = new Date(2024, 1, 28, 12, 30);
const futureTime = FutureDate.getTime();

function getremainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneday = 24 * 60 * 60 * 1000;
  const onehour = 60 * 60 * 1000;
  const oneminute = 60 * 1000;
  const onesecond = 1000;

  let days = Math.floor(t / oneday);
  let hours = Math.floor((t % oneday) / onehour);
  let minutes = Math.floor((t % onehour) / oneminute);
  let seconds = Math.floor((t % oneminute) / onesecond);

  const values = [days, hours, minutes, seconds];

  function format(dealInfo) {
    if (dealInfo < 10) {
      return `0${dealInfo}`;
    } else {
      return dealInfo;
    }
  }

  dealInfo.forEach(function (dealInfo, index) {
    dealInfo.innerHTML = format(values[index]);
    const expiryText = document.querySelector(".expiry-text");
    if (t < 0) {
      clearInterval(countdown);
      dealInfo.innerHTML = 0;
      expiryText.classList.add("expiry-text-active");
    }
  });
}

let countdown = setInterval(getremainingTime, 1000);

getremainingTime();

/*footer date*/
const date = document.getElementById("date");
date.textContent = new Date().getFullYear();


const scrollUp = document.querySelector('.scroll-up')
window.addEventListener('scroll', function(){
  const scrollHeight = window.pageYOffset
  if(scrollHeight > 267){
    scrollUp.classList.add('scroll-up-acive')
  }
  else(scrollUp.classList.remove('scroll-up-acive'))
})