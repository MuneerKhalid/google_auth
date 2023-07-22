import { GoogleLogout } from "react-google-login"; 
import React from "react";

const clientId = '';

const LogOut = () => {

  const onSuccess = () => (
    alert('logout successful!')
  )

  return (
    <div id="signOutButton"> 
      <GoogleLogout 
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  )
}

export default LogOut;