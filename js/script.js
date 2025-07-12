document.addEventListener('DOMContentLoaded', () => {
    const langFr = document.getElementById('lang-fr');
    const langEn = document.getElementById('lang-en');

    langFr.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('fr');
    });

    langEn.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('en');
    });

    const userLang = navigator.language || navigator.userLanguage;
    setLanguage(userLang.startsWith('en') ? 'en' : 'fr');
});

const translations = {
    fr: {
        license: "Dans la mesure du possible en vertu de la loi, <a href=\"https://coderbunker.ca/\" rel=\"dct:publisher\"><span property=\"dct:title\">CoderBunker</span></a> a renoncé à tout droit d'auteur et à tous les droits connexes ou voisins sur cette œuvre."
    },
    en: {
        license: "To the extent possible under law, <a href=\"https://coderbunker.ca/\" rel=\"dct:publisher\"><span property=\"dct:title\">CoderBunker</span></a> has waived all copyright and related or neighboring rights to this work."
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[lang="fr"]').forEach(el => el.style.display = lang === 'fr' ? '' : 'none');
    document.querySelectorAll('[lang="en"]').forEach(el => el.style.display = lang === 'en' ? '' : 'none');
    document.documentElement.lang = lang;
    document.getElementById('license-text').innerHTML = translations[lang].license;
}
