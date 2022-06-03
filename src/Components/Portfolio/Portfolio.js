import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import ownPic from '../../Image/my-pic.png';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row d-flex align-items-center justify-content-center ">
                    <div className="col-lg-6">
                        <img className="img-edit img-fluid" src={ownPic} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h3>Hi There</h3>
                        <h1>
                            I am <span className="text-primary">Raddiya Sultana.</span>
                        </h1>
                        <p>
                            I am Bangladeshi web designer and developer focused on Front End

                            Developer. I will make clean and user friendly experience. My
                            passion about building excellent website and improve about
                            building.
                        </p>
                        <button className="btn btn-primary"> Explore me</button>
                    </div>
                </div>
                <div>
                    <h1 className="fw-bold text-center my-4">
                        About <span className="text-primary">Me</span>
                    </h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className="fw-bold my-3">PERSONAL INFORMATION</h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>
                                        NAME: <span className="fw-bold">Raddiya sultana</span>
                                    </p>
                                    <p>
                                        AGE: <span className="fw-bold">20</span>
                                    </p>
                                    <p>
                                        NATIONALITY: <span className="fw-bold">Bangladeshi</span>
                                    </p>
                                    <p>
                                        Work Status: <span className="fw-bold">Available</span>
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <p>
                                        Address: <span className="fw-bold">Dhaka Bangladesh</span>
                                    </p>
                                    <p>
                                        Phone: <span className="fw-bold">+88 01950165072</span>
                                    </p>
                                    <p>
                                        Email:
                                        <span classname="fw-bold">raddiyasultana.612@gmail.com</span>
                                    </p>
                                    <p>
                                        Language: <span className="fw-bold">Bangla, English</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">HTML</label>
                            <ProgressBar striped variant="success" now={98} />
                            <label htmlFor="">CSS</label>
                            <ProgressBar striped variant="info" now={87} />
                            <label htmlFor="">JS</label>
                            <ProgressBar striped variant="warning" now={76} />
                            <label htmlFor="">REACT</label>
                            <ProgressBar striped variant="danger" now={88} />
                            <label htmlFor="">MONGO DB</label>
                            <ProgressBar striped variant="success" now={61} />
                            <label htmlFor="">EXPRESS</label>
                            <ProgressBar striped variant="info" now={55} />
                            <label htmlFor="">NODE</label>
                            <ProgressBar striped variant="warning" now={30} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;