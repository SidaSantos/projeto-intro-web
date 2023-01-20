const series = [
  {
    nome: "Vis a Vis",
    anoLancamento: 2015,
    img: "./assets/card1.jpg",
    jaAssisti: true,
    atores: ["Maggie Civantos", "Najwa Nimri"],
  },
  {
    nome: "La casa de Papel",
    anoLancamento: 2017,
    img: "./assets/card2.jpg",
    jaAssisti: false,
    atores: ["Álvaro Morte", "Úrsula Corberó"],
  },
  {
    nome: "Wandinha",
    anoLancamento: 2022,
    img: "./assets/card3.jpg",
    jaAssisti: true,
    atores: ["Jenna Ortega", "Christina Ricci"],
  },
  {
    nome: "The Flash",
    anoLancamento: 2014,
    img: "./assets/card4.jpg",
    jaAssisti: false,
    atores: ["Grant Gustin", "Candice Patton"],
  },
  {
    nome: "Elite",
    anoLancamento: 2018,
    img: "./assets/card5.jpg",
    jaAssisti: false,
    atores: ["Ester Expósito", "Itzan Escamilla"],
  },
  {
    nome: "The Witcher",
    anoLancamento: 2019,
    img: "./assets/card6.jpg",
    jaAssisti: true,
    atores: ["Henry Cavill", "Anya Chalotra"],
  },
];

const seriesAssistidas = [];

for (let item of series) {
  item.jaAssisti
    ? seriesAssistidas.push(item)
    : console.log(`${item.nome} não adicionado`);
}

const relatorio = (objeto) => {
  for (let item of objeto) {
    console.log(
      `${item.nome.toUpperCase()} \nAno de Lançamento: ${
        item.anoLancamento
      }\nAtores: ${item.atores
        .toString()
        .replace(",", ", ")}\nJá foi assistida? ${item.jaAssisti}`
    );
  }
};

relatorio(series);

const mediaNumerica = () => {
  let media = 0;

  for (let item of series) {
    media += item.anoLancamento;
  }

  media /= series.length;
  console.log(`A média dos anos de lançamento é: ${media}`);
};

mediaNumerica();

const grid = (obj) => {
  document.getElementById("grid_cards").innerHTML = "";

  for (let item of obj) {
    document.getElementById("grid_cards").innerHTML += `
      <li class="card" id="${item.nome.toLowerCase().replace(" ", "-")}">
        <img src="${item.img}" alt="${item.nome}">
      </li>
    `;
  }
};

grid(seriesAssistidas);

const buscarSerie = (arrayDeObjetos, nome) => {
  if (nome === "") {
    grid(seriesAssistidas);
    return;
  }

  const query = arrayDeObjetos.filter(
    (item) => item.nome.toUpperCase() === nome.toUpperCase()
  );
  document.getElementById("search_input").value = "";

  return query.length > 0 ? grid(query) : alert("Nenhum Item foi encontrado");
};

let myIndex = 0;
carousel();

function carousel() {
  let i;
  const x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000);
}

/*const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
}); */

/* for (item in seriesAssistidas) {
  console.log(`${seriesAssistidas[item].nome.toUpperCase()} \nAno de Lançamento: ${seriesAssistidas[item].anoLancamento}\nAtores: ${seriesAssistidas[item].atores.toString().replace(",", ", ")}`);
} */
