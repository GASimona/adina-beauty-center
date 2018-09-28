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


function fetchTextFromFile(fileName, idOfElement) {
    $.ajax({
        url: fileName,
        success: function(data) {
            document.getElementById(idOfElement).innerHTML = data;
            console.log("Got " + data +  "from file");
        }
    });
}

function loadAllPages() {
    // fetchTextFromFile('test.txt', 'aici');
    fetchTextFromFile('acasa.html', 'acasa');
    fetchTextFromFile('oferte.html', 'oferte');
    fetchTextFromFile('servicii.html', 'servicii');
    // fetchTextFromFile('galerie.html', 'galerie');
    fetchTextFromFile('tarife.html', 'tarife');
    fetchTextFromFile('contact.html', 'contact');
    fetchTextFromFile('despreNoi.html', 'despreNoi');
}

loadAllPages();

// -------- chat facebook --------

// window.fbAsyncInit = function() {
//     FB.init({
//         appId: 'din site ceva',
//         autologAppEvents: true,
//         xfbnl: true,
//         version: 'v2.12'
//     });
// };
// (function(d,s,id) {
//     var js, fjs = d.getElementByTagName(s)[0];
//     if (d.getElementById(id)) {return;}
//     js = d.createElement(s);
//     js.id = id;
//     js.src = "https://connect.facebook.net/en_uk/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
// } (document, 'script', 'facebook-jssdk'));