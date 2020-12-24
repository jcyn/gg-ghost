import React, { useState } from "react"
import clsx from "clsx"
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  AppBar,
  Toolbar,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import "./App.css"
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import Layout from "./components/Layout"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: "100",
  },
  fullList: {
    width: "auto",
  },
}))

function App() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "หน้าแรก",
          "ที่สุดในโลก",
          "ข่าวรถยนต์",
          "หวยเด็ดเลขเด็ดงวดนี้",
          "หนังใหม่",
          "ข่าวไอที",
          "ค้นหา",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Layout>
      <Box>
        <Container
          maxWidth="lg"
          style={{ padding: "0px 6px 0px 6px", backgroundColor: "#808080" }}
        >
          <Box
            className="abcde"
            style={{
              background: "black",
              textAlign: "center",
            }}
          >
            <img
              src="https://www.xn--12c1bij4d1a0fza6gi5c.com/wp-content/uploads/2018/11/teesud-logo.png"
              alt=""
              width="50"
              height="50"
            />
          </Box>
          <Box className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: "#808080" }}>
              <Toolbar>
                {["right"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Typography variant="h6" className={classes.title}>
                      <Button
                        onClick={toggleDrawer(anchor, true)}
                        style={{ color: "antiquewhite" }}
                      >
                        MENU
                      </Button>
                    </Typography>

                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                      <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        style={{ margin: "auto", color: "antiquewhite" }}
                      >
                        <MenuIcon />
                      </IconButton>
                    </Button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </Toolbar>
            </AppBar>
          </Box>

          <Box
            component="header"
            textAlign="center"
            style={{ backgroundColor: "white" }}
          >
            <Container
              maxWidth="xl"
              style={{ backgroundColor: "#000000" }}
              disableGutters
            >
              <Container
                maxWidth="xl"
                style={{ borderBottom: "solid 1px white", border: "outset" }}
              >
                <Grid
                  container
                  spacing={2}
                  style={{
                    backgroundColor: "#00000",
                  }}
                >
                  <Grid item xs="auto">
                    <img
                      src="https://www.xn--12c1bij4d1a0fza6gi5c.com/wp-content/uploads/2018/11/teesud-logo.png"
                      alt=""
                      width="50"
                      height="50"
                    />
                  </Grid>
                  <Grid
                    item
                    xs="auto"
                    style={{
                      borderLeft: "1px solid",
                      borderRight: "1px solid",
                    }}
                  >
                    <Typography>
                      <a href="#10">
                        <font color="white">หน้าแรก</font>
                      </a>
                    </Typography>
                  </Grid>
                  <Grid item xs="auto" style={{ borderRight: "1px solid" }}>
                    <Typography>
                      <a href="#1">
                        <font color="white">ที่สุดในโลก</font>
                      </a>
                    </Typography>
                  </Grid>
                  <Grid item xs="auto" style={{ borderRight: "1px solid" }}>
                    <Typography>
                      <a href="#2">
                        <font color="white">ข่าวรถยนต์</font>
                      </a>
                    </Typography>
                  </Grid>
                  <Grid item xs="auto" style={{ borderRight: "1px solid" }}>
                    <Typography>
                      <a href="#3">
                        <font color="white">หวยเด็ดเลขเด็ดงวดนี้</font>
                      </a>
                    </Typography>
                  </Grid>
                  <Grid item xs="auto" style={{ borderRight: "1px solid" }}>
                    <Typography>
                      <a href="#4">
                        <font color="white">หนังใหม่</font>
                      </a>
                    </Typography>
                  </Grid>
                  <Grid item xs="auto" style={{ borderRight: "1px solid" }}>
                    <Typography>
                      <a href="#5">
                        <font color="white">ข่าวไอที</font>
                      </a>
                    </Typography>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography>
                      <a href="#6">
                        <font color="white">ค้นหา</font>
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
              <Container maxWidth="xl">
                <Grid container spacing={2}>
                  <Grid item xs="auto">
                    <img
                      src="https://cache.gmo2.sistacafe.com/images/uploads/summary/image/41751/3e9fea8de38ad5631fd691a1e9c54c26.jpg"
                      alt=""
                      width="400"
                      height="200"
                    />
                  </Grid>
                  <Grid item xs="auto">
                    <img
                      src="https://cache.gmo2.sistacafe.com/images/uploads/summary/image/41751/3e9fea8de38ad5631fd691a1e9c54c26.jpg"
                      alt=""
                      width="250"
                      height="100"
                    />
                    <Box>
                      <Grid container>
                        <Grid item xs={6}>
                          <img
                            src="https://cache.gmo2.sistacafe.com/images/uploads/summary/image/41751/3e9fea8de38ad5631fd691a1e9c54c26.jpg"
                            alt=""
                            width="120"
                            height="100"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <img
                            src="https://cache.gmo2.sistacafe.com/images/uploads/summary/image/41751/3e9fea8de38ad5631fd691a1e9c54c26.jpg"
                            alt=""
                            width="120"
                            height="100"
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Container>

              <Grid
                container
                spacing={2}
                style={{ flexDirection: "column-reverse" }}
              >
                <Grid item xs="auto">
                  <Typography variant="h5" style={{ textAlign: "center" }}>
                    เรื่องล่าสุด
                  </Typography>
                  <Typography variant="body2" component="p" gutterBottom>
                    <a href="#ชื่อจุดเชื่อมโยง">
                      <font color="white">ข้อความที่ปรากฎบนหน้าเว็บเพจ</font>
                    </a>
                  </Typography>
                  <Typography variant="body2" component="p" gutterBottom>
                    <a href="#ชื่อจุดเชื่อมโยง">
                      <font color="white">ข้อความที่ปรากฎบนหน้าเว็บเพจ</font>
                    </a>
                  </Typography>
                  <Typography variant="body2" component="p" gutterBottom>
                    <a href="#ชื่อจุดเชื่อมโยง">
                      <font color="white">ข้อความที่ปรากฎบนหน้าเว็บเพจ</font>
                    </a>
                  </Typography>
                  <Typography variant="body2" component="p" gutterBottom>
                    <a href="#ชื่อจุดเชื่อมโยง">
                      <font color="white">ข้อความที่ปรากฎบนหน้าเว็บเพจ</font>
                    </a>
                  </Typography>
                  <Typography variant="body2" component="p" gutterBottom>
                    <img
                      src="https://cache.gmo2.sistacafe.com/images/uploads/summary/image/41751/3e9fea8de38ad5631fd691a1e9c54c26.jpg"
                      alt=""
                      width="200"
                      height="200"
                    />
                  </Typography>
                  <Container>
                    <Typography variant="h6">
                      <a href="#aaa">
                        <font color="white">Onclick</font>
                      </a>
                    </Typography>
                    <Typography variant="h5">MENU</Typography>
                    <Typography variant="body2">
                      <a href="#aaa">
                        <font color="white">Onclick</font>
                      </a>
                    </Typography>
                    <Typography variant="body2">
                      <a href="#aaa">
                        <font color="white">Onclick</font>
                      </a>
                    </Typography>
                    <Typography variant="body2">
                      <a href="#aaa">
                        <font color="white">Onclick</font>
                      </a>
                    </Typography>
                    <Typography variant="body2">
                      <a href="#aaa">
                        <font color="white">Onclick</font>
                      </a>
                    </Typography>
                    <Typography variant="body2">
                      <a href="#aaa">
                        <font color="white">Onclick</font>
                      </a>
                    </Typography>
                    <Typography variant="h5">FollowMe</Typography>
                    <Grid>
                      <Link href="#" target="_blank" width="100px">
                        <IconButton aria-label="user">
                          <FacebookIcon style={{ color: "blue" }} />
                        </IconButton>
                      </Link>
                    </Grid>
                  </Container>
                </Grid>
                <Container>
                  <Grid
                    container
                    style={{
                      borderBottom: "solid grey",
                      backgroundColor: "white",
                    }}
                  >
                    <Box pt={2} pl={5}>
                      <Grid container>
                        <Typography
                          variant="h5"
                          component="p"
                          gutterBottom
                          align="left"
                          style={{ color: "black", fontFamily: "sans-serif" }}
                        >
                          LATEST
                        </Typography>
                      </Grid>
                    </Box>
                  </Grid>

                  <Container
                    maxWidth="xl"
                    style={{
                      borderBottom: "solid grey",
                      backgroundColor: "black",
                    }}
                  >
                    <Grid container>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <img
                            src="https://cache.gmo2.sistacafe.com/images/uploads/summary/image/41751/3e9fea8de38ad5631fd691a1e9c54c26.jpg"
                            alt=""
                            width="120"
                            height="50"
                          />
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={8}
                        style={{
                          wordBreak: "break-word",
                          alignSelf: "center",
                          textAlign: "start",
                        }}
                      >
                        <Typography variant="body2" component="p">
                          <font color="whith">
                            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                          </font>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Container>
                  <Container
                    maxWidth="xl"
                    style={{
                      borderBottom: "solid grey",
                      backgroundColor: "black",
                    }}
                  >
                    <Grid container>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <img
                            src="https://cache.gmo2.sistacafe.com/images/uploads/summary/image/41751/3e9fea8de38ad5631fd691a1e9c54c26.jpg"
                            alt=""
                            width="120"
                            height="100"
                          />
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={8}
                        style={{
                          wordBreak: "break-word",
                          alignSelf: "center",
                          textAlign: "start",
                        }}
                      >
                        <Typography variant="body2" component="p">
                          <font color="whith">
                            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                          </font>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Container>
                  <Container
                    maxWidth="xl"
                    style={{
                      borderBottom: "solid grey",
                      backgroundColor: "black",
                    }}
                  >
                    <Grid container>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <img
                            src="https://cache.gmo2.sistacafe.com/images/uploads/summary/image/41751/3e9fea8de38ad5631fd691a1e9c54c26.jpg"
                            alt=""
                            width="120"
                            height="100"
                          />
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={8}
                        style={{
                          wordBreak: "break-word",
                          alignSelf: "center",
                          textAlign: "start",
                        }}
                      >
                        <Typography variant="body2" component="p">
                          <font color="whith">
                            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                          </font>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Box>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ float: "right", marginTop: "15px" }}
                      >
                        หน้าต่อไป
                      </Button>
                    </Box>
                  </Container>
                </Container>
              </Grid>
            </Container>
          </Box>
          <Box
            component="footer"
            textAlign="center"
            borderTop="solid black"
            style={{ backgroundColor: "currentcolor", paddingBottom: "25px" }}
          >
            <Container maxWidth="xl">
              <Box pt={4} flexDirection="column">
                <Grid container spacing={1}>
                  <Grid item xs="auto">
                    COPYRIGHT © 2020
                  </Grid>
                  <Grid item xs="auto">
                    <a href="#111">
                      <font color="white">หน้าแรก</font>
                    </a>
                  </Grid>
                  <Grid item xs="auto">
                    <a href="#111">
                      <font color="white">ราคา</font>
                    </a>
                  </Grid>
                  <Grid item xs="auto">
                    <a href="#111">
                      <font color="white">ติดต่อเรา</font>
                    </a>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default App
