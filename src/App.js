import React, { Component, } from "react";
import "./App.css";
import Message from "./components/Message";

import Formulaire from "./components/Formulaire";

class App extends Component {
  render() {
    return (
        <div className="box">
          <div>
            <div className="messages">
              <Message />
              <Message />
              <Message />
            </div>
          </div>
          <Formulaire/>
        </div>

    );
  }
}

export default App;
