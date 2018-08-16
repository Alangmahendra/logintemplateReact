import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        ini home <br/>
        {/* <Link to={'/adminlogin'}>
            <button>MASUK SEBAGAI ADMIN</button>
        </Link> */}
        <Link to={'/userlogin'}>
            <button>MASUK SEBAGAI USER</button>
        </Link>
        <Link to={'/userform'}>
            <button>DAFTAR</button>
        </Link>
      </div>
    )
  }
}
