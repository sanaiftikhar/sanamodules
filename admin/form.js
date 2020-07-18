  var firebaseConfig =
   {
    apiKey: "AIzaSyAVGL_voemAwpCQmnIkCghtrt6XIJ8egFE",
    authDomain: "worm-8701c.firebaseapp.com",
    databaseURL: "https://worm-8701c.firebaseio.com",
    projectId: "worm-8701c",
    storageBucket: "worm-8701c.appspot.com",
    messagingSenderId: "132329432190",
    appId: "1:132329432190:web:0f615200b46a738617a42f",
    measurementId: "G-60R1TQ6FG6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // document.getElementById('formreg').addEventListener('submit', function(e){
  //     e.preventDefault();
  //     var email1= document.getElementById("email");
  //     var password1= document.getElementById("password");
  //     var first1= document.getElementById("FirstName");
  //     var last1= document.getElementById("LastName");
  //     firebase.auth().createUserWithEmailAndPassword(email1.value , password1.value)
  //     .then(function(resp){
  //       console.log(resp);
  //         firebase.database().ref('admins').push({
  //           userId:firebase.auth().currentUser.uid,
  //             firstName: first1.value,
  //             lastName:last1.value,
  //             email:firebase.auth().currentUser.email})
  //             //firebase.auth().signOut();
  //               email1.value='';
  //              password1.value='';
  //              first1.value='';
  //             last1.value=''; 
  //           //   if(user) {
  //           //     window.location = 'index.html'; //After successful login, user will be redirected to home.html
  //           //   }      
  //     })
  //     .catch(function(error){
  //         var err= error.message;
  //         console.log(err);
  //         //console.log(error.code);
  //     })      
  // });

document.getElementById("formlogin").addEventListener('submit', function(e){
  e.preventDefault();
  var email= document.getElementById("email").value;
  var password= document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  // .then(function(success){
  //   swal({
  //         type: 'successfull',
  //         title: 'Succesfully signed in', 
  //     })
      .then((value) => {
            setTimeout(function(){
                window.location.replace("index.html");
            }, 1000).catch(function(error){
alert("err")
            })
  });
});



//                           var ref = firebase.database().ref();
// ref.child("admins").on("value", function(snapshot) {
//   console.log("There are "+snapshot.numChildren()+" messages");
// })