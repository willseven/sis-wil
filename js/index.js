async function setupID(user) {
    if (user) {
        //settear la interfaz grafica
        const userCollection = (await db
            .collection('users')
            .doc(user.uid)
            .get()).data();

        const html = `
            <div><strong>Logged in as </strong>${user.email}</div>
            <div><strong>Logged in as </strong>${userCollection.bio}</div>
        `;

        accountDetails.innerHTML = html;

        loggedInMenu.forEach((menu) => (menu.style.display = "block"));
        loggedOutMenu.forEach((menu) => (menu.style.display = "none"));
    } else {
        loggedInMenu.forEach((menu) => (menu.style.display = "none"));
        loggedOutMenu.forEach((menu) => (menu.style.display = "block"));
    }
}