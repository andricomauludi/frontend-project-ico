import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import JumbotronComponent from './components/JumbotronComponent'

export default class App extends Component {
  state = {
    title: "Mornin Mood Coffee"
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title}/>
      </div>
    )
  }
}
