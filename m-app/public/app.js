import React from "react";
import {factory} from "pi-experiment-lib";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Button from "material-ui/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.setState({plugin: factory("AcmeInc")});
  }

  render() {
    let content;
    if (this.state.plugin) {
      const Plugin = this.state.plugin;
      content = <Plugin />;
    }
    return (      
      <div>
        <AppBar>workbench</AppBar>
        <div>
          <h2>Welcome to React</h2>
        </div>
        <Button raised={true}>HELLO</Button>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {content}
      </div>
    );
  }
}

const AppContainer = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

export default AppContainer;
