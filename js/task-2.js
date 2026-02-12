const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery");
//!option-1=====================================================================
// const galleryItems = images
//   .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
//   .join("");
// gallery.insertAdjacentHTML("beforeend", galleryItems);
//!option-2=====================================================================
// function itemTemplate(item) {
//   return `<li><img src="${item.url}" alt="${item.alt}"></li>
//   `;
// }

// function itemsTemplate(items) {
//   return items.map(itemTemplate).join("");
// }
// gallery.insertAdjacentHTML("beforeend", itemsTemplate(images));
//!option-3=====================================================================

function createGalleryItem(item) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = item.url;
  img.alt = item.alt;
  li.appendChild(img);
  return li;
}

function populateGallery(items) {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const li = createGalleryItem(item);
    fragment.appendChild(li);
  });
  gallery.appendChild(fragment);
}
populateGallery(images);
