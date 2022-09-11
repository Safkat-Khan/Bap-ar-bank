
document.getElementById('btn-submit').addEventListener('click',function(){
    console.log('Submit Button clicked');
   // alert('Submit Button clicked');
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);

    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    console.log(pass);

})