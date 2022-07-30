import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import React from "react";
import Main from "./components/Main";

function App() {


  return (
      <div className="App">
          <Routes>
              {/*//можно сделать map route - разобраться*/}
              <Route path={'/'}
                     element={<Main/>} />

              <Route path={'/login'}
                     element={<Login/>} />

              <Route path={'/registration'}
                     element={<Registration/>}/>

              <Route path={'/home'}
                     element={<Home/>}/>

          </Routes>
      </div>
  );
}

export default App;