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
        url: baseUrl + '/login',
        data: { email, password }
    })
        .done(({data}) => {
            localStorage.setItem('token', data.token);
        })
        .fail(err => {
            console.log(err, '<<<<<< err');
        })
}