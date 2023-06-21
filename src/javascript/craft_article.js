import '../index.css'

console.log('Test craft and article')

//
//

function initGoBack() {
  const backButton = document.querySelector('.A_BackButton')
  backButton.addEventListener('click', () => {
    window.history.back()
  })
}

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
let offsetTextRails = 0

function initSlider() {
  const imageRails = document.querySelector('.M_CraftSliderImage')
  const sliderButtonLeft = document.querySelector('.Q_Icon.-ArrowLeft')
  const sliderButtonRight = document.querySelector('.Q_Icon.-ArrowRight')
  const itemCounter = document.getElementsByClassName('Q_CraftBodyImage')

  sliderButtonRight.addEventListener('click', () => {
    offsetImageRails += 900
    offsetTextRails += 111
    if (
      offsetImageRails >
      880 * (itemCounter.length - 1) + 20 * (itemCounter.length - 1)
    ) {
      offsetImageRails = 0
      offsetTextRails = 0
    }
    imageRails.style.left = -offsetImageRails + 'px'
    textRails.style.top = -offsetTextRails + 'px'
  })

  sliderButtonLeft.addEventListener('click', () => {
    offsetImageRails -= 900
    offsetTextRails -= 111
    if (offsetImageRails < 0) {
      offsetImageRails =
        880 * (itemCounter.length - 1) + 20 * (itemCounter.length - 1)
      offsetTextRails =
        81 * (itemCounter.length - 1) + 30 * (itemCounter.length - 1)
    }
    imageRails.style.left = -offsetImageRails + 'px'
    textRails.style.top = -offsetTextRails + 'px'
  })
}

//
//
//
//

document.addEventListener('DOMContentLoaded', () => {
  initGoBack()
  initSlider()
})
//
//