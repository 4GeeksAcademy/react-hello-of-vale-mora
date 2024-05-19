import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron p-5 mb-4" style={{backgroundColor:"#e7e2e6", margin:"10px"}}>
            <div>
                <h1 className="display-5">A Warm Welcome!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary" href="#" role="button">Call to action</a>
                </p>
            </div>
        </div>
    )
}
export default Jumbotron 