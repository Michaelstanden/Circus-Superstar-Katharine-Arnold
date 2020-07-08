function sendMail(contactForm) {
    emailjs.send("gmail", "katharine", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email_address.value,
        "artist_enquiry": contactForm.message.value,
    })
    .then(
        function(response){
            console.log("Success", response);
        },
        function(error){
            console.log("failed", error);
        });
}