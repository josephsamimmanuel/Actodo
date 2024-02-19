import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Landing from './pages/landing';
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));

function App()
{
  const[users,setusers]=useState(
    [{
        username: "joseph",
        password: "123"
    },
    {
      username: "jeni",
      password: "1308"
  } 
  ]
)
  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers}></Login>}></Route>
    <Route path='/signup' element={<Signup users={users} setusers={setusers} ></Signup>}></Route>
    <Route path='/landing' element={<Landing></Landing>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
