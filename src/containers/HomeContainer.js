import React, { Component } from "react";
import { Container } from "reactstrap";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getProductLists } from "../actions/productAction";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getProductLists());  //untuk melakukan productaction di productaction.js
  }
  render() {
    console.log()
    return (
      <Container>
        <TableComponent />
        {/* Karena ini adalah component maka props menggunakan this, tidak seperti arrow function */}
      </Container>
    );
  }
}

export default connect()(HomeContainer);
