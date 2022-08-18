import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const MyProfile = () => {

    const customers = useSelector(state => state.customers)
    const history = useNavigate();

    return (
        <div className="mt-5 d-flex justify-content-around">
            <div>
                <p>
                    {customers.email}
                </p>
                <p>
                    {customers.role}
                </p>
            </div>

            <button className="btn btn btn-outline-danger mb-3 mt-5"
                    onClick={() => {
                        history('/home')
                    }}
            >Back
            </button>
        </div>
    );
};

export default MyProfile;