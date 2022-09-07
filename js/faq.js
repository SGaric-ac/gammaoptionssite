const faqs = document.getElementById('questions').children;
const faqSubTitle = document.getElementById('faq').querySelector('span');

const onMouseEnterFaq = event => {
  event.preventDefault();
  event.target.querySelector('p').style.display = 'block';
  faqSubTitle.style.color = '#09b9e6';

  const img = event.target.querySelector('img');
  const newSrc = `./img/on_faq_${img.src.includes('faq_1') ? '1' : img.src.includes('faq_2') ? '2' : img.src.includes('faq_3') ? '3' : '4'}.png` ;
  img.src = newSrc;
}

const onMouseLeaveFaq = event => {
  event.preventDefault();
  event.target.querySelector('p').style.display = 'none';
  faqSubTitle.style.color = 'white';

  const img = event.target.querySelector('img');
  const newSrc = `./img/off_faq_${img.src.includes('faq_1') ? '1' : img.src.includes('faq_2') ? '2' : img.src.includes('faq_3') ? '3' : '4'}.png` ;
  img.src = newSrc;
}



if(!isMobile()){

  Array.from(faqs).forEach(faq => {
      faq.addEventListener('mouseenter', onMouseEnterFaq);
      faq.addEventListener('mouseleave', onMouseLeaveFaq);
  });
}else{

  const onMouseEnterFaqMobile = event => {
    // event.preventDefault();
    event.target.parentElement.querySelector('p').style.display = 'block';
    faqSubTitle.style.color = '#09b9e6';
  
    const img = event.target.parentElement.querySelector('img');
    const newSrc = `./img/on_faq_${img.src.includes('faq_1') ? '1' : img.src.includes('faq_2') ? '2' : img.src.includes('faq_3') ? '3' : '4'}.png` ;
    img.src = newSrc;
  }


  const onMouseLeaveFaqMobile = event => {
    // event.preventDefault();
    event.target.parentElement.querySelector('p').style.display = 'none';
    faqSubTitle.style.color = 'white';
  
    const img = event.target.parentElement.querySelector('img');
    const newSrc = `./img/off_faq_${img.src.includes('faq_1') ? '1' : img.src.includes('faq_2') ? '2' : img.src.includes('faq_3') ? '3' : '4'}.png` ;
    img.src = newSrc;
  }
  


  Array.from(faqs).forEach(faq => {
    faq.addEventListener('touchstart', onMouseEnterFaqMobile);
    faq.addEventListener('touchend', onMouseLeaveFaqMobile);
  });

}



Array.from(document.querySelectorAll('a[href="#faq"]')).forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      lastMouseEnter = 'faq';

    //   const top = features.getBoundingClientRect().height*3 + 140;
      const top = features.getBoundingClientRect().height*4;
  
      window.scrollTo({top: top, behavior: 'smooth'});
  
      overlayMobileMenu.style.display = "none";
      menu.style.display = "none";
      Array.from(burgerButton.getElementsByTagName("div")).forEach((d) => {
        d.classList.remove("burgerClicked");
      });
    });
  });