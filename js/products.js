const productTiles = document
  .getElementById("products")
  .getElementsByClassName("gridProduct");
// const productsNavItems = document.getElementById("productsNavbar").children;
const scrollDots = document.getElementById("scrollDots");


Array.from(document.querySelectorAll('a[href="#products"]')).forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    lastMouseEnter = 'products';

    const top = products.getBoundingClientRect().height;
    window.scrollTo({top: top, behavior: 'smooth'});

    overlayMobileMenu.style.display = "none";
    menu.style.display = "none";
    Array.from(burgerButton.getElementsByTagName("div")).forEach((d) => {
      d.classList.remove("burgerClicked");
    });
  });
});

// if(navigator.userAgent.mobile){

// const clickOnProductMobileNav = event => {
//   const clickedProductNavItem = event.target;

//   Array.from(productsNavItems).forEach((pni) => {
//     if (pni === clickedProductNavItem) {
//       clickedProductNavItem.style.color = "#8fce50";
//       if (pni.innerHTML === "FARM") {
//         scrollDots.children[1].style.background = "#8fce50";
//         scrollDots.children[0].style.background = "white";
//         scrollDots.children[2].style.background = "white";
//         scrollDots.children[3].style.background = "white";
//       } else if (pni.innerHTML === "HEDGE") {
//         scrollDots.children[2].style.background = "#8fce50";
//         scrollDots.children[1].style.background = "white";
//         scrollDots.children[0].style.background = "white";
//         scrollDots.children[3].style.background = "white";
//       } else if (pni.innerHTML === "TRADE") {
//         scrollDots.children[0].style.background = "#8fce50";
//         scrollDots.children[1].style.background = "white";
//         scrollDots.children[2].style.background = "white";
//         scrollDots.children[3].style.background = "white";
//       }
//       else if (pni.innerHTML === "NOVI") {
//         scrollDots.children[3].style.background = "#8fce50";
//         scrollDots.children[1].style.background = "white";
//         scrollDots.children[2].style.background = "white";
//         scrollDots.children[0].style.background = "white";
//       }
//        return;
//     }
//     pni.style.color = "white";
//   });

//   const clickedProductTitle = clickedProductNavItem.textContent
//     .trim()
//     .toLowerCase();
//   const choosenTile = Array.from(
//     document.getElementsByClassName("gridProduct")
//   ).find((el) => el.querySelector("img").src.includes(clickedProductTitle));

//   Array.from(productTiles).forEach((pt) => {
//     if (pt === choosenTile) {
//       choosenTile.style.display = "flex";
//       return;
//     }
//     pt.style.display = "none";
//   });
// };

// Array.from(productsNavItems).forEach((pni) => {
//   pni.addEventListener("click", clickOnProductMobileNav);
// });

// productTiles[0].addEventListener("touchstart", (event) => {
//   event.target.children[0].src = "./../gifs/trade.gif";
// });
// productTiles[0].addEventListener("touchend", (event) => {
//   event.target.children[0].src = "./../img/trade.png";
// });

// productTiles[1].addEventListener("touchstart", (event) => {
//   event.target.children[0].src = "./../gifs/farming.gif";
// });
// productTiles[1].addEventListener("touchend", (event) => {
//   event.target.children[0].src = "./../img/farming.png";
// });

// productTiles[2].addEventListener("touchstart", (event) => {
//   event.target.children[0].src = "./../gifs/hedge.gif";
// });
// productTiles[2].addEventListener("touchend", (event) => {
//   event.target.children[0].src = "./../img/hedge.png";
// });

// }else{
productTiles[0].addEventListener("mouseenter", (event) => {
  event.target.children[0].src = "./gifs/trade.gif";
});
productTiles[0].addEventListener("mouseleave", (event) => {
  event.target.children[0].src = "./img/trade.png";
});

productTiles[1].addEventListener("mouseenter", (event) => {
  event.target.children[0].src = "./gifs/market-making.gif";
});
productTiles[1].addEventListener("mouseleave", (event) => {
  event.target.children[0].src = "./img/market-making.png";
});

