
/*1 Evitar comportamiento por defecto*/
const enlaces = document.querySelectorAll("a");
for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener("click", function(evento) {
        evento.preventDefault();
    });
};

/*2 Comportamiento click
/*2.1 Cambiar imágenes*/
const imagenes = document.getElementsByTagName("img");
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", function() {
        this.setAttribute("src", getRandom(gifts));
    });
};
/*2.2 Cambiar párrafos*/
const parrafos = document.getElementsByTagName("p");
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("click", function() {
        this.style.color = getRandom(colors);
        this.style.backgroundColor = getRandom(colors);
    });
};
/*2.3 Cambiar article y section*/
const articles = document.getElementsByTagName("article");
const sections = document.getElementsByTagName("section");

for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener("click", function() {
        this.style.backgroundColor = getRandom(colors);
    });
};
for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", function() {
        this.style.backgroundColor = getRandom(colors);
    });
};

/*3 Comportamiento hover*/
/*3.1 Cambiar imágenes*/
let originales = [];
for (let i = 0; i < imagenes.length; i++) {
    originales[i] = imagenes[i].getAttribute("src");
    imagenes[i].addEventListener("mouseover", function() {
        this.setAttribute("src", "assets/abracadabra.gif");
    });
    imagenes[i].addEventListener("mouseout", function() {
        this.setAttribute("src", originales[i]);
    });
};
/*3.2 Cambiar párrafos*/
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("mouseover", function() {
        this.style.color = getRandom(colors);
        this.style.backgroundColor = getRandom(colors);
    });
};
/*3.3 Cambiar article y section*/
for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = getRandom(colors);
    });
};
for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = getRandom(colors);
    });
};


/*Bonus*/
const gifts = ["assets/magic-1.gif", "assets/magic-2.gif", "assets/magic-3.gif", "assets/magic-4.gif", "assets/magic-5.gif", "assets/magic-6.gif"];
const colors = ["#001219", "#005f73", "#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00", "#ca6702", "#bb3e03", "#ae2012", "#9b2226"];

function getRandom(array) {
    const num = Math.floor(Math.random() * array.length);
    return array[num];
};