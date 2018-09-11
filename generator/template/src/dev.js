// fetch server data
fetch(`http://vuetober.october.test${window.location.pathname}`, { mode: 'cors' })
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // append the vuetober meta tag to the <head>, and start the application
        const vuetober = doc.querySelector('meta[name=vuetober]');

        if (!vuetober) {
            throw 'Failed to load Vuetober meta data, check the index.htm file for errors.';
        }

        document.head.appendChild(vuetober);
        
        // start the application
        require('./main');
    });
