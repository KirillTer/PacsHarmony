export function singUpApi(email, password) {
  console.log("Sing in api call from duck", email, password);
  //   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
  return () => {
    console.log("Sing in api call from duck", email, password);
  };
}
