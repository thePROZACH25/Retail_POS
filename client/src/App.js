import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages(Routes)
import WelcomePage from "./WelcomePage";
import MainMenu from "./pages/MainMenu";
import POS from "./pages/Pos";
// import Sells from "./pages/Sells";
// import Employee from "./pages/Employee";
// import CustomerInfo from "./pages/CustomerInfo";
// import TransHistory from "./pages/TransHistory";
import NoMatch from "./pages/NoMatch";

// Components
import Nav from "./components/Nav";
// import Employee from "./utils/Employee";

class App extends Component {
  // state = {
  //   employee: [
  //     {
  //       name: "",
  //       employeeNum: "",
  //       password: "",
  //     },
  //   ],
  // };

  // componentDidMount = () => {
  //   this.loadEmpl();
  // };

  // loadEmpl = () => {
  //   Employee.getEmployees()
  //     .then((res) => {
  //       const data = res.data;
  //       data.map((data) =>
  //         this.setState({
  //           employee: {
  //             name: data.name,
  //             employeeNum: data.employeeNum,
  //             password: data.password,
  //           },
  //         })
  //       );
  //     })
  //     .catch(() => {
  //       console.log("could not find data");
  //     });
  // };

  render() {
    return (
      <Router>
        <div className="col-lg-12">
          <Nav />

          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <WelcomePage />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/mainmenu"
            render={(props) => (
              <React.Fragment>
                <MainMenu />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/pos"
            render={(props) => (
              <React.Fragment>
                <POS />
              </React.Fragment>
            )}
          />
         {/* <Route
            exact
            path="/sells"
            render={(props) => (
              <React.Fragment>
                <Sells />
              </React.Fragment>
            )}
          />
         <Route
            exact
            path="/employee"
            render={(props) => (
              <React.Fragment>
                <Employee />
              </React.Fragment>
            )}
          />
         <Route
            exact
            path="/customerInfo"
            render={(props) => (
              <React.Fragment>
                <CustomerInfo />
              </React.Fragment>
            )}
          />
         <Route
            exact
            path="/transHistory"
            render={(props) => (
              <React.Fragment>
                <TransHistory />
              </React.Fragment>
            )}
          /> */}
          <Route path=" " component={NoMatch} />
        </div>
      </Router>
    );
  }
}

export default App;
