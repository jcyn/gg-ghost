import React from "react"
import { Box } from "@material-ui/core"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <Box style={{ backgroundColor: "#808080" }}>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default Layout
