import "./App.css";
import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);

  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#113f83";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode "
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing "
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now "
      // }, 1500);
    }

    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode "
    }
  }
  return (
    <>

      {/* <Router> */}
      <Navbar tittle="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}

        {/* <Route exact path="/"> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
