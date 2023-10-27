const hand = document.querySelector('.hand')
const cards = hand.querySelectorAll('.card')

cards.forEach(card => card.addEventListener('click', makeCardsDisappear));

function makeCardsDisappear() {
  cards.forEach(card => {
  // understand this code below VVVVV
    card.addEventListener('click', function() {
      console.log(this.id);
      cards.forEach(otherCard => {
        if (otherCard !== this) {
          otherCard.style.display = 'none';
        } else {
          this.style.transform = 'translateY(-300px)';
        }
      });
    });
  });
  setTimeout(() => {
    location.reload()
  }, 8000);
}