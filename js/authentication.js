// gue
$('.gotosignupBtn').click(function(){
    $('#signInPage').css('transform','translateX(-100vw)');
    $('#signUpPage').css('transform','translateX(0)');
});

$('.gotosigninBtn').click(function(){
    $('#signInPage').css('transform','translateX(0)');
    $('#signUpPage').css('transform','translateX(100vw)');
});


$('.signinBtn').click(function(e){
	e.preventDefault();
	var inputEmail = $('.inputEmail').val();
	var inputPass = $('.inputPass').val();
	firebase.auth().signInWithEmailAndPassword(inputEmail, inputPass)
	.catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		alert('Email atau Password salah');
		// ...
	  });
});



    
$('.signupBtn').click(function(e){
    e.preventDefault();  
    var inputEmailsup = $('.inputEmailsup').val();
    var inputPasssup = $('.inputPasssup').val();
    var inputNama = $('.inputNamasup').val();
    var inputNomor = $('.inputNomorsup').val(); 
    firebase.database().ref('users/').set({
        email:inputEmailsup,
        nama:inputNama,
        nomor:inputNomor
    });
    firebase.auth().createUserWithEmailAndPassword(inputEmailsup, inputPasssup);
});


firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
         window.location = "../landing.html";
	  // User is signed in.
	  alert('welcome');
	} 
  });

  