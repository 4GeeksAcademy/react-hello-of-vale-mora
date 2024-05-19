import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar bg-secondary navbar-expand-lg  p-0 m-0 " style={{ height:"55px"}}>
            <div className="container-fluid bg-secondary">
                <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav d-flex justify-content:flex-end">
                        <a className="nav-link active text-white" aria-current="page" href="#" >Home</a>
                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link" href="#">Services</a>
                        <a className="nav-link" href="#">Contact</a>

                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar