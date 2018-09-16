// fetch server data
fetch(`<%= options.server %>${window.location.pathname}`, { mode: 'cors' })
    .then(response => new Promise(resolve => response.text().then(html => resolve({ html, response }))))
    .then(({ html, response }) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // display october errors
        if (response.status >= 400) {
            document.open('text/html');
            document.write(html);
            document.close();

            console.error(response);

            return;
        }

        // append the vuetober meta tag to the <head>, and start the application
        const vuetober = doc.querySelector('meta[name=vuetober]');

        if (!vuetober) {
            throw 'Failed to load Vuetober meta data, check the index.htm file for errors.';
        }

        document.head.appendChild(vuetober);
        
        // start the application
        require('./main');
    });