
var Model = {
    isEmailRegistered: function(email) {
        var users = JSON.parse(localStorage.getItem('users')) || [];
        return users.some(function(user) {
            return user.email === email;
        });
    },

    addUser: function(email, password) {
        var newUser = {
            email: email,
            password: password
        };
        var users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
    }
};
