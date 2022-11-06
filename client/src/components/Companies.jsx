import React from "react";
import { Link } from "react-router-dom";


const Companies = (props) => {
  return (
    <div className="company-content">
      {props.companies?.map((company) => (
        <Link key={company.id} to={`/company/${company._id}`}>
          <div className="company-card" key={company._id}>
            <div className="company-image">
              <img src={company.url} alt={`${company.name}`} />
            </div>
            <div className="company-description">
              <h1>Name: {company.name}</h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Companies