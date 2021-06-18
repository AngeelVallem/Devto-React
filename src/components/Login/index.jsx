
import React from 'react';
import FormsComponent from '../Forms';
import LoginButtons from '../LoginButtons';
import PurpleButton from '../PurpleButton';



const colorPurple = {
  color:  '#3E49D7'
}
const marginTop = {
  marginTop: "5rem"
}
export default function LogInRegistration (){
  return (
    <div className="container">
      <div className=" row d-flex justify-content-center">
        <div style={marginTop} className=" border d-flex flex-column align-items-center justify-content-center bg-white col-12 col-md-6 px-5 pt-5">
          <h2 className="fw-bold text-center mb-0">Welcome to DEV Community</h2>
          <p><span style={colorPurple}>DEV Community</span> is a community of 644,217 <span className="d-flex justify-content-center">amazing developers</span></p>
          <LoginButtons
                      className="mt-2"

            text="Continue with Apple"
            style={{backgroundColor:"black"}}
          />
          <LoginButtons
            className="mt-2"
            text="Continue with GitHub"
            style={{backgroundColor:"#25292e"}}
          />
          <LoginButtons
            className="mt-2"
            text="Continue with Twitter"
            style={{backgroundColor:"#4d9feb"}}
          />
          <div className="mt-3 mx-4 px-3">
            <p 
              className="fw-light"
              style={{textAlign:"center"}}

              >Have a password? Continue with your email address

            </p>
          </div>
          <FormsComponent
            text= 'Email'
            type="email"
          />
          <FormsComponent
            text= 'Password'
            type="email"
            className="mt-2"
          />
          <div className=" w-100 mt-2 d-flex justify-content-start form-check">
            <input type="checkbox " className="fmt-2 d-flex justify-content-start form-check-input" id="exampleCheck1"/>
            <label className="fmt-2 d-flex justify-content-start orm-check-label" for="exampleCheck1">Remember me</label>
          </div>
          <div className="w-100 mt-3">
          <PurpleButton
            className="mx-2"
            text="Continue"
            style={{ width: '100%', textAlign: 'center' }}
          />
          </div>
          <p className="mt-4 pt-3 mb-3" style={colorPurple}>I forgot my password</p>
          
          



          


        </div>
      </div>
    </div>
  )
}