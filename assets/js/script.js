const pintar = (elementoHTML, color = "green") => (elementoHTML.style.backgroundColor = color);

const elementoHTML = document.getElementById("ele1");

elementoHTML.addEventListener("click", () => {
    pintar(elementoHTML, "yellow");
});
