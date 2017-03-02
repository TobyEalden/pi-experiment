import React from "react";

class AcmeInc extends React.Component {
  constructor(props) {
    super(props);
    console.log("got plugin props: ", props);
  }
  render() {
    return (
      <div style={{backgroundColor: "lime"}}>
        <div>
          <h2>Welcome to AcmeInc Plugin!</h2>
        </div>
        <p>
          lorem ipsum
        </p>
      </div>
    );
  }
}

export default AcmeInc;
