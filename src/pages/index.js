import * as React from "react"
import { GlobalStyle } from "../styles"
import Seo from "../components/Seo"
import Header from "../components/Header"
import About from "../components/About"
import Start from "../components/Start"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Seo />
      <Header />
      <About />
      <Start />
      <Footer />
    </>
  )
}

export default IndexPage
