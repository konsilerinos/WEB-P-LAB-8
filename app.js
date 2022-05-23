ruLink = document.querySelector('#RU-link');
ruLink.addEventListener('click', RuLinkclicked);

enLink = document.querySelector('#EN-link');
enLink.addEventListener('click', EnLinkClicked);

byLink = document.querySelector('#BY-link');
byLink.addEventListener('click', ByLinkClicked);

homeLink = document.querySelector('#lng-home-link');
homeLink.addEventListener('click', HomeLinkClicked);

vlasovQuotsLink = document.querySelector('#lng-quote-1');
vlasovQuotsLink.addEventListener('click', VlasovQuotsLinkClicked);

warmUpLink = document.querySelector('#lng-training-link-1');
warmUpLink.addEventListener('click', WarmUpLinkClicked);

benchPressLink = document.querySelector('#lng-training-link-2');
benchPressLink.addEventListener('click', BenchPressLinkClicked);

squatWithbarabellLink = document.querySelector('#lng-training-link-3');
squatWithbarabellLink.addEventListener('click', SquatWithbarabellLinkClicked);

deadliftLink = document.querySelector('#lng-training-link-4');
deadliftLink.addEventListener('click', DeadliftLinkClicked);

function DeadliftLinkClicked() {
    location.href='Deadlift.html#' + hash;
}
function SquatWithbarabellLinkClicked() {
    location.href='SquatWithBarbell.html#' + hash;
}
function BenchPressLinkClicked() {
    location.href='BenchPress.html#' + hash;
}
function WarmUpLinkClicked() {
    location.href='WarmUp.html#' + hash;
}
function HomeLinkClicked() {
    location.href='index.html#' + hash;
}
function VlasovQuotsLinkClicked() {
    window.location.href='VlasovQuotes.html#' + hash;
}

// Обработчик события: ruLink, нажатие
function RuLinkclicked() {
    lang = 'RU';
    ChangeUrlLanguage();
}
// Обработчик события: enLink, нажатие
function EnLinkClicked() {
    lang = 'EN';
    ChangeUrlLanguage();
}
function ByLinkClicked() {
    lang = 'BY';
    ChangeUrlLanguage();
}

// Поменять URL
function ChangeUrlLanguage() {
    location.href = window.location.pathname + "#" + lang;
    location.reload();
}

// Перевод страницы
function ChangeLanguage() {

    // Язык
    hash = window.location.hash;
    hash = hash.substring(1);

    // Если хеша нет - установить русский
    if(hash == '') {
        hash = 'RU';
        // lang = 'RU';
    }
    location.href = window.location.href = "#" + hash;

    // Локализация даты
    let now = new Date();
    let date = new Intl.DateTimeFormat(hash).format(now);
    if(document.querySelector('#date')) {
        document.querySelector('#date').textContent = date;
    }
    console.log(date);

    // Локализация изображений
    let image = document.getElementById("#image");
    if(image) {
        image.src = langArr['image'][hash];
    }

    // Локализация по умолчанию
    if(!allLang.includes(hash)) {
        location.href = window.location.pathname + "#RU";
        location.reload();
    }

    for(let key in langArr) {
        let element = document.querySelector('#lng-' + key);
        if(element) {
            element.innerHTML = langArr[key][hash];
        }
    }
    // document.querySelector('#unit').innerHTML = langArr['unit'][hash];
    
}
ChangeLanguage();