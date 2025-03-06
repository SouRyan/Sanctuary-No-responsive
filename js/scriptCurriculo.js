const btnClaro = document.getElementById("lightMode");
const btnEscuro = document.getElementById("darkMode");
const body = document.body;
body.classList.add("lightMode")
btnClaro.style.display = "none";
btnEscuro.style.display = "inline";

btnClaro.addEventListener("click", ()=> {
    body.classList.remove("lightMode");
    body.classList.add("darkMode");
    btnClaro.style.display = "none";
    btnEscuro.style.display = "inline";
    
})

btnEscuro.addEventListener("click", ()=> {
    body.classList.remove("darkMode");
    body.classList.add("lightMode");
    btnClaro.style.display = "inline";
    btnEscuro.style.display = "none";
})
// Sempre por ultimo
AOS.init({
    duration: 1000,
  });
//   inicalização do AOS