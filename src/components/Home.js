import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Home = () => {

    const history = useNavigate();
    const customers = useSelector(state => state.customers)

    return (

        <div>

            <div>
                <p className="mt-5" style={{fontSize: "2em"}}>
                    hello dear, {customers.username || customers.name} :)
                </p>
            </div>

            <div className="d-flex justify-content-sm-around">
                <div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Your messages</h5>
                            <p className="card-text">Your messages</p>
                            <a onClick={() => {
                                history('/messages')
                            }} className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Information</h5>
                            <p className="card-text">My profile</p>
                            <a onClick={() => {
                                history('/profile')
                            }} className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button className="btn btn btn-outline-danger mb-3 mt-5"
                        onClick={() => {
                            history('/')
                        }}
                >Back
                </button>
            </div>

        </div>
    );
};

export default Home;