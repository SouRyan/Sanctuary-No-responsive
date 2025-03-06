window.addEventListener("load", ()=> {
let video = window.document.querySelector("#video")
video.play()
video.loop = true

});

// temas
const btnClaro = document.getElementById("lightMode");
const btnEscuro = document.getElementById("darkMode");
const body = document.body;
body.classList.add("lightMode")
btnClaro.style.display = "inline";
btnEscuro.style.display = "none";

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


// Estrutura active
// essa estrutura retira e adiciona a classe active do html
document.querySelectorAll('.navLink li').forEach((item) => {
    item.addEventListener('click', function(){
        // remove a classe active de todos os itens

        document.querySelectorAll('.navLink li').forEach((li) =>{
            li.classList.remove('active');
        
        });

        // Adiciona a classe active ao item clicado
        this.classList.add('active');

    });
});

document.addEventListener("DOMContentLoaded",function(){
    const navBar = document.querySelector(".navBar");
    const spans = document.querySelectorAll(".navLink li a span");

    function toggleSpanVisibility(){
        if(navBar.offsetWidth > 4 *16){ //convertendo 4rem para pixel
            spans.forEach((span) => {
                span.style.opacity = "0";
                span.style.visibility = "visible";
            }); 
        }else{
            spans.forEach((span)=>{
                span.style.opacity = "1";
                span.style.visibility= "hidden";

            });
        };
    };
    // esconde os spans inicialmente
    toggleSpanVisibility();

    navBar.addEventListener("mouseenter",()=>{
        spans.forEach((span) => {
            span.style.opacity = "1";
            span.style.visibility = "visible";
    })
});
        navBar.addEventListener("mouseleave",()=>{
            spans.forEach((span) => {
                span.style.opacity = "0";
                span.style.visibility = "hidden";
            })
        })     
});




// AOS.init({
//     duration: 1000,
//   });