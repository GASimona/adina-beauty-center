function changeActivePage(pageId) {
    hideAllPages();
    document.getElementById(pageId).style.display = "table";
    window.location.hash = '/' + pageId;
    // HACK: Fortez galeria sa se randeze din nou la dimensiunile corecte.
    if (pageId === 'galerie') {
        window.scrollBy(0, 1);
    }
}

function hideAllPages() {
    document.getElementById('acasa').style.display = "none";
    document.getElementById('oferte').style.display = "none";
    document.getElementById('servicii').style.display = "none";
    document.getElementById('galerie').style.display = "none";
    document.getElementById('tarife').style.display = "none";
    document.getElementById('contact').style.display = "none";
    document.getElementById('despreNoi').style.display = "none";
}

if (window.location.hash.length > 1) {
    var pageId = window.location.hash.substr(2);
    changeActivePage(pageId);
}

function changeActiveTarife(tarifId) {
    changeActivePage('tarife');
    $('#'+tarifId).collapse('show');
}

// galerie
// jQuery(document).ready(function(){ 
//     jQuery("#gallery").unitegallery(); 
// });