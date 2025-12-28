const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const prevBtn = document.getElementById("lightbox-prev");
const nextBtn = document.getElementById("lightbox-next");

const IMAGE_COUNT = 33; // ← počet fotek
let currentIndex = 1;

// vytvoření náhledů
for (let i = 1; i <= IMAGE_COUNT; i++) {
  const img = document.createElement("img");
  img.src = `./images/images-mini/${i}.jpg`;
  img.dataset.index = i;

  img.addEventListener("click", () => openLightbox(i));
  gallery.appendChild(img);
}

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = `./images/images-galerie/${index}.jpg`;
  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  lightbox.classList.add("hidden");
}

prevBtn.onclick = () => {
  currentIndex = currentIndex > 1 ? currentIndex - 1 : IMAGE_COUNT;
  openLightbox(currentIndex);
};

nextBtn.onclick = () => {
  currentIndex = currentIndex < IMAGE_COUNT ? currentIndex + 1 : 1;
  openLightbox(currentIndex);
};

lightbox.onclick = e => {
  if (e.target === lightbox) closeLightbox();
};
