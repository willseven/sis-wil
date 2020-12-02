  var firebaseConfig = {
      //apikey solo debemos verlo nosotros
    apiKey: "AIzaSyAb5ILYCfjg50d-245eDE8jG2aZXFmRVuE",
    authDomain: "wil-sistemas-operativos.firebaseapp.com",
    databaseURL: "https://wil-sistemas-operativos.firebaseio.com",
    projectId: "wil-sistemas-operativos"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const func = firebase.functions();


  