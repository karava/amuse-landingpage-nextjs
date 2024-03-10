function navClicked(target) {
    var targetElement = document.querySelector(target);
    if (targetElement) {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: targetElement.offsetTop
        });
    }
}

var hamburger = document.querySelector('.hamburger');
var headerLinks = document.querySelector('header .links');

function toggleMenu() {
    hamburger.classList.toggle('active');
    headerLinks.classList.toggle('active');
}

var splide = new Splide('.main-banner-slider', {
    pagination: false,
    arrows: false,
    gap: '20px',
    autoWidth: true,
    focus: 'center',
    perPage: 1,
    start: 1,
    trimSpace: false,
});

splide.mount();


function parseQueryParameters() {
    var params = {};
    var queryString = window.location.search.substring(1);
    var pairs = queryString.split('&');
    pairs.forEach(function (pair) {
        const keyValue = pair.split('=');
        params[keyValue[0]] = decodeURIComponent(keyValue[1]);
    });
    return params;
}

function downloadTranslations(lang) {
    return fetch('assets/translations/' + lang + '.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function replaceTextContent(translations) {
    for (var key in translations) {
        var elements = document.querySelectorAll('[data-translate="' + key + '"]');
        elements.forEach(function (element) {
            element.textContent = translations[key];
        });
    }
}

// Usage: Download translations based on lang query parameter and replace text content
var queryParams = parseQueryParameters();
var lang = queryParams.lang || 'en'; // Default to English if lang parameter is not provided
downloadTranslations(lang)
    .then(data => {
        replaceTextContent(data);
    });