import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import JumbotronComponent from './components/JumbotronComponent'
import TableComponent from './components/TableComponent'

export default class App extends Component {
  state = {
    title: "Mornin Mood Coffee",
    users : [
      {
        id : 1,
        nama : "andrico",
        alamat : "alamat",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 2,
        nama : "andrico2",
        alamat : "alamat2",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 3,
        nama : "andrico3",
        alamat : "alamat3",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 4,
        nama : "andrico4",
        alamat : "alamat4",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 4,
        nama : "andrico4",
        alamat : "alamat4",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 5,
        nama : "andrico5",
        alamat : "alamat5",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 6,
        nama : "andrico6",
        alamat : "alamat6",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 7,
        nama : "andrico7",
        alamat : "alamat7",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 8,
        nama : "andrico8",
        alamat : "alamat8",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 9,
        nama : "andrico",
        alamat : "alamat",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 10,
        nama : "andrico2",
        alamat : "alamat2",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 11,
        nama : "andrico3",
        alamat : "alamat3",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 12,
        nama : "andrico4",
        alamat : "alamat4",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 13,
        nama : "andrico4",
        alamat : "alamat4",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 14,
        nama : "andrico5",
        alamat : "alamat5",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 15,
        nama : "andrico6",
        alamat : "alamat6",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 16,
        nama : "andrico7",
        alamat : "alamat7",
        umur : 23,
        hp : "081212771239"
      },
      {
        id : 17,
        nama : "andrico8",
        alamat : "alamat8",
        umur : 23,
        hp : "081212771239"
      },
    ]
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title}/>
        <TableComponent users={this.state.users}/>
      </div>
    )
  }
}
