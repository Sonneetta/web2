
var View = {
    displayError: function(message) {
        document.getElementById('emailError').innerText = message;
    },

    clearFields: function() {
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
};
