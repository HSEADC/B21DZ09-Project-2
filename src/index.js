import './index.css'

// console.log('Test')

//
//
//тэги фильтрации на страницах: Библиотека, Статьи

//
//
//форма на стартовом экране
import './index.css'
let form = document.getElementsByClassName(
  '.O_PostInputField .A_PostInputText .my-form'
)
let A_ButtonPost = form.getElementsByClassName('.A_ButtonPost')
form.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log('Нажмите Подписаться')
  async function handleSubmit(event) {
    event.preventDefault()
    let status = document.getElementById('my-form-status')
    let data = new FormData(event.target)
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = 'Спасибо за подписку!'
          form.reset()
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data['errors']
                .map((error) => error['message'])
                .join(', ')
            } else {
              status.innerHTML = 'Ууупс! Что-то пошло не так'
            }
          })
        }
      })
      .catch((error) => {
        status.innerHTML = 'Ууупс! Что-то пошло не так'
      })
  }
  form.addEventListener('submit', handleSubmit)
})

//
//
//открыть случайную статью — в разработке
const pagesGroup = []

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}
