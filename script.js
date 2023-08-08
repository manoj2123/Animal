function getRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      document.getElementById('dog-image').src = data.message;
    })



    .catch(error => console.error(error));


  }