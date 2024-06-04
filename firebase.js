function(){
  const firebaseConfig = {
    apiKey: "AIzaSyAbXVR-MlPncLTK0bfBSVLjVfI9Qcoh2cI",
    authDomain: "teste1-f438a.firebaseapp.com",
    databaseURL: "https://teste1-f438a-default-rtdb.firebaseio.com",
    projectId: "teste1-f438a",
    storageBucket: "teste1-f438a.appspot.com",
    messagingSenderId: "221251550216",
    appId: "1:221251550216:web:58f7167922c4a97e6a65bd",
    measurementId: "G-BHKS5BHKRF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getdatabase();

}
