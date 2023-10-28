import React from 'react'
import "./login.css"
import { NavLink } from 'react-router-dom'
const Login = () => {
    return (
        <div className='loginParent'>
            <div className='formParent'>
                <h1>Login</h1>
                <form>
                    <label htmlFor='email'>Email/Mobile</label>
                    <br></br>
                    <input type='email' name='email' required placeholder='dkp@gmail.com' id='email' />

                    <br></br>
                    <label htmlFor='password'>Password</label>
                    <br></br>
                    <input type='password' name='password' placeholder='123123' required id='password' />
                    <br></br>

                    <button className='login'>Login</button>
                    <NavLink className='signup' to="/signup">
                        <p >not a member? Signup</p>

                    </NavLink>
                </form>
            </div>
        </div>
    )
}

export default Login