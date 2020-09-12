import images from "./gallery-items.js";

const ulGallery = document.querySelector("ul.js-gallery");
const lightbox = document.querySelector(".lightbox");
const btn = document.querySelector('[data-action="close-lightbox"]');

images.forEach((item) => {
  let img = document.createElement("img");
  img.classList.add("gallery__image");
  img.setAttribute("src", item.preview);
  img.setAttribute("data-source", item.original);
  img.setAttribute("alt", item.description);

  let a = document.createElement("a");
  a.classList.add("gallery__link");
  a.setAttribute("href", item.original);
  a.append(img);

  let li = document.createElement("li");
  li.classList.add("gallery__item");
  li.append(a);

  ulGallery.append(li);
});

function handleUlClick(event) {
  console.log(event.target.dataset.source);
  event.preventDefault();

  const lightboxImage = document.querySelector(".lightbox__image");
  if (event.target.nodeName === "IMG") {
    lightbox.classList.add("is-open");
    lightboxImage.src = event.target.src;
    lightboxImage.alt = event.target.alt;
  }
}

function onCloseHandler(event) {
  if (event.target.nodeName === "IMG" || event.target.nodeName === "BUTTON");
  {
    lightbox.classList.remove("is-open");
  }
}

ulGallery.addEventListener("click", handleUlClick);
btn.addEventListener("click", onCloseHandler);
