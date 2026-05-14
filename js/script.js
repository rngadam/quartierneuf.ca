// Keep this in the global scope for the onclick attribute in the HTML
window.openTab = (evt, tabName) => {
    const tabcontent = document.querySelectorAll(".tabcontent");
    const tablinks = document.querySelectorAll(".tablinks");

    tabcontent.forEach(tab => {
        tab.style.display = "none";
    });

    tablinks.forEach(link => {
        link.classList.remove("active");
    });

    document.getElementById(tabName).style.display = "block";

    // Find the correct tab link and add the 'active' class
    const activeTabLink = document.querySelector(`.tablinks[data-tab="${tabName}"]`);
    if (activeTabLink) {
        activeTabLink.classList.add("active");
    } else if (evt && evt.currentTarget && evt.currentTarget.classList.contains('tablinks')) {
        evt.currentTarget.classList.add("active");
    }

    // Ensure the correct language content is shown for the active tab
    const activeLangDiv = document.querySelector(`#${tabName} > div[lang='${document.documentElement.lang}']`);
    if (activeLangDiv) {
        activeLangDiv.style.display = 'block';
    }

    // Load MyRegistry widget script if the active tab is 'Guide'
    if (tabName === 'Guide') {
        const lang = document.documentElement.lang;
        const container = document.querySelector(`#Guide > div[lang='${lang}'] .myregistry-embed-container`);
        if (container && !container.hasChildNodes()) {
            const script = document.createElement('script');
            script.id = 'script_myregistry_giftlist_iframe';
            script.type = 'text/javascript';
            const langParam = lang === 'en' ? '&lang=en' : '';
            script.src = `https://www.myregistry.com/visitors/Embed/scripts/EmbedGiftList.js?r=6H4eRN_3HeIyMRf1YA35og2${langParam}`;
            container.appendChild(script);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langFrButton = document.getElementById('lang-fr');
    const langEnButton = document.getElementById('lang-en');
    const frElements = document.querySelectorAll('div[lang="fr"]');
    const enElements = document.querySelectorAll('div[lang="en"]');

    const setLanguage = (lang) => {
        frElements.forEach(el => el.style.display = (lang === 'fr' ? 'block' : 'none'));
        enElements.forEach(el => el.style.display = (lang === 'en' ? 'block' : 'none'));
        document.documentElement.lang = lang;

        // After switching language, re-apply tab visibility
        const activeTab = document.querySelector(".tablinks.active");
        if (activeTab) {
            activeTab.click();
        }
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

    const defaultOpen = document.getElementById("defaultOpen");
    if (defaultOpen) {
        defaultOpen.click();
    }
});
