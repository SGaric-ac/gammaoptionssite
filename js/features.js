const featureItems = document.getElementsByClassName('featureItem');

Array.from(document.querySelectorAll('a[href="#features"]')).forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      lastMouseEnter = 'features';


      const top = products.getBoundingClientRect().height*2;
  
      window.scrollTo({top: top, behavior: 'smooth'});
  
      overlayMobileMenu.style.display = "none";
      menu.style.display = "none";
      Array.from(burgerButton.getElementsByTagName("div")).forEach(d => {
        d.classList.remove("burgerClicked");
      });
    });
  });

Array.from(featureItems).forEach(i => {
  i.addEventListener('mouseenter', (event)=>{
    i.children[2].style.width = '59px';
    i.children[2].style.height = '43px';
    i.children[2].style.marginRight = '-2.93%';
    i.children[2].src = './gifs/checkMark.gif';
  })

  i.addEventListener('mouseleave', (event)=>{
    i.children[2].src = './img/featureCircle.png';
    i.children[2].style.width = 'unset';
    i.children[2].style.height = 'unset';
    i.children[2].style.marginRight = 'unset';
  })
})

