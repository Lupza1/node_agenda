user = document.getElementById('user');
pass = document.getElementById('pass');

function login(user, pass) {
    if (user == "ejemplo" && pass =="123") {
        location.href="./main.html"
    } else {
        location.href="./index.html"
    }
}

login()