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

    // Update URL hash
    if (window.location.hash !== '#' + tabName) {
        window.history.pushState(null, null, '#' + tabName);
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

let drawnPath = [];

// Make drawingManager globally accessible to be able to reset the map correctly
window.drawingManager = null;

window.initMap = function() {
    const mapElement = document.getElementById('map-selector');
    if (!mapElement) return;

    // eslint-disable-next-line no-undef
    const map = new google.maps.Map(mapElement, {
        center: { lat: 45.5593, lng: -73.6015 },
        zoom: 15
    });

    // eslint-disable-next-line no-undef
    window.drawingManager = new google.maps.drawing.DrawingManager({
        // eslint-disable-next-line no-undef
        drawingMode: google.maps.drawing.OverlayType.POLYLINE,
        drawingControl: true,
        drawingControlOptions: {
            // eslint-disable-next-line no-undef
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['polyline']
        },
        polylineOptions: {
            editable: true,
            strokeColor: '#008000',
            strokeWeight: 4
        }
    });

    window.drawingManager.setMap(map);

    // eslint-disable-next-line no-undef
    google.maps.event.addListener(window.drawingManager, 'overlaycomplete', function(event) {
        if (event.type === 'polyline') {
            const polyline = event.overlay;
            const path = polyline.getPath();
            drawnPath = path.getArray().map(latLng => ({
                lat: latLng.lat(),
                lng: latLng.lng()
            }));

            // eslint-disable-next-line no-inner-declarations
            function updatePath() {
                drawnPath = path.getArray().map(latLng => ({
                    lat: latLng.lat(),
                    lng: latLng.lng()
                }));
            }

            // Allow updates if the user edits the polyline
            // eslint-disable-next-line no-undef
            google.maps.event.addListener(path, 'set_at', updatePath);
            // eslint-disable-next-line no-undef
            google.maps.event.addListener(path, 'insert_at', updatePath);
        }
    });
};

window.submitSegment = function() {
    if (drawnPath.length === 0) {
        const lang = document.documentElement.lang;
        alert(lang === 'fr' ? 'Veuillez dessiner un segment sur la carte.' : 'Please draw a segment on the map.');
        return;
    }

    const coordinatesStr = drawnPath.map(p => `${p.lat.toFixed(5)},${p.lng.toFixed(5)}`).join('; ');

    // Calculate distance
    let distance = 0;
    if (drawnPath.length > 1) {
        for (let i = 0; i < drawnPath.length - 1; i++) {
            // eslint-disable-next-line no-undef
            const p1 = new google.maps.LatLng(drawnPath[i].lat, drawnPath[i].lng);
            // eslint-disable-next-line no-undef
            const p2 = new google.maps.LatLng(drawnPath[i+1].lat, drawnPath[i+1].lng);
            // eslint-disable-next-line no-undef
            distance += google.maps.geometry.spherical.computeDistanceBetween(p1, p2);
        }
    }
    const distanceStr = distance.toFixed(0) + "m";

    // Determine bounds for zoom
    // eslint-disable-next-line no-undef
    const bounds = new google.maps.LatLngBounds();
    drawnPath.forEach(p => {
        // eslint-disable-next-line no-undef
        bounds.extend(new google.maps.LatLng(p.lat, p.lng));
    });
    const centerLat = bounds.getCenter().lat().toFixed(5);
    const centerLng = bounds.getCenter().lng().toFixed(5);

    // Create static map image URL
    // Encode the path
    const pathStr = drawnPath.map(p => `${p.lat},${p.lng}`).join('|');
    const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?size=600x400&path=color:0x008000ff|weight:4|${pathStr}`;

    const subject = encodeURIComponent("Nouveau segment adopté / New adopted segment");
    let bodyText = `Voici les coordonnées de mon segment de rue (${distanceStr}) / Here are the coordinates for my street segment (${distanceStr}):\n\n${coordinatesStr}\n\n`;
    bodyText += `Centre / Center: ${centerLat}, ${centerLng}\n`;
    bodyText += `Image de la carte (nécessite une clé API pour fonctionner) / Map image (requires API key to work): ${staticMapUrl}`;

    const body = encodeURIComponent(bodyText);

    window.location.href = `mailto:contact@quartierneuf.ca?subject=${subject}&body=${body}`;
};

document.addEventListener('DOMContentLoaded', () => {
    const langFrButton = document.getElementById('lang-fr');
    const langEnButton = document.getElementById('lang-en');
    const frElements = document.querySelectorAll('div[lang="fr"]');
    const enElements = document.querySelectorAll('div[lang="en"]');

    const setLanguage = (lang) => {
        frElements.forEach(el => el.style.display = (lang === 'fr' ? 'block' : 'none'));
        enElements.forEach(el => el.style.display = (lang === 'en' ? 'block' : 'none'));

        // Handle map selector language visibility
        const mapFrHeaders = document.querySelectorAll('#map-selector-container > [lang="fr"]');
        const mapEnHeaders = document.querySelectorAll('#map-selector-container > [lang="en"]');
        mapFrHeaders.forEach(el => el.style.display = (lang === 'fr' ? 'block' : 'none'));
        mapEnHeaders.forEach(el => el.style.display = (lang === 'en' ? 'block' : 'none'));

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

    const openTabFromHash = () => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const tabButton = document.querySelector(`.tablinks[data-tab="${hash}"]`);
            if (tabButton) {
                tabButton.click();
                return true;
            }
        }
        return false;
    };

    if (!openTabFromHash()) {
        const defaultOpen = document.getElementById("defaultOpen");
        if (defaultOpen) {
            defaultOpen.click();
        }
    }

    window.addEventListener('hashchange', () => {
        openTabFromHash();
    });
});
