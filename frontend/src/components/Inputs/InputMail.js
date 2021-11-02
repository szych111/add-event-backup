import React from 'react'
import './Input.css'

class InputMail extends React.Component {
    render() {
        return (
            <input type='email' className='input input--mail'  placeholder='e-mail' />
                
        )
    }
}

export default InputMail