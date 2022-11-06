import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const FigureForm = () => {
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
      let response = await axios.post(`/api/figure`, formState)
      window.alert('You have created your Figure!')
      setFormState(initialState)
      navigate(`/figure/${response.data.figure._id}`)
    } catch (error) {
    console.log(error)
  }
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <form className="figureform" onSubmit={handleSubmit}>
      <label htmlFor="id">ID:</label>
      <input onChange={handleChange} value={formState.id} type="text" id="id"/>
      <label htmlFor="name">Name:</label>
      <input onChange={handleChange} value={formState.name} type="text" id="name"/>
      <label htmlFor="url">Url:</label>
      <input onChange={handleChange} value={formState.url} type="text" id="url"/>
      <label htmlFor="details">Details:</label>
      <input onChange={handleChange} value={formState.url} type="text" id="url"/>
      <label htmlFor="price">Price:</label>
      <input onChange={handleChange} value={formState.url} type="text" id="url"/>
      <label htmlFor="company">Produced by:</label>
      <input onChange={handleChange} value={formState.company} type="text" id="company"/>
    </form>
  )
}

export default FigureForm