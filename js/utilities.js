const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];
  
//   if(toMatch.some(toMatchItem => navigator.userAgent.match(toMatchItem))){
//     console.log(navigator.userAgent);
//   }

function isMobile(){
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}