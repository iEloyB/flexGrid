const imagesCarrusel = document.querySelector(".image-carrusel");
const contenidos = [
  {
    image: "./images/1.jpg",
    title: "Título 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet purus nisl, in malesuada sapien interdum nec. Donec metus magna, aliquet laoreet neque at, rhoncus aliquet lorem. Proin a ligula nunc. Donec velit ligula, commodo ac enim nec, rutrum blandit ipsum. Vivamus at faucibus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer bibendum a ex vel efficitur. Integer at tortor lobortis, consequat dui quis, mollis arcu. Vestibulum sed massa non nisl vulputate interdum sed sit amet massa. Donec accumsan ipsum non mauris laoreet pretium. Ut rutrum ex ac odio consequat consectetur.",
  },
  {
    image: "./images/2.jpg",
    title: "Título 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet purus nisl, in malesuada sapien interdum nec. Donec metus magna, aliquet laoreet neque at, rhoncus aliquet lorem. Proin a ligula nunc. Donec velit ligula, commodo ac enim nec, rutrum blandit ipsum. Vivamus at faucibus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer bibendum a ex vel efficitur. Integer at tortor lobortis, consequat dui quis, mollis arcu. Vestibulum sed massa non nisl vulputate interdum sed sit amet massa. Donec accumsan ipsum non mauris laoreet pretium. Ut rutrum ex ac odio consequat consectetur.",
  },
  {
    image: "./images/3.jpg",
    title: "Título 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet purus nisl, in malesuada sapien interdum nec. Donec metus magna, aliquet laoreet neque at, rhoncus aliquet lorem. Proin a ligula nunc. Donec velit ligula, commodo ac enim nec, rutrum blandit ipsum. Vivamus at faucibus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer bibendum a ex vel efficitur. Integer at tortor lobortis, consequat dui quis, mollis arcu. Vestibulum sed massa non nisl vulputate interdum sed sit amet massa. Donec accumsan ipsum non mauris laoreet pretium. Ut rutrum ex ac odio consequat consectetur.",
  },
  {
    image: "./images/4.jpg",
    title: "Título 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet purus nisl, in malesuada sapien interdum nec. Donec metus magna, aliquet laoreet neque at, rhoncus aliquet lorem. Proin a ligula nunc. Donec velit ligula, commodo ac enim nec, rutrum blandit ipsum. Vivamus at faucibus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer bibendum a ex vel efficitur. Integer at tortor lobortis, consequat dui quis, mollis arcu. Vestibulum sed massa non nisl vulputate interdum sed sit amet massa. Donec accumsan ipsum non mauris laoreet pretium. Ut rutrum ex ac odio consequat consectetur.",
  },
  {
    image: "./images/5.jpg",
    title: "Título 5",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet purus nisl, in malesuada sapien interdum nec. Donec metus magna, aliquet laoreet neque at, rhoncus aliquet lorem. Proin a ligula nunc. Donec velit ligula, commodo ac enim nec, rutrum blandit ipsum. Vivamus at faucibus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer bibendum a ex vel efficitur. Integer at tortor lobortis, consequat dui quis, mollis arcu. Vestibulum sed massa non nisl vulputate interdum sed sit amet massa. Donec accumsan ipsum non mauris laoreet pretium. Ut rutrum ex ac odio consequat consectetur.",
  },
  {
    image: "./images/6.jpg",
    title: "Título 6",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet purus nisl, in malesuada sapien interdum nec. Donec metus magna, aliquet laoreet neque at, rhoncus aliquet lorem. Proin a ligula nunc. Donec velit ligula, commodo ac enim nec, rutrum blandit ipsum. Vivamus at faucibus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer bibendum a ex vel efficitur. Integer at tortor lobortis, consequat dui quis, mollis arcu. Vestibulum sed massa non nisl vulputate interdum sed sit amet massa. Donec accumsan ipsum non mauris laoreet pretium. Ut rutrum ex ac odio consequat consectetur.",
  },
  {
    image: "./images/7.jpg",
    title: "Título 7",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet purus nisl, in malesuada sapien interdum nec. Donec metus magna, aliquet laoreet neque at, rhoncus aliquet lorem. Proin a ligula nunc. Donec velit ligula, commodo ac enim nec, rutrum blandit ipsum. Vivamus at faucibus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer bibendum a ex vel efficitur. Integer at tortor lobortis, consequat dui quis, mollis arcu. Vestibulum sed massa non nisl vulputate interdum sed sit amet massa. Donec accumsan ipsum non mauris laoreet pretium. Ut rutrum ex ac odio consequat consectetur.",
  },
  {
    image: "./images/8.jpg",
    title: "Título 8",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet purus nisl, in malesuada sapien interdum nec. Donec metus magna, aliquet laoreet neque at, rhoncus aliquet lorem. Proin a ligula nunc. Donec velit ligula, commodo ac enim nec, rutrum blandit ipsum. Vivamus at faucibus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer bibendum a ex vel efficitur. Integer at tortor lobortis, consequat dui quis, mollis arcu. Vestibulum sed massa non nisl vulputate interdum sed sit amet massa. Donec accumsan ipsum non mauris laoreet pretium. Ut rutrum ex ac odio consequat consectetur.",
  },
];

let imageIndex = 0;

function getSiguienteImagen() {
  let imgIndex = imageIndex;
  if (imgIndex == contenidos.length - 1) imgIndex = 0;
  else imgIndex++;

  return `<img class="siguiente" src="${contenidos[imgIndex].image}" />`;
}

function getAnteriorImagen() {
  let imgIndex = imageIndex;
  if (imgIndex == 0) imgIndex = contenidos.length - 1;
  else imgIndex--;

  return `<img class="anterior" src="${contenidos[imgIndex].image}" />`;
}

function siguienteImagen() {
  if (imageIndex == contenidos.length - 1) imageIndex = 0;
  else imageIndex++;
  nuevaImagen();
}

function anteriorImagen() {
  if (imageIndex == 0) imageIndex = contenidos.length - 1;
  else imageIndex--;
  nuevaImagen();
}

function nuevaImagen() {
  imagesCarrusel.innerHTML = `
  ${getAnteriorImagen()}
  <img src="${contenidos[imageIndex].image}" />
  ${getSiguienteImagen()}
  <h1>${contenidos[imageIndex].title}</h1>
  <p>${contenidos[imageIndex].desc}</p>
  `;
}

document.querySelector(".next").addEventListener("click", function () {
  const imagen = document.querySelector(".image-carrusel");

  imagen.style.transform = "translate(-100%)";
  imagen.style.transition = "0.5s";

  setTimeout(() => {
    siguienteImagen();
    imagen.style.transform = "none";
    imagen.style.transition = "0s";
  }, 500);
});

document.querySelector(".prev").addEventListener("click", function () {
  const imagen = document.querySelector(".image-carrusel");

  imagen.style.transform = "translate(100%)";
  imagen.style.transition = "0.5s";

  setTimeout(() => {
    anteriorImagen();
    imagen.style.transform = "none";
    imagen.style.transition = "0s";
  }, 700);
});

nuevaImagen();
