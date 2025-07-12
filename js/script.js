document.addEventListener('DOMContentLoaded', () => {
    const langFr = document.getElementById('lang-fr');
    const langEn = document.getElementById('lang-en');
    const frContainer = document.querySelector('div[lang="fr"]');
    const enContainer = document.querySelector('div[lang="en"]');
    const frHeader = document.querySelector('header div[lang="fr"]');
    const enHeader = document.querySelector('header div[lang="en"]');


    const setLanguage = (lang) => {
        if (lang === 'en') {
            frContainer.style.display = 'none';
            enContainer.style.display = 'block';
            frHeader.style.display = 'none';
            enHeader.style.display = 'block';
            document.documentElement.lang = 'en';
        } else {
            enContainer.style.display = 'none';
            frContainer.style.display = 'block';
            enHeader.style.display = 'none';
            frHeader.style.display = 'block';
            document.documentElement.lang = 'fr';
        }
    };

    langFr.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('fr');
    });

    langEn.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('en');
    });

    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('en')) {
        setLanguage('en');
    } else {
        setLanguage('fr');
    }
});
