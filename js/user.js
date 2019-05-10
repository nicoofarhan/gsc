$('.signoutBtn').click(function(){
    firebase.auth().signOut();
});