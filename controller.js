const input = document.querySelector('.inputValue');
const button = document.querySelector('.submit');
const bugValue = document.querySelector('.bug-name');
const month = document.querySelector('.month-available');
const time = document.querySelector('.time-available');
const locationType = document.querySelector('.location');
const rarity = document.querySelector('.rarity');
const price = document.querySelector('.price');
const museumPhrase = document.querySelector('.museum-phrase');

button.addEventListener('click', function(){
  fetch('https://acnhapi.com/v1/bugs/'+input.value)
    .then(response => response.json())
    .then(data => {
      let nameValue = data['name']['name-USen'];
      let monthAvailability = data['availability']['month-northern'];
      let timeAvailability = data['availability']['time'];
      let locationValue = data['availability']['location'];
      let rarityValue = data['availability']['rarity'];
      let priceValue = data['price'];
      let blathersPhrase = data['museum-phrase'];

      bugValue.innerHTML = "Name: " + nameValue;
      month.innerHTML = "Month Available: " + monthAvailability;
      time.innerHTML = timeAvailability;
      locationType.innerHTML = locationValue;
      rarity.innerHTML = rarityValue;
      price.innerHTML = priceValue;
      museumPhrase.innerHTML = blathersPhrase;
    })

    .catch(err => alert("Sorry! We don't know that bug."))
})

