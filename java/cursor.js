const cursorTag = document.querySelector('div.cursors')
const circles = cursorTag.querySelector('circle')
const circleMessage = cursorTag.querySelector("circle explore")
const images = document.querySelectorAll("img")

let aimX = 0
let aimY = 0

circles.forEach((ball, index) =>{
  let currentX = 0
  let currentY = 0

  let speed = 0.3 - index * 0.015

  const animate = function () {
    currentX += (aimX - currentX) * speed
    currentY += (aimX - currentX) * speed

    ball.syle.left = currentX + "px"
    ball.style.top = currentY + "px"

    requestAnimationFrame(animate)
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





