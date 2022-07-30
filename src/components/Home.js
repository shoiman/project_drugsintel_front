import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Home = () => {

    const history = useNavigate();
    const customers = useSelector(state => state.customers)

    return (

        <div>

            {/*<nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">*/}
            {/*    <div className="container-fluid">*/}
            {/*        <a className="navbar-brand" href="#">Home</a>*/}
            {/*        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
            {/*                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
            {/*                aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*            <span className="navbar-toggler-icon"></span>*/}
            {/*        </button>*/}
                    {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
                    {/*    <ul className="navbar-nav me-auto mb-2 mb-lg-0">*/}
                    {/*        <li className="nav-item">*/}
                    {/*            <a className="nav-link active" aria-current="page" href="#">Home</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item">*/}
                    {/*            <a className="nav-link" href="#">Link</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item dropdown">*/}
                    {/*            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*/}
                    {/*               data-bs-toggle="dropdown" aria-expanded="false">*/}
                    {/*                Dropdown*/}
                    {/*            </a>*/}
                    {/*            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                    {/*                <li><a className="dropdown-item" href="#">Action</a></li>*/}
                    {/*                <li><a className="dropdown-item" href="#">Another action</a></li>*/}
                    {/*                <li>*/}
                    {/*                    <hr className="dropdown-divider"/>*/}
                    {/*                </li>*/}
                    {/*                <li><a className="dropdown-item" href="#">Something else here</a></li>*/}
                    {/*            </ul>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item">*/}
                    {/*            <a className="nav-link disabled" href="#" tabIndex="-1"*/}
                    {/*               aria-disabled="true">Disabled</a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*    <form className="d-flex">*/}
                    {/*        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>*/}
                    {/*            <button className="btn btn-outline-success" type="submit">Search</button>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
            {/*    </div>*/}
            {/*</nav>*/}

            <div>
                <p style={{fontSize: "2em"}}>
                    hello dear, {customers.username || customers.name} :)
                </p>

                <p> Your email: {customers.email}</p>

                <div>
                    {customers.role != null ? <p>Your role: {customers.role}</p> : <p></p>}
                </div>

                <div className="justify-content-around">
                    <div>My message</div>
                    <div>My info</div>
                </div>


            </div>

            <div>
                <button className="btn btn btn-outline-danger mb-3"
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