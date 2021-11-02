import React, {useReducer, useState} from 'react'
import './Form.css'
import InputDate from '../Inputs/InputDate'
/* import InputFirstName from '../Inputs/InputFirstName'
import InputLastName from '../Inputs/InputLastName'
import InputMail from '../Inputs/InputMail' */
import Button from '../Button/Button'

const formReducer = (state, e) => {
  if (e.reset) {
    return {
      firstName: '',
      lastName: '',
      email: '',
      date: '',
    }
  }
    return {
        ...state, 
        [e.name]: e.value
    }
}

function Form() {
    const [formData, setFormData] = useReducer(formReducer, {})
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setSubmitting(true)

        const url = 'http://localhost:5000/api/events'

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: formData.firstName.name,
            lastName: formData.lastName.name,
            email: formData.email.name,
            eventDate: formData.eventDate.name
          })
        }

        fetch(url, requestOptions)
        .then(response => alert('You have submitted the form.'))
        .catch(error => alert('Form submit error', error))

        setTimeout(() => {
            setSubmitting(false)
            /* setFormData({
              reset: true
            }) */
        }, 3000)
    }

    const handleChange = e => {
        setFormData({
          name: e.target.name,
          value: e.target.value
        });
      }
    

    return (
        <form className='Form' onSubmit={handleSubmit} disabled={submitting} >
            {submitting && 
            <div>
              {Object.entries(formData).map(([name, value]) => (
                <li key={name}>{name}:{value.toString()}</li>
              ))}
          </div>}
            <input type='text' name='firstName' placeholder='first name' value={formData.firstName || ''} onChange={handleChange} />
            <input type='text' name='lastName' placeholder='last name' value={formData.lastName || ''} onChange={handleChange} />
            <input type='email' name='email' placeholder='email' value={formData.email || ''} onChange={handleChange} />
            <input type='date' name='eventDate' value={formData.eventDate || ''} onChange={handleChange} />
            <Button />         
        </form>
    )
        
}

export default Form