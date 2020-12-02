signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const modal = document.getElementById("modal-signup");

    try {
        const {email, password} = getSignupFormInfo();
        console.log(email,password);
    } catch (ex) {
        alert("An error ocurred trying to signup: " + ex.message);
    } finally{
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    }
});

function getSignupFormInfo(){
    
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;

    return{ email, password };
}