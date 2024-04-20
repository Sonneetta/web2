var VhidModel = {
    loginUser: function(email, password) {
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var user = users.find(function(user) {
            return user.email === email && user.password === password;
        });
        return user;
    }
};