import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUserAction} from "../actions/userActions";
import {registerUser} from "../actions/asyncAction";


const Registration = () => {

    const [dataName, setDataName] = useState("")
    const [dataEmail, setDataEmail] = useState("")
    const [dataPassword, setDataPassword] = useState("")

    const [message, setMessage] = useState('')
    const [mes, setMes] = useState('')


    const history = useNavigate();
    const dispatch = useDispatch();

    const addCustomer = (dataName, dataEmail, dataPassword) => {
        const customer = {
            name: dataName,
            email: dataEmail,
            password: dataPassword
        }
        // прокидывем экшн в диспатч
        //передаем обїект клиента в пейлоад єкшна
        dispatch(addUserAction(customer))
    }

    function checkRequest() {
        if(mes !== "" || message !==""){
            setMes("");
            setMessage("");
        }
        if (dataName !== "" && dataEmail !== "" && dataPassword !== "") {
            dispatch(registerUser(dataName.toLowerCase(), dataEmail.toLowerCase(), dataPassword))
                .then(r => {
                    if(r === 200){
                        addCustomer(dataName, dataEmail, dataPassword);
                        history('/home')
                    }else if(r === 409){
                        setMessage("409");
                    }else{
                        console.log("Error: " + r);
                    }
                });
        } else {
            setMes("Check the fields...");
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-sm-around">
                <div >
                    <div className="input-group mb-3 mt-5">
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                               aria-describedby="basic-addon1"
                               onChange={(e) => {
                                   setDataName(e.target.value);
                               }}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Email"
                               aria-label="Email" aria-describedby="basic-addon2"
                               onChange={(e) =>
                                   setDataEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group mb-5">
                        <input type="password" className="form-control" placeholder="Password"
                               aria-label="Password" aria-describedby="basic-addon2"
                               onChange={(e) =>
                                   setDataPassword(e.target.value)}
                        />

                        <div className="input-group-append">
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {message === "409" ? <div>User already exist</div> : <div></div>}
            </div>

            <div>
                <button className="btn btn-outline-primary mb-3 mt-3"
                        onClick={() => {
                            checkRequest()
                        }}

                >Sign up
                </button>
            </div>

            <div>
                <button className="btn btn-outline-secondary"
                        onClick={() => {
                            history('/login')
                        }}
                >Log in
                </button>
            </div>

            <div className="mt-5">
                {mes !== "" ? <div>Check the fields...</div> : <div></div>}
            </div>


        </div>

    );
};

export default Registration;
