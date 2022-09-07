const teamGifImg = document.getElementById("team").querySelector("img");
const flexTeam = document.getElementById("flexTeam");
const flexTeamResponsive = document.getElementById("flexTeamResponsive");

const people = {
  bojan: {
    name: "Bojan Jovin",
    role: "CEO & Co-founder",
    description:
      "Experienced project manager. Led multiple projects across Europe, Asia and South America. Actively involved in blockchanin landscape since 2012.",
    twitter: "https://twitter.com/jedibojan",
    linkedIn: "https://www.linkedin.com/in/bojan-jovin-8b57b822",
  },
  kole: {
    name: "Nebojsa Konstantinovic",
    role: "CTO & Co-founder",
    description: "Experienced smart contract developer (Solidity, Truffle) on Ethereum blockchain. Background in web development using Javascript language and Javascript frameworks (Nodejs, Npm, React, Redux, MaterialUI, etc.). Involved in crypto since 2011.",
    twitter: "https://twitter.com/nebojsakonsta",
    linkedIn: "https://www.linkedin.com/in/nebojsa-konstantinovic-542107a",
  },
  dunja: {
    name: "Dunja Torbic",
    role: "DevOps/QA",
    description:
      "Software engineer with 7 years of experience in development. Blockchain enthusiast. Started career in Schneider Electric DMS as a software developer in DevOps department. Used to create tools, services, portals for quality ensurance of critial software systems. Got curious about blockchain techologies and their potenial and decided to follow my interest.",
    twitter: "",
    linkedIn: "https://www.linkedin.com/in/dunja-torbi%C4%87-b8a29a1a0",
  },
  eric: {
    name: "Eric Dinowitz",
    role: "Advisor",
    description:
      "25+ years as a commodity options market maker Venture investor in crypto startups: BlockFi , STORJ and FOAM",
    twitter: "",
    linkedIn: "https://www.linkedin.com/in/ericdinowitz",
  },
  slaven: {
    name: "Slaven Garic",
    role: "UI Developer",
    description:
      "Experienced in Javascript technologies like React for frontend and Node.js for backend development. Enthusiastic and highly motivated to learn and acquire new skills. Interested in algorithms, web development and software design techniques.",
    twitter: "",
    linkedIn: "https://linkedin.com/in/slaven-garic-65831b199",
  },
  mihajlo: {
    name: "Mihajlo Strajin",
    role: "UI Developer",
    description:
      "Junior software developer focused on frontend technologies. Highly motivated to learn new skills especially about blockchain.",
    twitter: "",
    linkedIn: "https://www.linkedin.com/in/mihajlo-strajin-803439201",
  },
  ron: {
    name: "Ron Bernstein",
    role: "Advisor",
    description:
      "25+ years experience trading options on commodity futures in New York and London. Advisor to Augur in 2015, founder of Paradex.io (acquired by Coinbase) and Periscope Trading",
    twitter: "",
    linkedIn: "https://www.linkedin.com/in/ronbernstein",
  },
  aleksandar: {
    name: "Aleksandar Tanackov",
    role: "Designer",
    description: "",
    twitter: "",
    linkedIn: "",
  },
  david: {
    name: "David Wender",
    role: "Advisor",
    description: "",
    twitter: "",
    linkedIn: "https://www.linkedin.com/in/david-wender",
  },
  jp: {
    name: "JP",
    role: "Advisor",
    description: "",
    twitter: "",
    linkedIn: "https://www.linkedin.com/in/jpcreedon",
  },
};

Array.from(document.querySelectorAll('a[href="#team"]')).forEach(link => {
  link.addEventListener("click", (event) => {
    lastMouseEnter = 'team';
    event.preventDefault();

    const top = products.getBoundingClientRect().height * 3;
    window.scrollTo({ top: top, behavior: "smooth" });


    // if(!sessionStorage.getItem('gifIsDone')){
    if(!gifIsDone){
      if (isMobile()) {
        teamGifImg.src = "./gifs/team-gi-tablet-portrait-and-mobilef.gif";
  
        setTimeout(() => {
          teamGifImg.style.display = "none";
          flexTeamResponsive.style.display = "flex";
        }, 1250);
      } else {
        teamGifImg.src = "./gifs/team-gif.gif";
        setTimeout(() => {
          teamGifImg.style.display = "none";
          flexTeam.style.display = "flex";
        }, 1250);
      }
      gifIsDone = true;
    }


    overlayMobileMenu.style.display = "none";
    menu.style.display = "none";
    Array.from(burgerButton.getElementsByTagName("div")).forEach(d => {
      d.classList.remove("burgerClicked");
    });
  });
});


Array.from(document.querySelectorAll(".teamGrid img")).forEach(img => {
  img.addEventListener('click', event => {
    const person = event.target.src.split('/').reverse()[0].split('.')[0]
    const personOverlay = document.getElementById(`${person}Person`);
    personOverlay.classList.add('visible');
    personOverlay.addEventListener("click", event => {
      personOverlay.classList.remove('visible');
    });
      
    Array.from(personOverlay.querySelectorAll('.nameAndLinksToSocialMedia > a > img')).forEach( el => {
      el.addEventListener('click', event => {
        event.stopPropagation();
      })
    });
  });
});

// Array.from(document.querySelectorAll(".teamGrid img")).forEach(img => {
//   img.addEventListener("click", (event) => {
//     const personInformationsOverlay = document.createElement("div");
//     personInformationsOverlay.classList.add("personInformationsOverlay");
//     personInformationsOverlay.addEventListener("click", (event) => {
//       personInformationsOverlay.remove();
//     });