productTiles[2].addEventListener("mouseenter", (event) => {
  event.target.children[0].src = "./gifs/farming.gif";
});
productTiles[2].addEventListener("mouseleave", (event) => {
  event.target.children[0].src = "./img/farming.png";
});

productTiles[3].addEventListener("mouseenter", (event) => {
  event.target.children[0].src = "./gifs/lend.gif";
});
productTiles[3].addEventListener("mouseleave", (event) => {
  event.target.children[0].src = "./img/lend.png";
});
// }

const swipedLeftProductTile = (event) => {

  let clickedHtmlElement = event.target;
  if(clickedHtmlElement.nodeName !== 'DIV'){
    clickedHtmlElement = clickedHtmlElement.parentElement;
  }

  const clickedProductTitle = clickedHtmlElement
    .querySelector("span")
    .textContent.trim()
    .toLowerCase();
  clickedHtmlElement.style.display = "none";

  if (clickedProductTitle.includes("trade")) {
    // productsNavItems[0].style.color = "white";
    // productsNavItems[1].style.color = "#8fce50";

    scrollDots.children[1].style.background = "#8fce50";
    scrollDots.children[0].style.background = "white";

    clickedHtmlElement.nextElementSibling.style.display = "flex";
  } else if (clickedProductTitle.includes("market making")) {
    // productsNavItems[1].style.color = "white";
    // productsNavItems[2].style.color = "#8fce50";

    scrollDots.children[2].style.background = "#8fce50";
    scrollDots.children[1].style.background = "white";

    clickedHtmlElement.nextElementSibling.style.display = "flex";
  } else if (clickedProductTitle.includes("earn yield")) {
    // productsNavItems[2].style.color = "white";
    // productsNavItems[3].style.color = "#8fce50";

    scrollDots.children[3].style.background = "#8fce50";
    scrollDots.children[2].style.background = "white";

    clickedHtmlElement.nextElementSibling.style.display = "flex";
  }else if (clickedProductTitle.includes("lend")) {
    // productsNavItems[3].style.color = "white";
    // productsNavItems[0].style.color = "#8fce50";

    scrollDots.children[0].style.background = "#8fce50";
    scrollDots.children[3].style.background = "white";

    
    clickedHtmlElement.previousElementSibling.previousElementSibling.previousElementSibling.style.display = "flex";

  }
};

const swipedRightProductTile = (event) => {

  let clickedHtmlElement = event.target;
  if(clickedHtmlElement.nodeName !== 'DIV'){
    clickedHtmlElement = clickedHtmlElement.parentElement;
  }
  const clickedProductTitle = clickedHtmlElement
    .querySelector("span")
    .textContent.trim()
    .toLowerCase();
    clickedHtmlElement.style.display = "none";

  if (clickedProductTitle.includes("trade")) {
    // productsNavItems[0].style.color = "white";
    // productsNavItems[3].style.color = "#8fce50";
    scrollDots.children[0].style.background = "white";
    scrollDots.children[3].style.background = "#8fce50";
    
    clickedHtmlElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "flex";
  } else if (clickedProductTitle.includes("market making")) {
    // productsNavItems[1].style.color = "white";
    // productsNavItems[0].style.color = "#8fce50";

    scrollDots.children[1].style.background = "white";
    scrollDots.children[0].style.background = "#8fce50";
    
    clickedHtmlElement.previousElementSibling.style.display = "flex";
  }else if (clickedProductTitle.includes("earn yield")) {
    // productsNavItems[2].style.color = "white";
    // productsNavItems[1].style.color = "#8fce50";

    scrollDots.children[2].style.background = "white";
    scrollDots.children[1].style.background = "#8fce50";
    
    clickedHtmlElement.previousElementSibling.style.display = "flex";
  } else if (clickedProductTitle.includes("lend")) {
    // productsNavItems[3].style.color = "white";
    // productsNavItems[2].style.color = "#8fce50";

    scrollDots.children[3].style.background = "white";
    scrollDots.children[2].style.background = "#8fce50";

    clickedHtmlElement.previousElementSibling.style.display = "flex";
  }
};

Array.from(productTiles).forEach((pt) => {
  pt.addEventListener("swiped-left", swipedLeftProductTile);
  pt.addEventListener("swiped-right", swipedRightProductTile);
});
