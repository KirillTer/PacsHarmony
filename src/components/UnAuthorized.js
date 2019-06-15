import React from "react";
import { Link } from "react-router-dom";

const UnAuthorized = () => {
  return <h1>You are UnAuthorized. Go to <Link to='/'>Login</Link></h1>
};

export default UnAuthorized;