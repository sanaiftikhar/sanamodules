

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
  var admins;
  firebase.database().ref("admins").on('value', function(data){
   admins= data.val();
    if(document.getElementById('adminValue')!= null){
    for(const admin in admins){
      document.getElementById('fname').innerHTML+=
      `<p style=" "> ${admins[admin].firstName} </p>`;
      document.getElementById('lastname').innerHTML+=
      `<p style=""> ${admins[admin].lastName} </p>`;
      document.getElementById('adminVal').innerHTML+=
      `<p style=""> ${admins[admin].email} </p>`;
      document.getElementById('mobileNumber').innerHTML+=
      `<p style=""> ${admins[admin].mobileNumber} </p>`;
    }}
  })



  firebase.database().ref("songs/").on("value", function(snapshot) {
    //console.log("There are "+snapshot.numChildren()+" messages");
    document.getElementById('songsCount').innerHTML+=snapshot.numChildren();
  })
  firebase.database().ref("users").on("value", function(snapshot) {
    //console.log("There are "+snapshot.numChildren()+" messages");
    document.getElementById('userCount').innerHTML+=snapshot.numChildren();
  })
  
  // firebase.database().ref("users").on('value', function(data){
  //   const admins= data.val();
  //   document.getElementById('userVal').innerHTML='';
  //   for(const admin in admins){
  //     document.getElementById('userVal').innerHTML+=
 
  //     `<td> ${admins[admin].name} </td>`  ;
  //     document.getElementById('username').innerHTML+=
  //     `<td> ${admins[admin].username} </td>`  ;
  //   }
  // })
  $(document).ready(function(){
    var ref=firebase.database().ref().child("users/");

    ref.on("child_added", snap=>{
      var key  = snap.key;
      console.log(key);
      var name=snap.child("email").val();
      var username=snap.child("username").val();
      var feedback= snap.child("feedback").val();
    
      $("#tableBody").append("<tr><td>" + name +"</td><td>" +username+"</td><td>"+feedback);
      //+
      // "</td><td>button> "+delete+" </button></td></tr>"
      //'<button id="1" onClick="alert("thtrhtrf")">Delete</button></td></tr>');
      //$("#tableBody").append('<button onClick="reply_click(' + key + ')">Delete</button></td></tr>');

     // "</td><td><button onClick='firebase.database().ref('users').child(key).remove();'>Delete this user</button></td></tr>");
      // userRef.remove()
      
      // delete()
      // '>Delete this user</button></td></tr>");
    })
  })
//   function deleteRecord(y){     
//     var refDB = firebase.database().ref('users/' + snap.key);
//     refDB.remove()
//     .then(function() {
//       console.log("Remove succeeded.")
//     })
//     .catch(function(error) {
//       console.log("Remove failed: " + error.message)
//     });
// } 

$("#tableBody").on('click', '.delete-btn', function () {
  var studentFirebaseRef = firebaseRef.child($(this).data('id'));
  console.log('this on delete-btn is: ' + $(this).data('id'));
  firebaseRef.on('child_removed', function (snapshot) {
      /** Remove the element from the DOM */
      console.log('snapshot.key is: ', snapshot.key());
      var rowId = snapshot.key();
      $('#' + rowId).remove();
  });
  // Delete the student with the correct firebase method
  studentFirebaseRef.remove();
});



  function reply_click(){
    console.log("it goes to this function");
    // var key  = snap.key;
    firebase.database().ref.child( key).remove();
  alert("user deleted");
  }

  $(document).ready(function(){
    var ref=firebase.database().ref().child("songs");
    ref.on("child_added", snap=>{
      var songTitle= snap.child("meta/title").val();
      var album=snap.child("meta/album").val();
      var artist= snap.child("meta/artists").val();
      var url=snap.child("download_url").val();
      $("#songTableBody").append("<tr><td>" + songTitle+"</td><td>" +album +"</td><td>"+artist+"</td><td>"+url
      // "</td><td><button onClick='delete()'>Rem</button></td></tr>"
      );
    })
  })
  function del(){
firebase.database().ref("/users/").remove();
  }


  // function reset(){
  //   document.getElementById("").innerHTML=`
  //   <form id="form>
  //   <label for="fname">Email:</label><br>
  //   <input type="text" id="email" name="email" value="$()"><br>
    
  //   <button type="submit" value="Submit">
  //   </form>`;
  //   document.getElementById("form").addEventListener("submit", function(e){
  //     var email= document.getElementById("email").nodeValue;
  //     e.preventDefault();
  //     createTask();
  //     form.reset();
  //   })
  // }
  // function updateTask(){

  // }
  function update(){

const fb = firebase.database().ref('/admins/');
firstName=document.getElementById("firstname").value;
lastName=document.getElementById("lname").value;
mobileNumber=document.getElementById("mobileNumber").value;
data={firstName, lastName, mobileNumber}
fb.child('/-M9Sc_UeSEr2D5Wk_lqk').update(data);
alert("Admin Information has been updated");
//fb.orderByChild("-M9Sc_UeSEr2D5Wk_lqk/firstName").equalTo(oldval).update(data);
  //}
  

}
//)
  //}
  

  
