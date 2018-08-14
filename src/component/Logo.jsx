import React, { Component } from 'react'
// import kemodi2 from '../image/kemodi2.png'

export default class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <img src={require('../image/kemodi2.png')} alt="kemodijakarta LOGOS"/>
                <br/>
                <span>{this.props.span}</span>
            </div>
        )
    }
}
