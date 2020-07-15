import React from "react";
import Container from "@material-ui/core/Container";
import MenuOps from "../components/MenuOps";

function MainMenu() {
  return (
    <div>
      <Container maxWidth="xs" style={box1}>
        <MenuOps />
      </Container>
    </div>
  );
}

const box1 ={
    padding: "100px"
}

export default MainMenu;
