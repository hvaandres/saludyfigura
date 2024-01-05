function sendMessage() {
    // Get form data
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;

    // WhatsApp number
    var whatsappNumber = 'YOUR_PHONE_NUMBER'; // Replace with your WhatsApp number

    // Formatted message
    var whatsappMessage = "Nuevo mensaje de WhatsApp\n\n";
    whatsappMessage += "Nombre: " + nombre + "\n";
    whatsappMessage += "Correo: " + correo + "\n";
    whatsappMessage += "Mensaje: " + mensaje;

    // Send data to server-side script
    fetch('send_whatsapp.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'whatsappMessage=' + encodeURIComponent(whatsappMessage),
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Log the server response
        // Optionally, you can handle the server response here
    })
    .catch(error => {
        console.error('Error:', error);
    });
}