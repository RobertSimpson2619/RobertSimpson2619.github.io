
// Initialize Firebase
//*******************************************************************
 var config = {
    apiKey: "AIzaSyAWuiES3sNTNNfcBm0u1A8FLqv6FLzoEl8",
    authDomain: "newportfolio-fef8d.firebaseapp.com",
    databaseURL: "https://newportfolio-fef8d.firebaseio.com",
    projectId: "newportfolio-fef8d",
    storageBucket: "",
    messagingSenderId: "497771732409"
  };
firebase.initializeApp(config);

var database = firebase.database();



var nameInput = "";
var emailInput = "";
var commentInput = "";











$("#submitButton").on("click", function(){


	nameInput = $("#nameInput").val().trim();
	emailInput = $("#emailInput").val().trim();
	commentInput = $("#commentInput").val().trim();

    alert("Thank you! Your Message has been sent!");


	database.ref().set({
    name: nameInput,
    email: emailInput,
    comment: commentInput
  })

	
})