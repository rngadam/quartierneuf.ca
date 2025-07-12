document.addEventListener('DOMContentLoaded', () => {
    const langFr = document.getElementById('lang-fr');
    const langEn = document.getElementById('lang-en');
    const frElements = document.querySelectorAll('[lang="fr"]');
    const enElements = document.querySelectorAll('[lang="en"]');

    const setLanguage = (lang) => {
        if (lang === 'en') {
            frElements.forEach(el => el.style.display = 'none');
            enElements.forEach(el => el.style.display = 'block');
            document.documentElement.lang = 'en';
        } else {
            enElements.forEach(el => el.style.display = 'none');
            frElements.forEach(el => el.style.display = 'block');
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
