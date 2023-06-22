import '../index.css'

console.log('Test craft and article')

//
//
//
// function initGoBack() {
//   const backButton = document.querySelector('.A_BackButton')
//   backButton.addEventListener('click', () => {
//     window.history.back()
//   })
// }

//
//
//
// Слайдер с модальным окном

//
//
//
// Слайдер со сменой текстового блока

let currentSlide = 0
let offsetImageRails = 0

function initSlider() {
  const imageRails = document.querySelector('.W_SliderRails')
  const sliderButtonLeft = document.querySelector('.Q_Icon.ArrowLeft')
  const sliderButtonRight = document.querySelector('.Q_Icon.ArrowRight')
  const itemCounter = document.getElementsByClassName('Q_CraftBodyImageGal')

  sliderButtonRight.addEventListener('click', () => {
    offsetImageRails += 900
    if (
      offsetImageRails >
      880 * (itemCounter.length - 1) + 20 * (itemCounter.length - 1)
    ) {
      offsetImageRails = 0
    }
    imageRails.style.left = -offsetImageRails + 'px'
  })

  sliderButtonLeft.addEventListener('click', () => {
    offsetImageRails -= 900
    if (offsetImageRails < 0) {
      offsetImageRails =
        880 * (itemCounter.length - 1) + 20 * (itemCounter.length - 1)
    }
    imageRails.style.left = -offsetImageRails + 'px'
  })
}

//
//
//
//

document.addEventListener('DOMContentLoaded', () => {
  // initGoBack()
  initSlider()
})
