let baseUrl = 'http://localhost:3000'

$(document).ready(function () {
    console.log('masuk');
});

function login(event) {
    event.preventDefault()
    let email = $('#email').val()
    let password = $('#password').val()
    console.log(email, password, '<<<<<< tes');

    $.ajax({
        method: 'post',
        url: baseUrl + '/users/login',
        data: { email, password }
    })
        .done((data) => {
            // console.log(data, '<<<<<<< Hasil console');
            localStorage.setItem('token', data.token);
        })
        .fail(err => {
            console.log(err, '<<<<<< err');
        })
}

function onSignIn(googleUser) {
    let id_token = googleUser.getAuthResponse().id_token;
    $.ajax({
        method: 'post',
        url: baseUrl + '/users/googleSign',
        data: { id_token }
    })
        .done(data => {
            console.log(data, '<<<<< data signIn');
            localStorage.setItem('token', data.token)
        })
        .fail(err => {
            console.log(err.response.JSON.errors, '<<<< err signIn');
        })
}

function signOut() {
    localStorage.clear()
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}
