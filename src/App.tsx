import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Chat from './Components/Chat/Chat';
import Login from './Components/Login/Login';

function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        {!user ? (<Login />) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Routes>
                <Route path="/room/:roomId" element={<Chat />}>
                  {/* <Chat /> */}
                </Route>
                <Route path="/" element={<h1>Welcome</h1>}>
                  {/* <Chat /> */}
                </Route>
              </Routes>
              {/* React Router -> Chat Screen */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
