import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userFormAction } from '../actions/userForm'
import Logo from './Logo'
import './login.css'
import ReactCSSTG from 'react-addons-css-transition-group'
// import history from '../history'

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password1: '',
      password2: ''
    }
  }
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    console.log(this.props)
  }

  submitAction = (e) => {
    e.preventDefault()
    this.props.userFormAction(this.state.email, this.state.username, this.state.password1, this.state.password2)
    // history.push('/userlogin')
  }

  render() {
    const { email, password1, password2, username } = this.state
    const Button={
      color:"grey"
    }
    return (
      <ReactCSSTG transitionName="animation" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        <div className="Modal">
          <Logo span="Daftar User Baru" />
          <form>
            <div className="Input">
              <center>
                <input type="text" name="username" placeholder="username" value={username} onChange={this.handleOnChange} required />
              </center>
            </div>
            <div className="Input">
              <center>
                <input type="email" name="email" placeholder="email" value={email} onChange={this.handleOnChange} required />
              </center>
            </div>
            <div className="Input">
              <center>
                <input type="password" name="password1" placeholder="password" value={password1} onChange={this.handleOnChange} required autoComplete='false' />
              </center>
            </div>
            <div className="Input">
              <center>
                <input type="password" name="password2" placeholder="verify Password" value={password2} onChange={this.handleOnChange} required autoComplete='false' />
              </center>
            </div>
            {
              (password1 === password2 && password1 !== '' && password2 !== '') ? (<button onClick={this.submitAction}>DAFTAR</button>) :(<button className={Button} onClick={this.submitAction}disabled>DAFTAR</button>)
            }

          </form>
        </div>
      </ReactCSSTG>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userForm: state.userForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    userFormAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
