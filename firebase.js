import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyATE401d18wPjf-kT_HM8aTpdIikgh7PqA",
    authDomain: "twitterpj-1c0c3.firebaseapp.com",
    projectId: "twitterpj-1c0c3",
    storageBucket: "twitterpj-1c0c3.appspot.com",
    messagingSenderId: "7730711967",
    appId: "1:7730711967:web:7fc892fd830921312541aa",
    measurementId: "G-X6DPEPYZNV"
    }
  )
}
  
export default firebase