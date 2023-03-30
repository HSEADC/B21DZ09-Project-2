import '../index.css'

console.log('Test crafts and articles')

const tagsShower = document.querySelector('.A_TagOptionsTextShow')
const tagsHidder = document.querySelector('.A_TagOptionsTextHide')
const tagsShown = document.querySelector('.M_TagAllButtonsFull')
const tagsHidden = document.querySelector('.C_CraftsTagButtonsShort')

const filterChip = document.getElementsByClassName('A_TagButton')
const container = document.querySelector('.S_Content')
let allCards = document.querySelector('.M_Card')

// function initFilter() {
//   tagsShower.addEventListener('click', () => {
//     tagsShown.classList.remove('-hidden')
//     tagsHidden.classList.add('-hidden')
//   })
//
//   tagsHidder.addEventListener('click', () => {
//     tagsShown.classList.add('-hidden')
//     tagsHidden.classList.remove('-hidden')
//   })
//
//   for (let i = 0; i < filterChip.length; i++) {
//     let selectedChip = filterChip[i]
//     let selectedTag = selectedChip.dataset.tags
//
//     selectedChip.addEventListener('click', () => {
//       selectedChip.classList.toggle('active')
//       if (selectedChip.classList.contains('active')) {
//         filterCardsByTags(selectedTag)
//       }
//     })
//
//     console.log(selectedTag)
//   }
//
//   function filterCardsByTags(tags) {
//     for (let i = 0; i < allCards.length; i++) {
//       let card = allCards[i]
//       let cardTags = card.dataset.tags.split(',')
//
//       if (cardTags.includes(tags)) {
//         container.appendChild(card)
//       }
//     }
//   }
// }

document.addEventListener('DOMContentLoaded', () => {
  // initFilter()
})
