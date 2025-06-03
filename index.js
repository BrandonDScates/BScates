function sendMail(event) {
    event.preventDefault(); // <-- Important to prevent form reload

    let parms = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value,
    };

    emailjs.send('service_j792sp7', 'template_b1qz6bl', parms)
        .then(function(response) {
            alert("Email Sent");
            console.log("EmailJS response:", response);
        })
        .catch(function(error) {
            alert('Failed to send email: ' + error.text);
            console.error("EmailJS error:", error);
        });
}