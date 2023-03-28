import './index.css'
import './javascript/random-link.js'

// console.log('Test')

//
//
//форма на стартовом экране
// import './index.css'
// let form = document.getElementsByClassName(
//   'O_PostInputField A_PostInputText my-form'
// )
// let A_ButtonPost = form.getElementsByClassName('A_ButtonPost')
// form.addEventListener('submit', function (event) {
//   event.preventDefault()
//   console.log('Нажмите Подписаться')
//   async function handleSubmit(event) {
//     event.preventDefault()
//     let status = document.getElementById('my-form-status')
//     let data = new FormData(event.target)
//     fetch(event.target.action, {
//       method: form.method,
//       body: data,
//       headers: {
//         Accept: 'application/json'
//       }
//     })
//       .then((response) => {
//         if (response.ok) {
//           status.innerHTML = 'Спасибо за подписку!'
//           form.reset()
//         } else {
//           response.json().then((data) => {
//             if (Object.hasOwn(data, 'errors')) {
//               status.innerHTML = data['errors']
//                 .map((error) => error['message'])
//                 .join(', ')
//             } else {
//               status.innerHTML = 'Ууупс! Что-то пошло не так'
//             }
//           })
//         }
//       })
//       .catch((error) => {
//         status.innerHTML = 'Ууупс! Что-то пошло не так'
//       })
//   }
//   form.addEventListener('submit', handleSubmit)
// })

const selectOptions = [
  {
    text: 'Уэленская резьба по кости',
    link: './crafts/uelen-bone-carving.html'
  },
  {
    text: 'Ну допустим карта',
    link: './map.html'
  },
  {
    text: 'Ну допустим библиотека',
    link: './crafts.html'
  },
  {
    text: 'ОПЯТЬ Уэленская резьба по кости',
    link: './crafts/uelen-bone-carving.html'
  },
  {
    text: 'ЕЩЁ РАЗ Уэленская резьба по кости',
    link: './crafts/uelen-bone-carving.html'
  }
]

function initSelect() {
  const selectElement = document.querySelector('.O_Select')
  const optionListElement = document.querySelector('.C_SelectOptionList')
  const selectInput = document.querySelector('.A_SelectInput')
  const dropdownButton = document.querySelector('.Q_Icon', '.-Filter')

  selectOptions.forEach((option) => {
    let { text, link } = option
    const listItem = document.createElement('a')
    listItem.classList.add('A_SelectOptionListItem')
    listItem.innerText = text
    listItem.href = link

    optionListElement.appendChild(listItem)
  })

  dropdownButton.addEventListener('click', () => {
    selectElement.classList.toggle('focus')
  })

  selectInput.addEventListener('focus', () => {
    selectElement.classList.add('focus')
  })

  document.body.addEventListener('click', (e) => {
    if (
      !e.target.classList.contains('A_SelectInput') &&
      !e.target.classList.contains('Q_Icon')
    ) {
      selectElement.classList.remove('focus')
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initSelect()
})
