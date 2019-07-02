import React from 'react';
import 'bootstrap';
import './Home.css';

function Home (props) {
    return (
        <div className="home-container container-fluid">
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom box-shadow row">
                <h5 className="my-0 mr-md-auto font-weight-normal heading">MENTOR</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="p-2 text-dark" href="#">Features</a>
                    <a className="p-2 text-dark" href="#">Organisations</a>
                    <a className="p-2 text-dark" href="#">Courses</a>
                    <a className="p-2 text-dark" href="#">Pricing</a>
                    {props.username ? <a className="p-2 text-dark name"><u>Welcome {props.username}</u></a> : <a className="p-2 text-dark" href="#">Sign in</a>}
                </nav>
                <a className="btn btn-outline-primary quote" href="#">Free Trial</a>
            </div>

            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark text-center row">
                <div className="offset-md-3 col-md-6 jumbo-text">
                    <h1 className="">TRUST & QUALITY</h1>
                    <p className="lead my-3 font-27">Learning Today...Leading Tomorrow</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Donec eget sagittis dui. Proin non ligula convallis, sagittis nibh at, sagittis diam. Suspendisse nec </p>
                    <p className="lead mb-0"><a href="#" className="text-white font-weight-bold btn btn-warning quote">GET A QUOTE</a></p>
                </div>
            </div>

            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Features</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Donec eget sagittis dui. Proin non ligula convallis, sagittis nibh at, sagittis diam. Suspendisse nec </p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 box-shadow">
                        <div className="col-md-12 header">
                            <h4 className="my-0 font-weight-normal">Latest Technologies</h4>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Donec eget sagittis dui. Proin non ligula convallis, sagittis nibh at, sagittis diam. Suspendisse nec tortor ac nisl scelerisque sollicitudin. Cras porttitor vel sapien quis vulputate. Mauris ac efficitur nisi.</p>
                        </div>
                    </div>
                    <div className="col-md-4 box-shadow">
                        <div className="col-md-12 header">
                            <h4 className="my-0 font-weight-normal">Toons Background</h4>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Donec eget sagittis dui. Proin non ligula convallis, sagittis nibh at, sagittis diam. Suspendisse nec tortor ac nisl scelerisque sollicitudin. Cras porttitor vel sapien quis vulputate. Mauris ac efficitur nisi.</p>
                        </div>
                    </div>
                    <div className="col-md-4 box-shadow">
                        <div className="col-md-12 header">
                            <h4 className="my-0 font-weight-normal">Award winning design</h4>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Donec eget sagittis dui. Proin non ligula convallis, sagittis nibh at, sagittis diam. Suspendisse nec tortor ac nisl scelerisque sollicitudin. Cras porttitor vel sapien quis vulputate. Mauris ac efficitur nisi.</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="row pt-4 pt-md-5 border-top">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-3">
                            <div className="funnel">
                                <p><h5>65</h5></p>
                                <p>Say No!!</p>
                                <p className="people"></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="funnel">
                                <p><h5>20</h5></p>
                                <p>Say Yes!!</p>
                                <p className="people"></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="funnel">
                                <p><h5>15</h5></p>
                                <p>Cant Say!!</p>
                                <p className="people"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <h1>IS INCLUSIVE QUALITY EDUCATION AFFORDABLE?</h1>
                        <h5>(Revised and Updated for 2016)</h5>
                    </div>
                    <div className="row">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Donec eget sagittis dui. Proin non ligula convallis, sagittis nibh at, sagittis diam. Suspendisse nec tortor ac nisl scelerisque sollicitudin. Cras porttitor vel sapien quis vulputate. Mauris ac efficitur nisi.</p>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </footer>
        </div>
    );
}

export default Home;