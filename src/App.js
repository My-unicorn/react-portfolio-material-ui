import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
//import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { Helmet } from "react-helmet";
import FaviconSvg from "./assets/favicon.svg";
import FaviconPng from "./assets/favicon.png";
import { makeStyles } from "@material-ui/core/styles";


const theme = createMuiTheme({
  spacing: 5,
  breakpoints: {
    values: {
      md: 1100
    }
  }
})
const useStyles = makeStyles(theme => ({
  body: {
    boxSizing: "border-box"
  }
}))

export default function App() {
  const classes = useStyles()

  return (
    <div>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Poiret+One&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href={FaviconSvg} />
        <link rel="icon" type="image/png" href={FaviconPng} />
        <title>Araya Nawrath</title>
        <meta name="author" content="Araya Nawrath <me@arayanawrath.com>" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Araya Nawrath, web developer based in New York City" />
        <body className={classes.body} />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Header />
       <Works /> 
        <About />
        <Skills />
        <Contact />
      </ThemeProvider>
    </div>
  )
}