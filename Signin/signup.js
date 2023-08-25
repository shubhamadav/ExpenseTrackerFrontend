function signup(e) {
    e.preventDefault();
    const form = new FormData(e.target);

    const signupDetails = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
    }

    console.log(signupDetails);

    axios.post('http://localhost:3000/user/signup', signupDetails)
        .then(response => {
            if (response.status === 201) {
                window.location.href = "../Login/login.html"; // change the page on successful signup
            } else {
                throw new Error('Failed to signup');
            }
        })
        .catch(err => {
            document.body.innerHTML += `<div style="color:red;">${err}</div>`;
        });
}
