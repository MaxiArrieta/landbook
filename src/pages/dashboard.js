import React from "react"
import Dashboard from "../components/Dashboard"
import Seo from "../components/Seo"
import { GlobalStyle } from "../styles"

const DashboardPage = () => {
  return (
    <>
      <Seo />
      <GlobalStyle />
      <Dashboard />
    </>
  )
}

export default DashboardPage
