
const navItems = document.getElementById("navbar").getElementsByTagName("li");
const root = document.querySelector(":root");
const appImg = document.querySelector(".hoverDiv");
const buttonTrade = document.getElementById("trade");
const firstPage = document.getElementById('firstPage');
const products = document.getElementById("products");
const features = document.getElementById("features");
const burgerButton = document.getElementById("burger");
const overlayMobileMenu = document.getElementById("overlayMobileMenu");
const menu = document.getElementById("menu");

let choosenPage = null;
let lastMouseEnter = null;
let gifIsDone = false;


const enterNavItem = event => {
  const li = event.target;
  const hoveredNavItemText = li.querySelector('div').children[0].textContent;
  const width = li.children[0].getBoundingClientRect().width - 32;

  root.style.setProperty(`--selected-nav-item-${hoveredNavItemText}-width`, width + "px");
  li.children[1].classList.add(`navUnderline${hoveredNavItemText.charAt(0).toUpperCase() + hoveredNavItemText.slice(1)}`);
};

const leaveNavItem = event => {
  if(lastMouseEnter == event.target.children[0].children[0].textContent.trim()){
    return;
  }
  const li = event.target;
  const hoveredNavItemText = li.querySelector('div').children[0].textContent;
  li.children[1].classList.remove(`navUnderline${hoveredNavItemText.charAt(0).toUpperCase() + hoveredNavItemText.slice(1)}`);
};

Array.from(navItems).slice(0,5).forEach(element => {
  element.addEventListener("mouseenter", enterNavItem);
  element.addEventListener("mouseleave", leaveNavItem);
});

const enterAppImgArea = event => {
  event.target.querySelector("img").classList.add("hoverAppImg");
  event.target
    .querySelector(".rightSideDescription")
    .classList.add("leftToZero");
  event.target.querySelector("p").classList.add("invisible");
};

const leaveAppImgArea = event => {
  event.target.querySelector("img").classList.remove("hoverAppImg");
  event.target
    .querySelector(".rightSideDescription")
    .classList.remove("leftToZero");
  event.target.querySelector("p").classList.remove("invisible");
};

appImg.addEventListener("mouseenter", enterAppImgArea);
appImg.addEventListener("mouseleave", leaveAppImgArea);

// document.querySelector('a[href="#"]').addEventListener("click", event => {
document.querySelector('.logo').addEventListener("click", event => {
    event.preventDefault();

    window.scrollTo({top:0, behavior: 'smooth'});

    overlayMobileMenu.style.display = "none";
    menu.style.display = "none";
    Array.from(burgerButton.getElementsByTagName("div")).forEach((d) => {
      d.classList.remove("burgerClicked");
    });
  });

burgerButton.addEventListener("click", event => {
  overlayMobileMenu.style.display = "block";
  menu.style.display = "block";
  document.body.classList.add('scrollDisabled');
  // document.querySelector("#navbar ul").style.marginRight = "45px";
  Array.from(burgerButton.getElementsByTagName("div")).forEach((d) => {
    d.classList.add("burgerClicked");
  });
});

overlayMobileMenu.addEventListener("click", event => {
  overlayMobileMenu.style.display = "none";
  menu.style.display = "none";
  document.body.classList.remove('scrollDisabled');
  Array.from(burgerButton.getElementsByTagName("div")).forEach((d) => {
    d.classList.remove("burgerClicked");
  });
});

function createScrollStopListener(element, callback, timeout) {
  var handle = null;
  var onScroll = function() {
      if (handle) {
          clearTimeout(handle);
      }
      handle = setTimeout(callback, timeout || 200);
  };
  element.addEventListener('scroll', onScroll);
  return function() {
      element.removeEventListener('scroll', onScroll);
  };
}


createScrollStopListener(window, function() {

    let minTopPosition = 100000;
    const topPositions = [
      {
        page: 'firstPage',
        top: firstPage.getBoundingClientRect().top
      },
      {
        page: 'products',
        top: products.getBoundingClientRect().top
      },
      {
        page: 'features',
        top: features.getBoundingClientRect().top
      },
      {
        page: 'team',
        top: document.getElementById('team').getBoundingClientRect().top
      },
      // {
      //   page: 'faq',
      //   top: document.getElementById('faq').getBoundingClientRect().top
      // },
      // {
      //   page: 'contact',
      //   top: document.getElementById('contact').getBoundingClientRect().top
      // },
    ];

    topPositions.forEach(tp => {
      if(tp.top < minTopPosition && tp.top > 0){
        minTopPosition = tp;
        choosenPage = tp;
      }
    });

    Array.from(navItems).forEach(ni => {
      if(ni.children[0].textContent.includes('TRADE')){
        return;
      }

      if(ni.children[1].className && ni.children[1].className.includes('navUnderline')){
        // ni.children[1].classList.remove('navUnderline');
        ni.children[1].className = '';
      }
    });

    //this also includes mobile
    // const choosenNavItems = document.querySelectorAll(`a[href="#${choosenPage.page}"]`);
    if(choosenPage.page !== 'firstPage'){
      const choosenNavItem = document.querySelectorAll(`a[href="#${choosenPage.page}"]`)[1];  
      const width = choosenNavItem.parentElement.getBoundingClientRect().width - 32;
      // root.style.setProperty("--selected-nav-item-width", width + "px");
      root.style.setProperty(`--selected-nav-item-${choosenPage.page}-width`, width + "px");
      choosenNavItem.parentElement.nextElementSibling.classList.add(`navUnderline${choosenPage.page.charAt(0).toUpperCase() + choosenPage.page.slice(1)}`);
    }

    if(choosenPage.page === 'team' && !gifIsDone){
      if (isMobile()) {
        teamGifImg.src = "./gifs/team-gi-tablet-portrait-and-mobilef.gif";
  
        setTimeout(() => {
          teamGifImg.style.display = "none";
          flexTeamResponsive.style.display = "flex";
        }, 700);
      } else {
        teamGifImg.src = "./gifs/team-gif.gif";
        setTimeout(() => {
          teamGifImg.style.display = "none";
          flexTeam.style.display = "flex";
        }, 700);
      }
      // localStorage.setItem('gifIsDone', true);
      gifIsDone = true;
    }

    // choosenNavItems.forEach(ni => {
    //   const width = ni.parentElement.getBoundingClientRect().width - 32;
    //   root.style.setProperty("--selected-nav-item-width", width + "px");
    //   ni.parentElement.nextElementSibling.classList.add('navUnderline');
    // });

    });
