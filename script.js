const images = [
  { src: 'images/image1.jpg', text: 'This is the first sample image and text.' },
  { src: 'images/image2.jpg', text: 'Here is the second piece of content. 多くの人々が「正しい宗教」とは何かを探求しています。' },
  { src: 'images/image3.jpg', text: 'A final example for the gallery.' },
];

let currentImageIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const galleryText = document.getElementById('gallery-text');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function showImage(index) {
  galleryImage.src = images[index].src;
  galleryText.textContent = images[index].text;
  currentImageIndex = index;
}

prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
});

// Show the first image initially
showImage(currentImageIndex);
