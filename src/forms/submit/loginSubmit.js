// import { SubmissionError } from "redux-form";
import firebase from "firebase";

function loginSubmit({ email, password }) {
  console.log("Start Login submitting", email, password);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log("Auth - ", user.user.uid);
      localStorage.setItem("token", user.user.uid);
      return user;
    })
    .catch(error => {
      console.error(error);
    });
}

export default loginSubmit;
