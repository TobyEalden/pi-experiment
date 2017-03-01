import React from "react";

function loadPlugin() {
  import("plugin")
    .then(() => {
      console.log("********* LOADED PLUGIN");
    });
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to React</h2>
        </div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
          <Plugin1 />
        </p>
      </div>
    );
  }
}

export default App;
