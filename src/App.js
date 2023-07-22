
import Login from "./components/login";
import LogOut from "./components/logout";
import { useEffect } from "react";
import { gapi } from 'gapi-script';

const clientId = ''

function App() {

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
    })
    };

    gapi.load('client:auth2', start);
  });

  return (
    <div className="App">
      <Login />
      <LogOut />
    </div>
  );
}

export default App;
