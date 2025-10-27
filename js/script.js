// Keep this in the global scope for the onclick attribute in the HTML
window.openTab = (evt, tabName) => {
    const tabcontent = document.querySelectorAll(".tabcontent");
    const tablinks = document.querySelectorAll(".tablinks");

    tabcontent.forEach(tab => {
        tab.style.display = "none";
        // Also hide the direct children divs for About and Contact tabs
        if (tab.id === 'About' || tab.id === 'Contact') {
            const children = tab.querySelectorAll('div[lang]');
            children.forEach(child => {
                const lang = document.documentElement.lang;
                if (child.getAttribute('lang') === lang) {
                    child.style.display = 'block';
                } else {
                    child.style.display = 'none';
                }
            });
        }
    });

    tablinks.forEach(link => link.classList.remove("active"));

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
};

document.addEventListener('DOMContentLoaded', () => {
    // Language switching logic
    const langFrButton = document.getElementById('lang-fr');
    const langEnButton = document.getElementById('lang-en');
    const frElements = document.querySelectorAll('div[lang="fr"]');
    const enElements = document.querySelectorAll('div[lang="en"]');

    const setLanguage = (lang) => {
        const elementsToShow = lang === 'en' ? enElements : frElements;
        const elementsToHide = lang === 'en' ? frElements : enElements;

        elementsToShow.forEach(el => el.style.display = 'block');
        elementsToHide.forEach(el => el.style.display = 'none');
        document.documentElement.lang = lang;
    };

    langFrButton.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('fr');
    });

    langEnButton.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('en');
    });

    const userLang = navigator.language || navigator.userLanguage;
    setLanguage(userLang.startsWith('en') ? 'en' : 'fr');

    // Open the default tab
    const defaultOpen = document.getElementById("defaultOpen");
    if (defaultOpen) {
        defaultOpen.click();
    }
});
