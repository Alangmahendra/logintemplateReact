import React, { Component } from 'react'
import history from '../history'

export default class DashboardPage extends Component {
    componentDidMount(){
        if(!localStorage.getItem('Usertoken')){
            history.push('/')
        }
    }
    submitAction = (e) =>{
        e.preventDefault()
        localStorage.clear()
        history.push('/')
    }
  render() {
    return (
      <div>
        <h1>YOU HAVE LOGED IN</h1>
        <br/>
        <button onClick={this.submitAction}>LOGOUT</button>
      </div>
    )
  }
}
