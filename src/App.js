import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";

import { Container } from "reactstrap";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";

export default class App extends Component {
  state = {
    title: "Mornin Mood Coffee",
    users: [
      {
        id: 1,
        nama: "andrico",
        alamat: "alamat",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 2,
        nama: "handrico2",
        alamat: "alamat2",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 3,
        nama: "bandrico3",
        alamat: "alamat3",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 4,
        nama: "dandrico4",
        alamat: "alamat4",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 5,
        nama: "vandrico4",
        alamat: "alamat4",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 6,
        nama: "mandrico5",
        alamat: "alamat5",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 7,
        nama: "candrico6",
        alamat: "alamat6",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 8,
        nama: "kandrico7",
        alamat: "alamat7",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 9,
        nama: "landrico8",
        alamat: "alamat8",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 10,
        nama: "oandrico",
        alamat: "alamat",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 11,
        nama: "pandrico2",
        alamat: "alamat2",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 12,
        nama: "andrico3",
        alamat: "alamat3",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 13,
        nama: "andrico4",
        alamat: "alamat4",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 14,
        nama: "andrico4",
        alamat: "alamat4",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 15,
        nama: "andrico5",
        alamat: "alamat5",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 16,
        nama: "andrico6",
        alamat: "alamat6",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 17,
        nama: "andrico7",
        alamat: "alamat7",
        umur: 23,
        hp: "081212771239",
      },
      {
        id: 18,
        nama: "andrico8",
        alamat: "alamat8",
        umur: 23,
        hp: "081212771239",
      },
    ],
  };
  render() {
    return (
      <div>
        <NavbarComponent />
        <Container style={{ padding: "20px" }}>
          <JumbotronComponent title={this.state.title} />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<HomeContainer users={this.state.users}/>} />
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
