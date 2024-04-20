var VhidController = {
    init: function() {
        var form = document.getElementById('loginForm');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var user = VhidModel.loginUser(email, password);
            if (user) {
                VhidView.showMessage("Ви успішно увійшли!");
                window.location.href = 'index.html';
            } else {
                VhidView.showMessage("Неправильний email або пароль");
            }
        });
    }
};

VhidController.init();