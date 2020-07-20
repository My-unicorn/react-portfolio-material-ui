import React from "react";
import { Container, Typography, Box, makeStyles, Button } from "@material-ui/core/";
import Card from "../Card";
import budgetTracker from "../Works/assets/budgetTracker.png";
import burger from "../Works/assets/burger.png";
import noteTaker from "../Works/assets/noteTaker.png";
import books from "../Works/assets/books.png";
import codeQuiz from "../Works/assets/codeQuiz.png";
import weatherDashboard from "../Works/assets/weatherDashboard.png";
import dayPlanner from "../Works/assets/dayPlanner.png";
import passwordGenerator from "../Works/assets/passwordGenerator.png";
import projectTwo from "../Works/assets/projectTwo.png";
import projectone from "../Works/assets/projectone.png";
import booksearch from "../Works/assets/booksearch.png";
import employeeDirectory from "../Works/assets/employeeDirectory.png";
//import Title from "../Title";

const useStyles = makeStyles(theme => ({
    root: {
        background: "#f2f2f2",
        minHeight: `calc(100vh - ${theme.spacing(35)}px)`,
        padding: theme.spacing(20, 0, 15, 0),
        "@media (max-width: 600px)": {
            padding: theme.spacing(14, 0, 5, 0),
        },
        "& Button:nth-child(n+2)": {
            marginLeft: theme.spacing(5)
        },
    },
    card: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    "@global": {
        ".MuiBox-root-281": {
            [theme.breakpoints.down(680)]: {
                display: "flex",
                justifyContent: "center"
            }
        }
    },
}));


function arrayEquals(array1, array2) {
    return array1.length === array2.length && array1.every(value => array2.includes(value))
}

function Works() {
    const classes = useStyles()

    const all = ['projects', 'team']
    const [categoriesToShow, setCategoriesToShow] = React.useState(all)

    // const Title = {
    //    visible: { opacity: 1, x: 0 },
        // hidden: { opacity: 0, x: -40 }
    // }
    return (
        <div id="works" className={classes.root}>
            <Container maxWidth="md">
                {/* <Title> */}
                    <Typography>Works</Typography>
                {/* </Title> */}
                <div mb={10} style={{ paddingBottom: "20px" }} >
                    <Button onClick={() => setCategoriesToShow(all)} disabled={arrayEquals(categoriesToShow, all)}>Show all</Button>
                    <Button onClick={() => setCategoriesToShow(["projects"])} disabled={arrayEquals(categoriesToShow, ["projects"])}>Projects</Button>
                    <Button onClick={() => setCategoriesToShow(["team"])} disabled={arrayEquals(categoriesToShow, ["team"])}>Team projects</Button>
                </div>
                <Box className={classes.card}>
                    {(categoriesToShow.includes("projects") ? <Card
                        image={booksearch}
                        title="Books-search"
                        alt="Books-search"
                        text="this app search for Books provide Google API, you can search for you perfect books"
                        tools="React.js, Bootstrap react & Full Stack app"
                        github="https://github.com/My-unicorn"
                        heroku="https://intense-stream-98735.herokuapp.com/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={employeeDirectory}
                        title="employeeDirectory"
                        alt="Employee-Directory"
                        text="Employee-Durectory App: As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information. "
                        tools="React.js & Bootstrap React"
                        github="https://github.com/My-unicorn/employee-directory-app"
                        heroku="https://employeetodo-directory.herokuapp.com/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("team") ? <Card
                        image={projectone}
                        title="projectone"
                        alt="projectone"
                        text="Date Night App: Search for Reasturants and Movies"
                        tools="JavaScript and Third party API"
                        github="https://team-kia.github.io/Project-1/"
                        heroku="https://team-kia.github.io/Project-1/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={budgetTracker}
                        title="Budget-Tracker"
                        alt="Budget-Tracker"
                        tools="PWAs, Lazy Loading, Minification, Compression, Service Workers, Webpack"
                        text="Online/Offline Budget Trackers Add functionality to our existing Budget Tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online."
                        github="https://github.com/My-unicorn"
                        heroku="https://immense-cliffs-76995.herokuapp.com/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={passwordGenerator}
                        title="Password-Generator"
                        alt="Password-Generator"
                        text="Acceptance Criteria: GIVEN I need a new, secure password WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria WHEN prompted for password criteria THEN I select which criteria to include in the password WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters WHEN prompted for character types to include in the password THEN I choose lowercase, uppercase, numeric, and/or special characters WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected WHEN all prompts are answered THEN a password is generated that matches the selected criteria WHEN the password is generated THEN the password is either displayed in an alert or written to the page"
                        tools="JavaScript"
                        github="https://github.com/My-unicorn/password-generator"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={codeQuiz}
                        title="Code-Quiz"
                        alt="Code-Quiz"
                        tools="JavaScript"
                        text="GIVEN I am taking a code quiz WHEN I click the start button THEN a timer starts and I am presented with a question WHEN I answer a question THEN I am presented with another question WHEN I answer a question incorrectly THEN time is subtracted from the clock WHEN all questions are answered or the timer reaches 0 THEN the game is over WHEN the game is over THEN I can save my initials and score"
                        github="https://github.com/My-unicorn/code-quiz"
                        heroku="https://my-unicorn.github.io/code-quiz/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("team") ? <Card
                        image={projectTwo}
                        title="Project-Two"
                        alt="Project-Two"
                        text="Grocery Assistance App: The simple app that helps users with grocery shopping. It lets users organize their grocery items and update them when needed. It also helps the user effectively locate grocery stores in their neighborhoods based on whatever zip code their enter."
                        tools="Node.js, mySql, JavaScript, Css Framwork, Express, HandleBars, Restful API"
                        github="https://github.com/My-unicorn/project-2-grocery-app"
                        heroku="https://groceryassistance.herokuapp.com/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={weatherDashboard}
                        title="Weather Dashboard"
                        alt="Weather Dashboard"
                        tools="JavaScript"
                        text="Weather Dashboard Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL."
                        github="https://github.com/My-unicorn/weather-dashboard"
                        heroku="https://my-unicorn.github.io/weather-dashboard/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={noteTaker}
                        title="Note-Taker"
                        alt="Note-Taker"
                        tools="JavaScript"
                        text="Guessing game built with jQuery. You win the game by matching your total score to random number."
                        github="https://github.com/My-unicorn/note-taker"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={burger}
                        title="Yummy-Burger"
                        alt="Yummy-Burger"
                        tools="jQuery, Node.js & MySQLUsing an home-grown ORM, the app has 3 basic CRUD functions...  "
                        text="Burger-handleBars is a restaurant app that lets users input the names of burgers they'd like to eat."
                        github="https://github.com/My-unicorn/burger-handlebars"
                        heroku="https://evening-wave-66529.herokuapp.com/index"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={dayPlanner}
                        title="dayPlanner"
                        alt="dayPlanner"
                        tools="JavaScript"
                        text=" Day Planner Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery."
                        github="https://github.com/My-unicorn/Day-planner"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={books}
                        title="Book-Search"
                        alt="Book-Search"
                        tools="React, Node.js App"
                        text="Searc for books with add, save and delete function."
                        github="https://github.com/My-unicorn/books-search"
                        heroku="https://evening-wave-66529.herokuapp.com/index"
                        locked={false}
                    /> : null)}
                </Box>
            </Container>
        </div>
    )
}
export default Works;