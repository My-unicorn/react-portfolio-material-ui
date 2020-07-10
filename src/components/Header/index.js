import React, { useState, useEffect, useRef } from "react";
import { Container, makeStyles, Typography, Link } from "@material-ui/core";
import SocialNetwork from "../SocialNetwork";
import { motion } from "framer-motion";
import NavBar from "../NavBar"

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        position: "relative",
        background: "#fafafa"
    },
    toolbar: {
        paddingRight: 0,
        paddingLeft: 0,
        width: "100vw",
        display: "flex",
        justifyContent: "center"
    },
    logo: {
        height: theme.spacing(9),
        fill: "#000",
        "&:hover": {
            fill: "#bdbdbd",
            cursor: "pointer"
        }
    },
    description: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        "& .MuiLink-root": {
            color: "grey",
            position: "relative",
            textDecoration: "none",
            "&:after": {
                content: "''",
                height: "1px",
                borderRadius: "4px",
                position: "absolute",
                width: "100%",
                background: "grey",
                bottom: -5,
                left: 0,
                transform: "scale(1)",
                transition: "transform .4s",
            },
            "&:hover:after": {
                transform: "scale(0)",
            },
        },
        "@media (max-width: 600px)": {
            padding: theme.spacing(0, 7)
        },
        "& .MuiTypography-root": {
            fontFamily: "'Poiret One', cursive",
            fontSize: theme.spacing(10),
            fontWeight: 800,
            "@media (max-width: 600px)": {
                fontSize: theme.spacing(5)
            }
        }
    },
    navbar: props => ({
        width: "100%",
        zIndex: 100,
        position: props.isSticky ? "fixed" : "initial",
        top: props.isSticky ? 0 : "",
        background: "#fafafa",
    }),
    networks: {
        position: "absolute",
        right: 0,
        left: 0,
        display: "flex",
        justifyContent: "flex-end",
        padding: theme.spacing(14, 0, 0, 0),
        "@media (max-width: 600px)": {
            padding: theme.spacing(12, 7, 0, 7)
        },
    },
    underline: {
        width: "100%",
        height: "1px",
        borderRadius: "4px",
        background: "black",
        position: "absolute",
        bottom: "-3px"
    }
}))


export default function Header() {
    const [isSticky, setSticky] = useState(false);
    const classes = useStyles({ isSticky: isSticky });
    const menuRef = useRef(null)

    const description = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 }
    }

    const handleScroll = () => {
        if (menuRef.current) {
            setSticky(menuRef.current.getBoundingClientRect().top <= 0);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', () => handleScroll)
        }
    }, [])

    return (
        <div id="header" className={classes.root}>
            {/* <div ref={menuRef} style={{ position: "absolute", bottom: "70px", height: "64px" }}>
                <NavBar isSticky={isSticky} />
            </div> */}
            <Container maxWidth="md" className={classes.networks}>
                <SocialNetwork />
            </Container>
            <Container maxWidth="md" style={{ height: "100%", padding: 0 }}>
                <motion.div initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.7 }}
                    variants={description}
                    className={classes.description}>
                    <Typography>I'm Araya Nawrath. </Typography>
                    <Typography>Front End Developer based in New York City.</Typography>
                    <Typography>Here check <Link href="https://www.arayanawrath.com" target="_blank" className={classes.link} >this website</Link>.</Typography>
                </motion.div>
            </Container >
            
        </div >
    );
}

