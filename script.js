// Inizializza EmailJS con la tua Public Key
emailjs.init("iG9dYGCbq0UIcPAk6"); // Sostituisci con la tua Public Key

// Gestione dell'invio del modulo
document.getElementById('requestForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Ottieni i dati del modulo
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    // Invia i dati a EmailJS
    emailjs.send("service_dzaek88", "template_7an24nk", {
        name: name,
        email: email,
        description: description
    }).then(function (response) {
        alert("Email inviata con successo!");
        console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
        alert("Errore nell'invio dell'email.");
        console.error('FAILED...', error);
    });

    // Reset del modulo
    this.reset();
});
