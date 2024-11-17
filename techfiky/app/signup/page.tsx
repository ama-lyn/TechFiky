import React from 'react'

const page = () => {
  return (
    <div id="centered-form">
        <form id="form" className="form">
          <span className="title text-[#16b776]">Sign up</span>
          <span className="subtitle text-black">Create a free account with your email.</span>

          <div className="row_container">
            <div>
          
              <label>First Name </label>
              <input
                id="firstName"
                type="text"
                className="input"
        
                required
            
              />
            </div>

            <div>
             
              <label>Last Name </label>
              <input
                id="lastName"
                type="text"
                className="input"
               
                required
              />
            </div>
          </div>
          
          <div>
            <label>Username </label>
            <input
              id="username"
              type="text"
              className="input"
              
              required
            />
          </div>

        
          <div>
            <label>Email </label>
            <input
              id="email"
              type="text"
              className="input"
             
              required
            />
          </div>

          <div className="row_container">
            <div>
              
              <label>Password </label>
              <input
                id="password"
                type="password"
                className="input"
                
                required

              />
            </div>
            <div>
            
              <label>Confirm password </label>
              <input
                id="confirmPassword"
                type="password"
                className="input"
        
                required
              />
            </div>
          </div>

          <div className="flex-row">
            <div>
              <input type="checkbox" />
              <label>Remember me </label>
            </div>
          </div>
          <button className="button-submit">Register</button>
          <p className="p">
            Already have an account?
            <span className="span"><a href="/login">Sign in</a></span>
          </p>
        
        </form>
      </div>
  )
}

export default page
