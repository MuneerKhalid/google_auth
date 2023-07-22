import React from 'react';

import { GoogleLogin } from 'react-google-login';

const clientId = '';

const Login = () => {

  const onSuccess = (res) => {
    return(
      prompt('logged In, Welcome: ', res.profileObj)
    )
  }

  const onFailure = (res) => {
    return(
      alert('logged In Failed ', res)
    )
  }

  return (
    <div id='signInButton'> 
      <GoogleLogin 
        clientId={clientId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  )
}

export default Login;