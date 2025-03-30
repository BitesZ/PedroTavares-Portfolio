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

function openPopup(popupId){
    var popup = document.getElementById(popupId);
    popup.style.display= "flex";
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
}

window.onclcik = function(event) {
    var popups = document.querySelector('.popup');
    popups.forEach(function(popup){
        if(event.target === popup){
            popup.style.display = "none";
        }
    });
};