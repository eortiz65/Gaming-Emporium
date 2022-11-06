import React from "react";
import { Link } from "react-router-dom";


const Catalog = (props) => {
  return (
    <div className="catalog-content">
      {props.figures?.map((figure) => (
        <Link key={figure.id} to={`/figure/${figure._id}`}>
          <div className="figure-card" key={figure._id}>
            <div className="figure-image">
              <img src={figure.url} alt={`${figure.name}`} />
            </div>
            <div className="figure-description">
              <h1>Name: {figure.name}</h1>
              <h2>Manufacturer: {figure.company}</h2>
              <p>Details: {figure.details}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Catalog