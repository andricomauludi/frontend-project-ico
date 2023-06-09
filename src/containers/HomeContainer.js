import React, { Component } from "react";
import { Container } from "reactstrap";
import TableComponent from "../components/TableComponent";

export default class HomeContainer extends Component {
  render() {
    return (
      <Container>
        <TableComponent/>    {/* Karena ini adalah component maka props menggunakan this, tidak seperti arrow function */}
      </Container>
    );
  }
}
