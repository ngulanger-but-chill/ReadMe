let baseUrl = 'http://localhost:3000'

if (localStorage.token) {
    $('.container').show()
    $('.login-page').hide()
    $('.register-page').hide()
} else {
    $('.login-page').show()
    $('.register-page').hide()
    $('.container').hide()
}

$(document).ready(function () {
    // console.log('masuk');
    $('.login-page #newuser').on("click", (event) => {
        event.preventDefault()
        login(event)
        $('.login-page').hide();
        $('.register-page').show()
    });

    $('.register-page').on("submit", (event) => {
        event.preventDefault()
        let email = $('#emailRegister').val()
        let password = $('#passwordRegister').val()
        // console.log(email, password, '<<<<<< tes');
    
        $.ajax({
            method: 'post',
            url: baseUrl + '/users/register',
            data: { email, password }
        })
            .done((data) => {
                $('#register-status').text('Successfully register ^^')
            })
            .fail(err => {
                $('#register-status').text(err.responseJSON.message)
            })
            .always(() => {
                $('#email').val('')
                $('#password').val('')
            })
    })

    $('.register-page #login-newuser').on("click", (event) => {
        event.preventDefault()
        $('.login-page').show();
        $('.register-page').hide()
    });
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
            // console.log(data, '<<<<<<< berhasil login');
            localStorage.setItem('token', data.token);
        })
        .fail(err => {
            console.log(err.responseJSON.message, '<<<<<< err');
        })
        .always(() => {
            $('#email').val('')
            $('#password').val('')
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
            localStorage.setItem('token', data.data.token)
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
