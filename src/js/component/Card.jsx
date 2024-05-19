import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = () => {
  return (
    <div className="card mb-3" style={{ maxWidth: "18rem", textAlign: "center" }}>
      <img src={rigoImage} className="card-img-top" alt="..." style={{ padding: "20px" }} />
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <hr /> {/*__________*/}
        <a href="#" className="btn btn-primary" >Find out More </a>
      </div>
    </div>
  )
}

export default Card