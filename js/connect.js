const backToTopImg = document.querySelector('.backToTopImg');


Array.from(document.querySelectorAll('a[href="#connect"]')).forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      lastMouseEnter = 'connect';

      const top = connect.getBoundingClientRect().height*5;
  
      window.scrollTo({top: top, behavior: 'smooth'});
  
      overlayMobileMenu.style.display = "none";
      menu.style.display = "none";
      Array.from(burgerButton.getElementsByTagName("div")).forEach((d) => {
        d.classList.remove("burgerClicked");
      });
    });
  });


  const onMouseEnterConnectItem = event => {
    const img = event.target.querySelector('img');
    const hoveredItem = img.src.split('/').pop().split('.')[0].split('_')[0];
    img.src = `./img/${hoveredItem}_green.svg`;
  }
  const onMouseLeaveConnectItem = event => {
    const img = event.target.querySelector('img');
    const hoveredItem = img.src.split('/').pop().split('.')[0].split('_')[0];
    img.src = `./img/${hoveredItem}_blue.svg`;
  }


  Array.from(document.querySelectorAll('.social div')).forEach(d => {
    d.addEventListener('mouseenter', onMouseEnterConnectItem);
    d.addEventListener('mouseleave', onMouseLeaveConnectItem);
  });


  const backToTop = event => {
    event.preventDefault();

    window.scrollTo({top:0, behavior: 'smooth'});
  }

  backToTopImg.addEventListener('click', backToTop);