//     //picture
//     const person = event.target.src.split("/").pop().split(".")[0];
//     const personInformationsContainer = document.createElement("div");
//     personInformationsContainer.classList.add("personInformationsContainer");
//     const personsPicturePath = `./img/${person}_red.png`;
//     const personImg = document.createElement("img");
//     personImg.src = personsPicturePath;
//     personInformationsContainer.appendChild(personImg);

//     //about section
//     const aboutPerson = document.createElement("div");
//     aboutPerson.classList.add("aboutPerson");

//     const nameAndLinksToSocialMedia = document.createElement("div");
//     const name = document.createElement("span");
//     name.textContent = people[person].name;
//     nameAndLinksToSocialMedia.appendChild(name);

//     if(people[person].linkedIn){
//       const linkedinIcon = document.createElement("img");
//       linkedinIcon.src = `./img/linkedin.png`;
//       linkedinIcon.addEventListener('click', e => {
//         e.stopPropagation();
//         window.open(people[person].linkedIn,'_blank')
//       });
//       nameAndLinksToSocialMedia.appendChild(linkedinIcon);
//     }

//     if(people[person].twitter){
//       const twitterIcon = document.createElement("img");
//       twitterIcon.src = `./img/twitter.png`;
//       twitterIcon.addEventListener('click', e => {
//         e.stopPropagation();
//         window.open(people[person].twitter,'_blank')
//       })
//       nameAndLinksToSocialMedia.appendChild(twitterIcon);
//     }



//     nameAndLinksToSocialMedia.classList.add("nameAndLinksToSocialMedia");
//     aboutPerson.appendChild(nameAndLinksToSocialMedia);

//     const role = document.createElement("span");
//     role.textContent = people[person].role;
//     aboutPerson.appendChild(role);

//     const textAbout = document.createElement("p");
//     textAbout.textContent = people[person].description;
//     textAbout.classList.add("textAbout");
//     aboutPerson.appendChild(textAbout);

//     const backButton = document.createElement("button");
//     backButton.innerText = "BACK";
//     aboutPerson.appendChild(backButton);

//     personInformationsContainer.appendChild(aboutPerson);
//     personInformationsOverlay.appendChild(personInformationsContainer);
//     document.body.appendChild(personInformationsOverlay);
//   });
// });



Array.from(document.querySelectorAll(".teamGridResponsive img")).forEach(img => {
  img.addEventListener('click', event => {
    const person = event.target.src.split('/').reverse()[0].split('.')[0].split('_')[0];
    const personOverlay = document.getElementById(`${person}Person`);
    personOverlay.classList.add('visible');
    personOverlay.addEventListener("click", event => {
      personOverlay.classList.remove('visible');
    });
      
    Array.from(personOverlay.querySelectorAll('.nameAndLinksToSocialMedia > a > img')).forEach( el => {
      el.addEventListener('click', event => {
        event.stopPropagation();
      })
    });
  });
});



// Array.from(document.querySelectorAll(".teamGridResponsive img")).forEach(img => {
//   img.addEventListener("click", event => {
//     const personInformationsOverlayResponsive = document.createElement("div");
//     personInformationsOverlayResponsive.classList.add("personInformationsOverlayResponsive");
//     personInformationsOverlayResponsive.addEventListener("click", event => {
//       personInformationsOverlayResponsive.remove();
//     });

//     const logo = document.createElement('img');
//     logo.src = './img/manji.png';
//     logo.classList.add("logo");

//     const person = event.target.src.split("/").pop().split(".")[0].split('_')[0];
//     const personInformationsContainerResponsive = document.createElement("div");
//     personInformationsContainerResponsive.classList.add("personInformationsContainerResponsive");
//     // const personsPicturePath = `./../img/${person}_mob.png`;
//     const personsPicturePath = `./img/${person}_red_mob.png`;
//     const personImg = document.createElement("img");
//     personImg.src = personsPicturePath;

//     const name = document.createElement("span");
//     name.textContent = people[person].name;

//     const nameAndLinksToSocialMedia = document.createElement("div");

//     nameAndLinksToSocialMedia.appendChild(name);

//     if(people[person].linkedIn){
//       const linkedinIcon = document.createElement("img");
//       linkedinIcon.src = `./img/linkedin.png`;
//       linkedinIcon.addEventListener('click', e => {
//         e.stopPropagation();
//         window.open(people[person].linkedIn,'_blank')
//       });
//       nameAndLinksToSocialMedia.appendChild(linkedinIcon);
//     }

//     if(people[person].twitter){
//       const twitterIcon = document.createElement("img");
//       twitterIcon.src = `./img/twitter.png`;
//       twitterIcon.addEventListener('click', e => {
//         e.stopPropagation();
//         window.open(people[person].twitter,'_blank')
//       })
//       nameAndLinksToSocialMedia.appendChild(twitterIcon);
//     }

//     nameAndLinksToSocialMedia.classList.add("nameAndLinksToSocialMedia");

//     const role = document.createElement("span");
//     role.textContent = people[person].role;
    

//     const textAbout = document.createElement("p");
//     textAbout.textContent = people[person].description;
//     textAbout.classList.add("textAbout");

//     const backButton = document.createElement("button");
//     backButton.innerText = "BACK";

//     personInformationsContainerResponsive.appendChild(logo);
//     personInformationsContainerResponsive.appendChild(personImg);
//     personInformationsContainerResponsive.appendChild(name);
//     personInformationsContainerResponsive.appendChild(role);
//     personInformationsContainerResponsive.appendChild(nameAndLinksToSocialMedia);
//     personInformationsContainerResponsive.appendChild(textAbout);
//     personInformationsContainerResponsive.appendChild(backButton);
//     personInformationsOverlayResponsive.appendChild(personInformationsContainerResponsive);
//     document.body.appendChild(personInformationsOverlayResponsive);
//   });
// });
