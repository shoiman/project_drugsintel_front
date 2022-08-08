import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {loginUser} from "../actions/asyncAction";
import {useDispatch} from "react-redux";
import {addUserAction} from "../actions/userActions";


const Login = () => {
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('');

    const [mes, setMes] = useState('')

    const history = useNavigate();
    const dispatch = useDispatch();


    function checkRequest() {
        if (login !== "" && password !== "") {
            dispatch(loginUser(login.toLowerCase(), password))
                 .then(data => {
                     if(data instanceof Object){
                         dispatch(addUserAction(data))
                         history('/home')
                     }else{
                         console.log("data: " + data);
                     }
                 })
        } else {
            setMes("Check the fields...");
        }
    }


    return (
        <div>
            <div className="container">
                <div className="row offset-3 col-6">

                    <div className="mt-5">
                        {mes !== "" ? <div>Check the fields...</div> : <div></div>}
                    </div>

                    <div className="input-group mb-3 mt-5">
                        <input type="text" className="form-control" placeholder="Email or Login"
                               aria-label="Email" aria-describedby="basic-addon2"
                               onChange={(e) =>
                                   setLogin(e.target.value)}
                               value={login}
                        />
                    </div>

                    <div className="input-group mb-5">
                        <input type="text" className="form-control" placeholder="Password"
                               aria-label="Password" aria-describedby="basic-addon2"
                               onChange={(e) =>
                                   setPassword(e.target.value)}
                               value={password}
                        />
                    </div>
                </div>
                </div>

            <div>
                <button className="btn btn-outline-primary mb-3"
                        onClick={() => {
                            checkRequest();
                        }}>Log in</button>
            </div>

            <div>
                <button className="btn btn-outline-secondary"
                        onClick={() => {
                            history('/registration')
                        }}>Sign up</button>
            </div>


        </div>
    )


};

export default Login;