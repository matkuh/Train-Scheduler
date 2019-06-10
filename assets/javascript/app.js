var firebaseConfig = {
    apiKey: "AIzaSyB262t6Ap-dXTJNpsiPZSiM9UeHsE7b9ZM",
    authDomain: "mattproject-3cf8d.firebaseapp.com",
    databaseURL: "https://mattproject-3cf8d.firebaseio.com",
    projectId: "mattproject-3cf8d",
    storageBucket: "mattproject-3cf8d.appspot.com",
    messagingSenderId: "957094050232",
    appId: "1:957094050232:web:054f3e7c71d47912"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var trainName = "";
  var destination = "";
  var firstTrainTime= "";
  var frequency = "";
  