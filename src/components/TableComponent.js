import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button } from "reactstrap";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "nama",
    text: "Nama",
    sort: true,
  },
  {
    dataField: "alamat",
    text: "Alamat",
    sort: true,
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Button color="dark" className="me-2">
            <FontAwesomeIcon icon={faInfo} /> Detail
          </Button>

          <Button color="dark" className="me-2">
            <FontAwesomeIcon icon={faEdit} /> edit
          </Button>

          <Button color="dark" className="me-2">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "ID",
    order: "asc",
  },
];

const TableComponent = (props) => {
  return (
    <Container style={{padding : '10px'}}>
      <ToolkitProvider
        bootstrap4
        keyField="id"
        data={props.users}
        columns={columns}
        search
        defaultSorted={defaultSorted}
        
      >
        {(props) => (
          <div>
            <div style={{textAlign: 'right'}} className="my-3">
              <SearchBar {...props.searchProps} placeholder="Search..." />
            </div>
            
            <BootstrapTable {...props.baseProps} pagination={ paginationFactory()}/>
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
};

export default TableComponent;
