import React from 'react';
import {useNavigate} from "react-router-dom";


const Main = () => {

    const history = useNavigate();


    return (
        <div>
            <button className="btn btn-outline-secondary mt-5"
                    onClick={() => {
                        history('/registration')
                    }}>
                Go to my profile
            </button>
        </div>
    );
};

export default Main;