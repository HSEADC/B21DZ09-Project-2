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

document.addEventListener('DOMContentLoaded', () => {
  initGoBack()
})

//
//
//
// Слайдер с модальным окном

//
//
//
// Слайдер со сменой текстового блока
