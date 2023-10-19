import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Nav from "../components/Nav"

const Layout = (props) => {
    return (
      <>
        <Header/>
        <Nav />
        <main>{props.children}</main>
        <Footer/>
      </>
    )
  }
  
  export default Layout;