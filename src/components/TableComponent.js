import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container } from 'reactstrap';

const columns = [{
  dataField: 'id',
  text: 'ID'
}, {
  dataField: 'nama',
  text: 'Nama'
}, {
  dataField: 'alamat',
  text: 'Alamat'
}];


const TableComponent = (props) => {
  return (
    <Container>
        <BootstrapTable keyField='id' data={ props.users } columns={ columns } />
    </Container>
  )
}

export default TableComponent