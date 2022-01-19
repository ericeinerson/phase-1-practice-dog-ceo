// console.log('%c HI', 'color: firebrick')
//1. Fetch the dog images using a fetch request
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
  .then((response) => response.json())
  .then(console.log)
  .then((images) => {
    images.forEach((image) => {
      console.log
      const dogImages = document.createElement("img");
      console.log(dogImages);
      // dogImages.src = images.message;
    });
  });
