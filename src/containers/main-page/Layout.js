import React from "react";
import Container from '@material-ui/core/Container';

import Navigation from "./Navigation";

const Layout = ({ children }) => (
  <>
    <Navigation />
    <Container fixed>{children}</Container>
  </>
);

export default Layout;
