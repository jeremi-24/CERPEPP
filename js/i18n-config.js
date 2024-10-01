// i18n-config.js
i18next.init({
    lng: 'fr', // langue par défaut
    resources: {
        en: {
            translation: {
                "welcome": "Welcome to our website!",
                "description": "This is a sample description."
            }
        },
        fr: {
            translation: {
                "welcome": "Bienvenue sur notre site web !",
                "description": "Ceci est une description d'exemple."
            }
        },
        // Ajoutez d'autres langues ici si nécessaire
    }
}, (err, t) => {
    // Initialisation complète
    updateContent();
});

function updateContent() {
    document.getElementById('welcome').innerHTML = i18next.t('welcome');
    document.getElementById('description').innerHTML = i18next.t('description');
}
