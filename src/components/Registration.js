import React from 'react'

function Registration() {
  return (
    <div className='register__wrapper'>
        <h3>Register Here</h3>
        <form class="register__form">
            <div className='input__wrapper'>
                <label>Name</label>
                <input type='text' placeholder='e.g. John Doe' />
            </div>
            <div className='input__wrapper'>
                <label>Email</label>
                <input type='text' placeholder='e.g. john@example.com' />
            </div>
            <div className='input__wrapper'>
                <label>Password</label>
                <input type='password' />
            </div>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Registration