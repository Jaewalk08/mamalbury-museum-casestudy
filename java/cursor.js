const cursorTag = document.querySelector('div.cursors')
const circle = cursorTag.querySelector('div.circle')
const circleMessage = cursorTag.querySelector("div.circle span.explore")
const images = document.querySelectorAll("img[data-hover")

let aimX = 0
let aimY = 0

circles.forEach((ball, index) =>{
  let currentX = 0
  let currentY = 0

  let speed = 0.3

  const animate = function () {
    currentX += (aimX - currentX) * speed
    currentY += (aimX - currentX) * speed

    ball.style.left = currentX + "px"
    ball.style.top = currentY + "px"

    
  }

  animate()
})

document.addEventListener("mousemove", function (event) {
  aimX = event.pageX
  aimY = event.pageY
})

images.forEach(image => {
  image.addEventListener("mouseover", function () {
    circleMessage.classList.add("visible")
    circleMessage.innerHTML = image.getAttribute("data-hover")
  })
  image.addEventListener("mouseout", function () {
    circleMessage.classList.remove("visible")
  })
})





