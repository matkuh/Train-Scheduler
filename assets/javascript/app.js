var firebaseConfig = {
    apiKey: "AIzaSyCxd7ARIkUcQXaknbqIvjqvKuwA4bu9ZLU",
    authDomain: "sage-6dfab.firebaseapp.com",
    databaseURL: "https://sage-6dfab.firebaseio.com",
    projectId: "sage-6dfab",
    storageBucket: "sage-6dfab.appspot.com",
    messagingSenderId: "552074634211",
    appId: "1:552074634211:web:5afb3e9166d61c5c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var trainName = "";
var destination = "";
var firstTrainTime = "";
var frequency = "";
var nextTrain;


$("#submit-btn").on("click", function (event) {
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

database.ref().on("child_added", function (Childsnapshot) {
    var firstTimeConvert = moment(firstTrainTime, "HH:mm").subtract(1, "years")
    var timeDif = moment().diff(moment(firstTimeConvert), "minutes")
    var tRemainder = timeDif % frequency;
    var timetillTrain = frequency - tRemainder;
    var nextTrain = moment().add(timetillTrain, "minutes").format("HH:mm")
    console.log(nextTrain)
    var row = $("<tr>")
    var trainTag = $("<th>")
    trainTag.text(Childsnapshot.val().trainName)
    var destTag = $("<th>")
    destTag.text(Childsnapshot.val().destination)
    var frequencyTag = $("<th>")
    frequencyTag.text(Childsnapshot.val().frequency)
    var arrivalTag = $("<th>")
    arrivalTag.text(nextTrain)
    var nextTag = $("<th>")
    nextTag.text(timetillTrain)

    row.append(trainTag)
    row.append(destTag)
    row.append(frequencyTag)
    row.append(arrivalTag)
    row.append(nextTag)

    $(".train-info").append(row)

}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

