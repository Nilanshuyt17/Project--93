var firebaseConfig = {
    apiKey: "AIzaSyAa7Pv8P7O80v6OBtRWq6j9QdSs2CVHDyU",
    authDomain: "kwitter-e658e.firebaseapp.com",
    databaseURL: "https://kwitter-e658e-default-rtdb.firebaseio.com",
    projectId: "kwitter-e658e",
    storageBucket: "kwitter-e658e.appspot.com",
    messagingSenderId: "747078179215",
    appId: "1:747078179215:web:06cf74b975a155ca5913fa"
  };
  
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! ";

    function room_Name(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"});
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id = "+Room_names+" onclick= 'redirecttoRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirecttoRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logOut(){
  window.location = "index.html";
}