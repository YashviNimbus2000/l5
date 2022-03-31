const firebaseConfig = {
  apiKey: "AIzaSyCFUTqBR13kWPX8OnrHX5MF4SnquvKmEmM",
  authDomain: "c-96-3488b.firebaseapp.com",
  databaseURL: "https://c-96-3488b-default-rtdb.firebaseio.com",
  projectId: "c-96-3488b",
  storageBucket: "c-96-3488b.appspot.com",
  messagingSenderId: "857373123068",
  appId: "1:857373123068:web:41218ade778718f438d279"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) 
  { 
    document.getElementById("output").innerHTML = ""; 
     snapshot.forEach(function(childSnapshot) 
     { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location ="index.html";
}
