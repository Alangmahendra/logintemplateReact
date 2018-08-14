import React, { Component } from 'react'
import ReactCSSTG from 'react-addons-css-transition-group'
import './login.css'
import {adminLoginAction }from '../actions/adminLogin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Logo from './Logo'

class AdminLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adminName: '',
      password: '',
    }
  }
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount(){
    console.log(this.props)
  }

  submitAction = () => {
    this.props.adminLoginAction(this.state.adminName, this.state.password)
  }

  render() {
    const { adminName, password } = this.state
    return (
      <ReactCSSTG transitionName="animation" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        <div className="Modal">
          <Logo span="MASUK SEBAGAI ADMIN"/>
          <form>
            <div className="Input">
              <center>
              <input type="text" name="adminName" placeholder="adminName" value={adminName} onChange={this.handleOnChange} required   />
              </center>
            </div>
            <div className="Input">
              <center>
              <input type="password" name="password" placeholder="password" value={password} onChange={this.handleOnChange} required autoComplete='false' />
              </center>
            </div>
            <button onClick={this.submitAction}>MASUK</button>
          </form>
        </div>
      </ReactCSSTG>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    adminLogin: state.adminLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    adminLoginAction
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin)

//  <Input type="text" name="username" placeholder="username" value={username} onChange={this.handleOnChange}/>
// <Input type="password" name="password" placeholder="password" value={password} onChange={this.handleOnChange}/> 