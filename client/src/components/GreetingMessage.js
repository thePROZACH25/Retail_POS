import React from "react";


function GreetingMessage() {
  return (
    <div style={greeting}>
      <h2>WELCOME</h2>
      <h4>Please login</h4>
    </div>
  );
}

const greeting = {
  textAlign: "center",
  alignItems: "center"
}

export default GreetingMessage;
