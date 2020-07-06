function sendMail(contactForm) {
    emailjs.send("gmail", "katharine", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "artist_enquiry": contactForm.message,
    })
    .then(
        function(response){
            console.log("Success", response);
        },
        function(error){
            console.log("failed", error);
        });
}