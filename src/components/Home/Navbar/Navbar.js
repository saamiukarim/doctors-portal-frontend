import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
                <li className="nav-item active text-white">
                    <a className="nav-link ms-5 " href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ms-5 text-white " href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ms-5 text-white" href="#">Dental Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ms-5 text-white " href="#">Reviews</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ms-5 text-white " href="#">Blogs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ms-5 text-white " href="#">Contact Us</a>
                </li>
            </ul>
        </div>
    </nav>
        
        
    );
};

export default Navbar;