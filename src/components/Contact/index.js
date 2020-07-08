import React from "react";
import { makeStyles, Container, AppBar, Typography, Box, Link } from "@material-ui/core";
import Title from "../Title";

const useStyles = makeStyles(theme => ({
    root: {
        background: "#191919",
        paddingTop: theme.spacing(10),
        "& .MuiDivider-root": {
            background: "#fff"
        },
        "& .MuiLink-root": {
            textDecoration: "none",
            color: "#fff"
        }
    },
    networks: {
        display: "flex",
        justifyContent: "flex-end",
        "@media (max-width: 600px)": {
            justifyContent: "flex-start"
        },
        "& .MuiLink-root": {
            textDecoration: "none",
            position: "relative",
            "&:after": {
                content: "''",
                height: "1px",
                borderRadius: "4px",
                position: "absolute",
                width: "100%",
                background: "white",
                bottom: -5,
                left: 20,
                right: -20,
                transform: "scale(0)",
                transition: "transform .4s",
            },
            "&:hover:after": {
                transform: "scale(1)",
            },
        }
    },
    networksItem: {
        marginLeft: theme.spacing(4),
        "@media (max-width: 600px)": {
            marginLeft: theme.spacing(0),
            marginRight: theme.spacing(4)
        }
    },
    footer: {
        background: "#191919",
        color: "#fff",
        display: "flex",
        justifyContent: "center"
    }
}));

export default function Contact() {
    const classes = useStyles();

    return (
        <div id="contact">
            <AppBar position="static" className={classes.root}>
                <Container maxWidth="md">
                    <Title>
                        <Typography>Contact</Typography>
                    </Title>
                    <Box className={classes.contact}>
                        <Typography variant="h6">Tel: +1 917-543-4894</Typography>
                        <Link href="mailto:me@victoirebaron.com" target="_blank">
                            <Typography variant="h6">Email: me(at)arayanawrath.com</Typography>
                        </Link>
                        <Box mt={5} className={classes.networks}>
                            <Link href="https://www.linkedin.com/in/araya-nawrath-31268237/" target="_blank">
                                <Typography variant="h6" className={classes.networksItem}>LinkedIn</Typography>
                            </Link>
                            <Link href="https://github.com/My-unicorn" target="_blank">
                                <Typography variant="h6" className={classes.networksItem}>Github</Typography>
                            </Link>
                            <Link href="https://drive.google.com/file/d/1d24KyjjluSlNm0yiuR1uEUV4R4c32LTY/view" target="_blank">
                                <Typography variant="h6" className={classes.networksItem}>Resume</Typography>
                            </Link>
                        </Box>
                    </Box>
                    <Box pt={20} pb={5} className={classes.footer} >
                        <Typography>© 2020 Araya nawrath</Typography>
                    </Box>
                </Container>
            </AppBar>
        </div >
    )
}