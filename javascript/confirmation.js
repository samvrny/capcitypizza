function submit(event) {
    event.preventDefault();

    // Redirect to the confirmation page
    window.location.href = 'confirmation.html';

    console.log("Hello World");

    return false;
}