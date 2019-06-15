// import { SubmissionError } from "redux-form";
import firebase from "firebase";

function singUpSubmit({ email, password }) {
  console.log("Start SingUp submitting", email, password);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log('Auth - ', user.user.uid)
      localStorage.setItem('token', user.user.uid)
      return user;
    })
    .catch(error => {
      console.error(error);
    });
  // return fetch("https://facebook.github.io/react-native/movies.json", {
  //   method: 'POST',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify(values)
  // })
  //   .then(response => response.json())
  //   .then(responseJson => {
  //     return responseJson.movies;
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
}

export default singUpSubmit;
