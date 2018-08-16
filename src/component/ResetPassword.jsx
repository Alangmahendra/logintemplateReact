import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetPassword } from '../actions/resetpassword'
import Logo from './Logo'
import './login.css'
import ReactCSSTG from 'react-addons-css-transition-group'

class ResetPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  componentDidMount(){
    console.log(this.props)
  }
  handleOnChange = (e) => {
    // console.log('bebass')
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitAction = (e) => {
    e.preventDefault()
    this.props.resetPassword(this.state.email)
    
  }

  render() {
    const { email } = this.state
    return (
      <ReactCSSTG transitionName="animation" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        <div className="Modal">
          <Logo span="Reset Your Password"/>
          <form>
            <div className="Input">
              <input type="email" name="email" placeholder="email" value={email} onChange={this.handleOnChange} required/>
            </div>
            <button onClick={this.submitAction}>RESET</button>
          </form>
        </div>
      </ReactCSSTG>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    resetPassword: state.resetPassword
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    resetPassword
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
