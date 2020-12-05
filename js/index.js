async function setupUI(user) {
    if (user) {
        if (user.admin) {
            adminItems.forEach(el => (el.style.display = "block"));
          }
        //settear la interfaz grafica
        const userCollection = (await db
            .collection('users')
            .doc(user.uid)
            .get()).data();

        const html = `
            <div><b>Correo electronico </b>${user.email}</div>
            <div><b>Nombre de usuario </b>${userCollection.bio}</div>
        `;

        accountDetails.innerHTML = html;
        loggedInMenu.forEach(menu => (menu.style.display = "block"));
        loggedOutMenu.forEach(menu => (menu.style.display = "none"));
      } else {
        // quotesUl.innerHTML += "<h3 class='center-align'>Please, login to enjoy our qoutes!</h3>"
        quotesUl.innerHTML += "<h4 class='center-align'>Porfavor inicia sesion o registrate para poder leer las experiencias de las personas que forman parte de esta comunidad!</h4><h4 class='center-align'>Tambien puedes contar una experiencia, dar algun consejo o decir lo que piensas y compartirlo con esta comunidad!</h4><h4 class='center-align'>Esta aplicacion web es muy sencilla pero funcional, creada por <b>Wilson Condori Pairumani</b> para la materia de Sistemas Operativos de la Universidad Publica de El Alto!</h4>";
        loggedInMenu.forEach(menu => (menu.style.display = "none"));
        loggedOutMenu.forEach(menu => (menu.style.display = "block"));
        adminItems.forEach(el => (el.style.display = "none"));
      }
    }

    async function setupQuotes(quotes) {
        let html = "";
        quotes.forEach(doc => {
          const quote = doc.data();
          const li = `
            <div class="card  teal accent-3">
              <div class="card-content white-text"><span class="card-title">${quote.message}</span></div>
              <div class="card-action"><a hre="#" class="teal-text text-darken-3">${quote.author}</a>
              </div>
            </div>
          `;
      
          html += li;
        });
      
        quotesUl.innerHTML = html;
      }