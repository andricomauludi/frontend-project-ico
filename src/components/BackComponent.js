import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row, Button } from "reactstrap";
import {Link} from 'react-router-dom'


/*Back component berfungsi untuk menampilkan tombol back pada setiap containers */
export const BackComponent = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to={"/"}>
          <Button color="dark" className="me-2">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
};
