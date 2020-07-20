import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//adding my imports
import Navbar from "./components/NavBar";
// import Footer from "./component/footer.jsx";
// import 'bootstrap/dist/css/bootstrap.css';
//import "./styles/index.scss";

ReactDOM.render(
	<React.Fragment>
		<Navbar />
		 <App/> 
	</React.Fragment>, document.getElementById('root'));






// ReactDOM.render(
  // <React.StrictMode>
    // <App/>
  // </React.StrictMode>,
//  /\ document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
