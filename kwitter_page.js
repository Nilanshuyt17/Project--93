const firebaseConfig = {
    apiKey: "AIzaSyAa7Pv8P7O80v6OBtRWq6j9QdSs2CVHDyU",
    authDomain: "kwitter-e658e.firebaseapp.com",
    databaseURL: "https://kwitter-e658e-default-rtdb.firebaseio.com",
    projectId: "kwitter-e658e",
    storageBucket: "kwitter-e658e.appspot.com",
    messagingSenderId: "747078179215",
    appId: "1:747078179215:web:06cf74b975a155ca5913fa"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function send(){
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name: user_name,
              message: msg,
              likes: 0
        });
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1= message_data['name'];
message = message_data['message'];
likes = message_data['likes'];

name_tag = "<h4>" + name1 + "<img class='img' src='tick.png'></h4>";
message_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning glyphicon glyphicon-thumbs-up' id="+ firebase_message_id + " value = "+ likes +  "onclick='updateLike(this.id)'> Like : " + likes + "</button> <hr>";
row = name_tag + message_tag + like_button;
document.getElementById("output").innerHTML += row;

//End code
    } });  }); }
getData();

function updateLike(message_id){
    console.log(message_id);
    button_id = message_id;
    like = document.getElementById(button_id).value;

    update_likes = Number(like) + 1;
    console.log(update_likes);

    firebase.database().ref(room_name1).child(message_id).update({
          likes : update_likes
    });
}

function logOut(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");

    window.location = "index.html";
}