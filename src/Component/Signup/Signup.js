import React from 'react'
import "./signup.css"
import { NavLink } from 'react-router-dom'
const Signup = () => {
    return (
        <div className='signupParent'>
            <div className='formParent'>
                <h1>Sign Up</h1>
                <form>
                    <label htmlFor='name'>Full Name</label>
                    <br></br>
                    <input type='text' name='Username' required placeholder='dinesh' id='name' />

                    <br></br>
                    <label htmlFor='fathername'>Father Name</label>
                    <br></br>
                    <input type='text' name='fathername' required placeholder='dinesh' id='fathername' />

                    <br></br>  <label htmlFor='Email'>Email</label>

                    <br></br>

                    <input type='text' name='Email' required placeholder='dinesh' id='Email' />
                    <br></br>
                    <span className='FormError'>Please enter a valid email</span>
                    <br></br>  <label htmlFor='Phone'>Phone Number:</label>

                    <br></br>
                    <div className='phoneNumberParent'>
                        <div className='countyCode'>+91</div>
                        <input type='tel' name='Phone' required placeholder='dinesh' id='Phone' />
                    </div>


                    <span className='FormError'>Please enter a valid number</span>
                    <br></br>
                    <label htmlFor='password'>Password </label>
                    <br></br>
                    <input type='password' name='password' placeholder='123123' required id='password' />
                    <br></br>
                    <span className='FormError'>Please enter a password</span>
                    <br></br>

                    <button className='login'>Sign Up</button>
                    <NavLink className='signup' to="/">
                        <p >Already a member? login</p>

                    </NavLink>
                </form>
            </div>
            <NavLink to="/dashboard">
                <button style={{ color: "black" }} className='dash' >Go to dashboard</button>

            </NavLink>
        </div>
    )
}

export default Signup