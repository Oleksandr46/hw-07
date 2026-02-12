const list = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${list.length}`);
list.forEach((item) => {
  const titleText = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${titleText}`);
  console.log(`Elements: ${elementsCount}`);
});
