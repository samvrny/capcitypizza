let form = document.getElementById("confirmationForm");

/**
 * When a user submits a form, send them to the confirmation page
 */
form.addEventListener("submit", (event) => {
    event.preventDefault();

    window.location.assign("confirmation.html");
});