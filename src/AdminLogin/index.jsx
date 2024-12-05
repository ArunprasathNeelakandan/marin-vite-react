
import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Login = (props) => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [isError,setIsError] = useState(false)
    const [errorMsgs,setErrorMsg] = useState('')
    const navigate = useNavigate()

    const onChangeUsername = event => {
        setUsername(event.target.value)
      }
    
    const onChangePassword = event => {
        setPassword( event.target.value)
      }
    

    const onSubmitFailure = errorMsg => {
        setIsError(true)
        setErrorMsg(errorMsg)
        
        
      }

    const onSubmitSuccess = (jwt_token) => {
        Cookies.set('jwt_token',jwt_token,{expires:1}) 
        setIsError(false)   
        navigate('/admin')   
      }
    

    const submitForm =async (event) => {
        event.preventDefault()
        const url = 'http://localhost:3000/admin/login'
        const options = {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',  // Ensure Content-Type is correct
            },
            body : JSON.stringify({username,password})
        }

        

        const response = await fetch(url,options)
        console.log(response)
        
        const data = await response.json()
        if (response.ok === true){
            onSubmitSuccess(data.jwtToken)
            
        }else {
            console.log(data)
            onSubmitFailure(data.message)
        }

    }
   const renderUsernameField = () => {
    
        return (
          <>
            <label className="input-label" htmlFor="username">
              USER NAME
            </label>
            <input
              type="text"
              id="username"
              className="username-input-field"
              value={username}
              onChange={onChangeUsername}
              placeholder="Username"
            />
          </>
        )
      }

     const renderPasswordField = () => {
        return (
          <>
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="password-input-field"
              value={password}
              onChange={onChangePassword}
              placeholder="Password"
            />
          </>
        )
      }

  return (
    <div className="login-form-container">
        <form className="form-container" onSubmit={submitForm}>
          <img
            src="https://www.uniquemarine.in/wp-content/uploads/2022/01/Uniquemarine-Logo.png"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{renderUsernameField()}</div>
          <div className="input-container">{renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {isError  && <p className="error-message">*{errorMsgs}</p>}
        </form>
      </div>
  )
}

export default Login
