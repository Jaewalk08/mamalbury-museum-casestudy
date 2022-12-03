const cursorTag = document.querySelector('.circle-explore');
const circle = cursorTag.querySelector('.icon-explore')

const positionElement = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
  cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', positionElement)