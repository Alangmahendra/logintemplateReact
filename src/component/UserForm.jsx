import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {userFormAction} from '../actions/userForm'

class UserForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:'',
      username:'',
      alamat:'',
      notelp:'',
      namaDepan:'',
      namaBelakang:'',
      tanggalLahir:'',
      jenisAsuransi:'',
      emergencyContact:'',
      kondisiKesehatan:'',
      AgamaId:'',
    }
  }
  render() {
    return (
      <div>
        
      </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(UserForm)
