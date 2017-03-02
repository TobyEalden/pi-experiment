import React from "react";
import {factory} from "pi-experiment-lib";

// function loadPlugin() {
//   import("plugin")
//     .then(() => {
//       console.log("********* LOADED PLUGIN");
//     });
// }

// const load = require("bundle-loader?lazy!./plugin.js");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    // this.setState({plugin: __plugins.obj});

    // load((file) => {
    //   console.log("loaded: ", file);
    //   this.setState({plugin: file.PluginOne});
    // });

    // SystemJS.import(this.props.pluginName).then((mod) => {
    //   this.setState({plugin: mod.default});
    // });

    this.setState({plugin: factory("AcmeInc")});
  }

  render() {
    let Plugin;
    let content;
    // if (typeof __plugins !== "undefined") {
    //   console.log(">>>>>>>>>>>>>" + __plugins.name);
    //   Plugin = __plugins.obj;
    //   content = <Plugin />;
    // }
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
