import React, { Component } from 'react'

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: 'xxx',
        scope: 'email',
      })
    })
  }
  render() {
    return <div>Google Auth</div>
  }
}

export default GoogleAuth
