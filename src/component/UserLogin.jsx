import React, { Component } from 'react'
import ReactCSSTG from 'react-addons-css-transition-group'
import './login.css'
import {userLoginAction} from '../actions/userLogin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Logo from './Logo'
// import Input from './Input'

class UserLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitAction = () => {
    this.props.userLoginAction(this.state.username, this.state.password)
  }

  render() {
    const { username, password } = this.state
    return (
      <ReactCSSTG transitionName="animation" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        <div className="Modal">
          <Logo span="MASUK SEBAGAI USER"/>
          <form>
            <div className="Input">
              <input type="text" name="username" placeholder="username" value={username} onChange={this.handleOnChange} required/>
            </div>
            <div className="Input">
              <input type="password" name="password" placeholder="password" value={password} onChange={this.handleOnChange} required autoComplete='false' />
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
    userLogin: state.userLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    userLoginAction
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)

//  <Input type="text" name="username" placeholder="username" value={username} onChange={this.handleOnChange}/>
// <Input type="password" name="password" placeholder="password" value={password} onChange={this.handleOnChange}/> 