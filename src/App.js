import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import { Container } from "reactstrap";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";

export default class App extends Component {
  state = {
    title: "Tester",
   
  };
  render() {
    return (
      <div>
        <NavbarComponent />
        <Container style={{ padding: "20px" }}>
          <JumbotronComponent />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<HomeContainer/>} />
              <Route exact path="/create" element={<CreateUserContainer />} />
              <Route exact path="/edit/:id" element={<EditUserContainer />} />
              <Route exact path="/detail/:id" element={<DetailUserContainer />} />

              {/* <Route path="/create">
                <CreateUserContainer />
              </Route>
              <Route path="/edit/:id">
                <EditUserContainer />
              </Route>
              <Route path="/detail/:id">
                <DetailUserContainer />
              </Route> */}
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}
