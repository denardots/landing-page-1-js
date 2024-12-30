// Función que obtiene la posición del scroll y cambia la posición de las imágenes
const moveImages = () => {
  // La propiedad scrollY nos permite obtener la posición actual del scroll
  let position = window.scrollY;
  iconHeart.style.bottom = position * 0.1 + "px";
  iconFire.style.top = position * 0.1 + "px";
};

const headerNav = document.getElementById("headerNav");
const headerIcon = document.getElementById("headerIcon");
const iconHeart = document.getElementById("iconHeart");
const iconFire = document.getElementById("iconFire");

// Listener que muestra y oculta el menú responsive
headerIcon.addEventListener("click", () => headerNav.classList.toggle("view-menu"));

// Lisntener que maneja el scroll del usuario y llama a una función que moverá las imágenes
window.addEventListener("scroll", () => moveImages());