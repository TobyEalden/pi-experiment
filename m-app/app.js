import React from "react";

// function loadPlugin() {
//   import("plugin")
//     .then(() => {
//       console.log("********* LOADED PLUGIN");
//     });
// }

const load = require("bundle-loader?lazy!./plugin.js");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plugin: null,
    };
  }
  componentDidMount() {
    load((file) => {
      console.log("loaded: ", file);
      this.setState({plugin: file.PluginOne});
    });
  }

  render() {
    let Plugin;
    let content;
    if (this.state.plugin) {
      Plugin = this.state.plugin;
      content = <Plugin />;
    }
    return (
      <div>
        <div>
          <h2>Welcome to React</h2>
        </div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {content}
      </div>
    );
  }
}

export default App;
