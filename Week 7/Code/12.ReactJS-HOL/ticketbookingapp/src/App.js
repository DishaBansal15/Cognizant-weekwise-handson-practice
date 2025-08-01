import React, { useState } from 'react';
import Logout from './components/Logout';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <Login /> : <Logout />}
      <button onClick={() => setIsLoggedIn(prev => !prev)}>
        {isLoggedIn ? 'Login' : 'Logout'}
      </button>
    </div>
  );
}

export default App;
