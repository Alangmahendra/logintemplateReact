import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLoginAction } from '../actions/userLogin'
import Logo from './Logo'
import './login.css'
import ReactCSSTG from 'react-addons-css-transition-group'
import {Link} from 'react-router-dom'
import history from '../history'
// import Input from './Input'

class UserLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  componentDidMount(){
    if(localStorage.getItem('Usertoken')){
      history.push('/')
    }
  }
  handleOnChange = (e) => {
    // console.log('bebass')
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitAction = (e) => {
    e.preventDefault()
    this.props.userLoginAction(this.state.email, this.state.password)
    // this.props.userLogin.isSuccess(this.state.email, this.state.password)
    
  }

  render() {
    const { email, password } = this.state
    return (
      <ReactCSSTG transitionName="animation" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        <div className="Modal">
          <Logo span="MASUK SEBAGAI USER"/>
          <form>
            <div className="Input">
              <input type="email" name="email" placeholder="email" value={email} onChange={this.handleOnChange} required/>
            </div>
            <div className="Input">
              <input type="password" name="password" placeholder="password" value={password} onChange={this.handleOnChange} required autoComplete='false' />
            </div>
            <button onClick={this.submitAction}>MASUK</button>
            <Link to={'/resetpassword'}>
              forgot your password ?
            </Link>
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

//  <Input type="text" name="email" placeholder="email" value={email} onChange={this.handleOnChange}/>
// <Input type="password" name="password" placeholder="password" value={password} onChange={this.handleOnChange}/> 