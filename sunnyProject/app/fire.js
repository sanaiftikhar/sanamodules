import * as firebase from 'firebase';
//import uuid from 'uuid';
const firebaseConfig = {
    apiKey: "AIzaSyAVGL_voemAwpCQmnIkCghtrt6XIJ8egFE",
    authDomain: "worm-8701c.firebaseapp.com",
    databaseURL: "https://worm-8701c.firebaseio.com",
    projectId: "worm-8701c",
    storageBucket: "worm-8701c.appspot.com",
    messagingSenderId: "132329432190",
    appId: "1:132329432190:web:0f615200b46a738617a42f",
    measurementId: "G-60R1TQ6FG6"
  };

  // firebase.initializeApp(firebaseConfig);
  
  // export default firebase;

  const a= firebase.initializeApp(firebaseConfig);
  export const db=a.database();


  // class Fire {
  //   constructor() {
  //     if (!firebase.apps.length) {
  //       firebase.initializeApp(config);
  //     } else {
  //       console.log("firebase apps already running...")
  //     }
  //   }
  
  //   login = async(user, success_callback, failed_callback) => {
  //     console.log("logging in");
  //     const output = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  //     .then(success_callback, failed_callback);
  //   }
  
  //   observeAuth = () =>
  //     firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  
  //   onAuthStateChanged = user => {
  //     if (!user) {
  //       try {
  //         this.login(user);
  //       } catch ({ message }) {
  //         console.log("Failed:" + message);
  //       }
  //     } else {
  //       console.log("Reusing auth...");
  //     }
  //   };
  
  //   createAccount = async (user) => {
  //     firebase.auth()
  //       .createUserWithEmailAndPassword(user.email, user.password)
  //       .then(function() {
  //         console.log("created user successfully. User email:" + user.email + " name:" + user.name);
  //         var userf = firebase.auth().currentUser;
  //         userf.updateProfile({ displayName: user.name})
  //         .then(function() {
  //           console.log("Updated displayName successfully. name:" + user.name);
  //           alert("User " + user.name + " was created successfully. Please login.");
  //         }, function(error) {
  //           console.warn("Error update displayName.");
  //         });
  //       }, function(error) {
  //         console.error("got error:" + typeof(error) + " string:" + error.message);
  //         alert("Create account failed. Error: "+error.message);
  //       });
  //   }
       
  //   onLogout = user => {
  //     firebase.auth().signOut().then(function() {
  //       console.log("Sign-out successful.");
  //     }).catch(function(error) {
  //       console.log("An error happened when signing out");
  //     });
  //   }
  
  //   get uid() {
  //     return (firebase.auth().currentUser || {}).uid;
  //   }
  
  //   get ref() {
  //     return firebase.database().ref('Messages');
  //   }
  
  //   parse = snapshot => {
  //     const { timestamp: numberStamp, text, user } = snapshot.val();
  //     const { key: id } = snapshot;
  //     const { key: _id } = snapshot; //needed for giftedchat
  //     const timestamp = new Date(numberStamp);
  
  //     const message = {
  //       id,
  //       _id,
  //       timestamp,
  //       text,
  //       user,
  //     };
  //     return message;
  //   };
  
  //   refOn = callback => {
  //     this.ref
  //       .limitToLast(20)
  //       .on('child_added', snapshot => callback(this.parse(snapshot)));
  //   }
  
  //   get timestamp() {
  //     return firebase.database.ServerValue.TIMESTAMP;
  //   }
    
  //   // send the message to the Backend
  //   send = messages => {
  //     for (let i = 0; i < messages.length; i++) {
  //       const { text, user } = messages[i];
  //       const message = {
  //         text,
  //         user,
  //         createdAt: this.timestamp,
  //       };
  //       this.ref.push(message);
  //     }
  //   };
  
  //   refOff() {
  //     this.ref.off();
  //   }
  // }
  

// current user signed in
// if (firebase.auth().currentUser) {
//   userId = firebase.auth().currentUser.uid;
//   if (userId) {
//       firebase.database().ref('users/' + userId).set({
//           firstName: firstName,
//           lastName: lastName,
//           email: email,
//           code: code
//       })
//   }
// }



//   function storeHighScore(userId, score) {
//     firebase.database().ref('users/' + userId).set({
//       highscore: score
//     });
//   };

//   function setupHighscoreListener(userId) {
//     firebase.database().ref('users/' + userId).on('value', (snapshot) => {
//       const highscore = snapshot.val().highscore;
//       console.log("New high score: " + highscore);
//     });
//   }