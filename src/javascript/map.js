import '../index.css'

// console.log('Test map')

function initModal() {
  const buttonMapPoint = document.querySelector('.-MapPagePoint')
  const closeButton = document.querySelector('.-Cross')
  const backgroundBlur = document.querySelector('.Q_BackgroundBlur')
  const mapModalWindow = document.querySelector('.S_Modal')

  buttonMapPoint.addEventListener('click', () => {
    mapModalWindow.classList.add('visible')
  })

  closeButton.addEventListener('click', () => {
    mapModalWindow.classList.remove('visible')
  })

  backgroundBlur.addEventListener('click', () => {
    mapModalWindow.classList.remove('visible')
  })
}

document.addEventListener('DOMContentLoaded', initModal())
