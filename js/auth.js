signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const modal = document.getElementById("modal-signup");

    try {
        const {email, password} = getSignupFormInfo();
        await signup(email, password);
        console.log('user created');
    } catch (ex) {
        alert("An error ocurred trying to signup: " + ex.message);
    } finally{
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    }
});

//para signup
function getSignupFormInfo(){
    
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;

    return{ email, password };
}
//para login
function getLoginFormInfo(){
    
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;

    return{ email, password };
}

//metodos
async function signup(email, password){
    const creds = await auth.createUserWithEmailAndPassword(email, password);
    //aqui es donde vamos a la coleccion de la base de datos 
    return db
    .collection("users")
    .doc(creds.user.uid)
    .set({
        bio: signupForm["signup-bio"].value
    });
}

async function login(email, password){
    return await auth.signInWithEmailAndPassword(email, password);
}

async function logout(){
    return await auth.signOut();
}

logoutButton.addEventListener("click", async (event) => {
    event.preventDefault();
    await logout();
    console.log('User logged out!');
})

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const modal = document.getElementById("modal-login");

    try {
        const {email, password} = getLoginFormInfo();
        await login(email, password);
        console.log('user logged in');
    } catch (ex) {
        alert("An error ocurred trying to signup: " + ex.message);
    } finally{
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    }
});