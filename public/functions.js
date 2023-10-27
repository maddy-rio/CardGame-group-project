// const hand = document.querySelector('.hand')
// const cards = hand.querySelectorAll('.card')
// const refresh = document.querySelector('#refresh')

// cards.forEach((card) => card.addEventListener('click', makeCardsDisappear))

// refresh.addEventListener('click', refreshCards)

// function makeCardsDisappear() {
//   cards.forEach((card) => {
//     // understand this code below VVVVV
//     card.addEventListener('click', function () {
//       console.log(this.id)
//       cards.forEach((otherCard) => {
//         if (otherCard !== this) {
//           otherCard.style.display = 'none'
//         } else {
//           this.style.transform = 'translateY(-300px)'
//           this.style.position = 'fixed'
//           this.style.left = '50%'
//           this.style.transform = 'translate(-50%, -50%'
//         }
//       })
//     })
//   })
//   // setTimeout(() => {
//   //   location.reload()
//   // }, 5000)
// }

// function refreshCards() {
//   location.reload()
// }

const hand = document.querySelector('.hand')
const cards = hand.querySelectorAll('.card')
const refresh = document.querySelector('#refresh')

cards.forEach((card) => card.addEventListener('click', makeCardsDisappear))

refresh.addEventListener('click', refreshCards)

function makeCardsDisappear() {
  console.log(this.id)
  cards.forEach((otherCard) => {
    if (otherCard !== this) {
      otherCard.style.display = 'none'
    } else {
      this.style.transform = 'translateY(-300px)'
      this.style.position = 'fixed'
      this.style.left = '50%'
      this.style.transform = 'translate(-50%, -50%)' // fixed the missing parenthesis
    }
  })
  setTimeout(() => {
    location.reload()
  }, 4000)
}

function refreshCards() {
  location.reload()
}
