const images = ["background1.jpg", "background2.jpg", "background3.jpg", "background4.jpg", "background5.jpg"];
const todaysImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");
bgImage.src = `img/${todaysImage}`;
bgImage.classList.add("bgImage");
document.body.appendChild(bgImage);

//document.body.style.backgroundImage = `url(img/${todaysImage})`;

