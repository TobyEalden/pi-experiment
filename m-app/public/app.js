import React from "react";
import {factory} from "pi-experiment-lib";
import {createStyleSheet} from "jss-theme-reactor";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Layout from "material-ui/Layout";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/Icon";
import Text from "material-ui/Text";

const styleSheet = createStyleSheet("workbench-app", () => ({
  root: {
    backgroundColor: "#393939",
  },
}));

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  componentDidMount() {
    this.setState({plugin: factory("AcmeInc")});
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    let content;
    if (this.state.plugin) {
      const Plugin = this.state.plugin;
      content = <Plugin />;
    }
    return (
      <div className={classes.root}>
        <AppBar>
          <Layout container>
            <Layout item xs={1}>
              <IconButton>
                <Icon>alarm</Icon>
              </IconButton>
            </Layout>
            <Layout item xs={11} align="flex-start" justify="flex-start">
              <Text nowrap>workbench</Text>
            </Layout>
          </Layout>
        </AppBar>
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

App.contextTypes = {
  styleManager: React.PropTypes.object.isRequired,
};

const AppContainer = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

export default AppContainer;
