//Botão que aparece no canto da tela, responsável para retornar para cima
window.onscroll = function() { 
    let btn = document.getElementById("btnTopo");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//Responsável por abrir popup
function openPopup(popupId){
    var popup = document.getElementById(popupId);
    popup.style.display= "flex";
}

//Responsável por fechar popup
function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
}

//Responsável pela aparição do popup
window.onclick = function(event) {
    var popups = document.querySelector('.popup');
    popups.forEach(function(popup){
        if(event.target === popup){
            popup.style.display = "none";
        }
    });
};

//Arrays que contém imagens dos projetos
let imgsprj = {
    popup1 : ["img/projects/portfolio/img-prj1.png", "img/projects/portfolio/img-prj2.png", "img/projects/portfolio/img-prj3.png"]
};
    let index = 0;

//Funções de alterar imagens
function nextImg(popupId) {
    if (imgsprj[popupId]) {
        index = (index + 1) % imgsprj[popupId].length;
        document.getElementById("imgs-prj1").src = imgsprj[popupId][index];
    }
}

function prevImg(popupId) {
    if (imgsprj[popupId]) {
        index = (index - 1 + imgsprj[popupId].length) % imgsprj[popupId].length;
        document.getElementById("imgs-prj1").src = imgsprj[popupId][index];
    }
}

