import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const CompanyForm = () => {
  const initialState = {
    id: '',
    name: '',
    url: ''
  }

  const [formState, setFormState] = useState(initialState)

  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let response = await axios.post(`/api/company`, formState)
      window.alert('You have created your Company!')
      setFormState(initialState)
      navigate(`/company/${response.data.coaster._id}`)
    } catch (error) {
    console.log(error)
  }
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <form className="companyform" onSubmit={handleSubmit}>
      <label htmlFor="id">ID:</label>
      <input onChange={handleChange} value={formState.id} type="text" id="id"/>
      <label htmlFor="name">Name:</label>
      <input onChange={handleChange} value={formState.name} type="text" id="name"/>
      <label htmlFor="url">Height:</label>
      <input onChange={handleChange} value={formState.url} type="text" id="url"/>
    </form>
  )
}

export default CompanyForm