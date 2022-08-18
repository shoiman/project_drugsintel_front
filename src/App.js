import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import React from "react";
import Main from "./components/Main";
import MessagePage from "./components/MessagePage";
import MyProfile from "./components/MyProfile";

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

              <Route path={'/messages'}
                     element={<MessagePage/>}/>

              <Route path={'/profile'}
                     element={<MyProfile/>}/>

          </Routes>
      </div>
  );
}

export default App;