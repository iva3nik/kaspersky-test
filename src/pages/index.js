import "./index.css";

const dropdown = [
  { label: "1  Device, 1 Year", integer: 27, float: ".99", id: "0" },
  { label: "1 Device, 2 Years", integer: 43, float: ".99", id: "1" },
  { label: "3 Devices, 1 Year", integer: 35, float: ".99", id: "2" },
  { label: "3 Devices, 2 Years", integer: 63, float: ".99", id: "3" },
  { label: "5 Devices, 1 Year", integer: 43, float: ".99", id: "4" },
  { label: "5 Devices, 2 Years", integer: 71, float: ".99", id: "5" },
];

const defaultItem = 2;
const offer = document.querySelector(".offer");
const buttonChoice = offer.querySelector(".offer__button-icon");
const header = document.querySelector(".header");

let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      header.style.display = "none";
    } else {
      header.style.display = "flex";
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);

const handlePrices = (itemId) => {
  buttonChoice.querySelector(".offer__button-text").textContent =
    dropdown[itemId].label;

  offer.querySelector(".offer__price").querySelector("p").textContent =
    dropdown[itemId].integer;

  offer.querySelector(".offer__price").querySelector("span").textContent =
    dropdown[itemId].float;

  offer.querySelector(".offer__old-price").querySelector("p").textContent =
    dropdown[itemId].integer - 1;

  offer.querySelector(".offer__old-price").querySelector("span").textContent =
    dropdown[itemId].float;
};

handlePrices(defaultItem);

const openDropdown = () => {
  buttonChoice.classList.add("open");
};

const closeDropdown = () => {
  buttonChoice.classList.remove("open");
};

const selectPoint = (id) => {
  const item = dropdown.find((i) => i.id === id).id;
  handlePrices(item);
  closeDropdown();
};

buttonChoice.addEventListener("click", (event) => {
  buttonChoice.classList.contains("open") ? closeDropdown() : openDropdown();
  if (event.target.tagName.toLowerCase() === "li") {
    selectPoint(event.target.dataset.id);
  }
});

const itemsHTML = dropdown
  .map((i) => {
    return `<li data-id="${i.id}" >${i.label} £${i.integer}${i.float}</li>`;
  })
  .join(" ");

buttonChoice
  .querySelector(".offer__menu")
  .insertAdjacentHTML("afterbegin", itemsHTML);
