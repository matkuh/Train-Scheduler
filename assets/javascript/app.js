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
  
  $("#submit-btn").on("click", function(event){
    event.preventDefault();
    trainName = $("#train-name").val().trim();
    destination = $("#train-dest").val().trim();
    firstTrainTime = $("#first-train").val().trim();
    frequency = $("#frequency-input").val().trim();
      console.log(trainName);
      console.log(destination);
      console.log(firstTrainTime);
      console.log(frequency);
    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,
    });
});

database.ref().on("child_added", function(Childsnapshot){
  $(".train-info").append("<tr><td>" +Childsnapshot.val().trainName +"</td><td>" +Childsnapshot.val().destination +"</td><td>"
  +Childsnapshot.val().frequency +"</td><td></td><td>" + Childsnapshot.val().rateA +"</td></tr>");
}, function(errorObject) {
    console.log("Errors handled: " +errorObject.code);
});
