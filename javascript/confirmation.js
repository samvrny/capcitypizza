let form = document.getElementById("confirmationForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let val1 = form.name;
    let val2 = form.email;

    console.log(val1, val2);
    console.log("Hello World");

    window.location.assign("confirmation.html");
});