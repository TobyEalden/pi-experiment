import React from "react";

// function loadPlugin() {
//   import("plugin")
//     .then(() => {
//       console.log("********* LOADED PLUGIN");
//     });
// }

class PluginOne extends React.Component {
  constructor(props) {
    super(props);
    console.log("got plugin props: ", props);
  }
  render() {
    return (
      <div style={{backgroundColor: "lime"}}>
        <div>
          <h2>Welcome to React Plugins!</h2>
        </div>
        <p>
          lorem ipsum
        </p>
      </div>
    );
  }
}

export default PluginOne;
