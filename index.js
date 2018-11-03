function changeActivePage(pageId, tarifId) {
    hideAllPages();
    document.getElementById(pageId).style.display = "table";
    window.location.hash = '/' + pageId;

    var analyticsPage = pageId;

    if (tarifId)   {
        analyticsPage = pageId + '-' + tarifId;
    }

    ga('send', 'pageview', analyticsPage);

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
}

function changeActiveTarife(tarifId) {
    changeActivePage('tarife', tarifId);
    $('#'+tarifId).collapse('show');
}



function fetchTextFromFile(fileName, idOfElement) {
    $.ajax({
        url: fileName,
        async: false,
        success: function(data) {
            document.getElementById(idOfElement).innerHTML = data;
            // console.log("Got " + data +  "from file");
        }
    });
}

function loadAllPages() {
    fetchTextFromFile('acasa.html', 'acasa');
    fetchTextFromFile('oferte.html', 'oferte');
    fetchTextFromFile('servicii.html', 'servicii');
    fetchTextFromFile('tarife.html', 'tarife');
    fetchTextFromFile('contact.html', 'contact');
}

var pageId = -1;
if (window.location.hash.length > 1) {
    pageId = window.location.hash.substr(2);
}

setTimeout(() => {
    loadAllPages();
    if (pageId !== -1) {
        changeActivePage(pageId);
    }
}, 1);

