import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Details = () => {
  const [company, setCompany] =  useState(null)
  let { id } = useParams()
  let navigate = useNavigate()

  const getCompanyById = async () => {
    try {
      const response = await axios.get(`/localhost:3001//company/${id}`)
      setCompany(response.data.company)
    }   catch (error){
      console.log(error)
    }
  }

  const deleteCompany = async () => {
    try {
      const response = await axios.delete(
        `/localhost:3001//company/${id}`
      )
      window.alert('You have deleted this company')
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCompanyById()
      }, [setCompany])
  
  return (
    <div className='details'>
      <h2>{company?.name}</h2>
      <img className='company-logo' src={company.url}/>
      <div className="detail-text">
        <h2>Name: {company?.name}</h2>
      </div>
      <div>
        <button onClick={() => {
            if (
              window.confirm(
                `Are you sure you want to delete ${company.name}?`
              )
            ) {
              deleteCompany()
            }
          }}>Delete this company!</button>
      </div>
    </div>
  )
}

export default Details