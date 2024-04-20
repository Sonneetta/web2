
var Controller = {
    registerUser: function(email, password) {
        if (Model.isEmailRegistered(email)) {
            View.displayError('Цей email вже використовується');
        } else {
            Model.addUser(email, password);
            View.clearFields();
            alert("Реєстрація пройшла успішно!");
            window.location.href = 'logout.html';
        }
    }
};

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    Controller.registerUser(email, password);
});
