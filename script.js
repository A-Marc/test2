// Récupère le User-Agent du visiteur
let userAgent = navigator.userAgent;

// Encode le User-Agent pour l'utiliser dans une URL
let encodedUserAgent = encodeURIComponent(userAgent);

// URL du script Google Apps Script avec le paramètre "valeur"
let url = `https://script.google.com/macros/s/AKfycbzX_iuKQ4PuLR-wFM9yN-GW08nITLJ_8CNiYF1UUp8p8Xym4NJhCh9nNbY0KAMDVz0v/exec?valeur=${encodedUserAgent}`;

// Effectue la requête GET vers l'URL
fetch(url)
    .then(response => response.json())
    .then(data => console.log('Réponse du serveur:', data))
    .catch(error => console.error('Erreur lors de la requête:', error));
