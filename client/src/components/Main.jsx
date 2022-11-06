import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Details from "./Details"
import Catalog from "./Catalog";
import CompanyForm from "./CompanyForm";
// import FigureForm from "./FigureForm";




const Main = () => {

  const [allCompanies, setAllCompanies] = useState([]);
  const [chosenCompany, setChosenCompany] = useState(null);
  // const [allFigures, setAllFigures] = useState([]);
  // const [chosenFigure, setChosenFigure] = useState(null);

  const navigate = useNavigate()


  const getCompanies = async () => {

      
      const response = await axios.get("/api/companies");
      setAllCompanies(response.data.companies);  
  };

  useEffect(() => {
    getCompanies();
  }, []);

  const onClick = (evt) => {
    evt.preventDefault()
    const result = allCompanies.filter(companies => companies.name===evt.target.id);
    setChosenCompany(result)
    navigate('/results')
  }
  
  
  // const handleChange = (evt) => {
  //   evt.preventDefault();
  //   let chosenCompany = parseInt(evt.target.value)
  //   const result = allCompanies.filter(companies => companies.id===chosenCompany);
  //   setChosenCompany(result)
  //   navigate('/results')
  // };

  
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={}/>} /> */}
        <Route path="/companyform" element={<CompanyForm />} />
        <Route path="/catalog" element={<Catalog onClick={onClick} Company={chosenCompany} />}/>
        <Route path="/company/:id" element={<Details />} />

      </Routes>
    </div>
  )
}

export default Main