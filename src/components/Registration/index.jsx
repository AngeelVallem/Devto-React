
import React, { useState } from "react";
import LoginButtons from '../LoginButtons';
import PurpleButton from '../PurpleButton';
import { useHistory } from "react-router";


const colorPurple = {
  color:  '#3E49D7'
}
const marginTop = {
  marginTop: "5rem"
}


export default function RegistrationForm (){

  const [email, setEmail]=useState('')
  const [password, setPassword]= useState('')
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')

  const history = useHistory();

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password, name, avatar)

    try {
      const newUser = JSON.stringify({
        email,
        password,
        avatar,
        name
      });
      const response = await fetch(
        "http://localhost:8080/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: newUser,
        }
      );
     const responseJson =  await response.json();
     console.log(responseJson)

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };


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
          <form className="w-100 d-flex flex-column align-items-center" onSubmit={handleSubmit}>
            <div className="mt-2" style={{width:'100%'}}>
              <label className="form-label fw-bold">Name</label>
              <input 
              className="form-control" 
              style={{  backgroundColor: '#f9fafa'}}
              placeholder=''
              required
              value={name}
              onChange={(event) => setName(event.target.value)}

              type='text' 
              />
            </div>

            <div className="mt-2" style={{width:'100%'}}>
              <label className="form-label fw-bold">Avatar</label>
              <input 
              className="form-control" 
              style={{  backgroundColor: '#f9fafa'}}
              placeholder=''
              required
              value={avatar}
              onChange={(event) => setAvatar(event.target.value)}
              type='url' 
              />
            </div>

            <div className="mt-2" style={{width:'100%'}}>
              <label className="form-label fw-bold">Email</label>
              <input 
              className="form-control" 
              style={{  backgroundColor: '#f9fafa'}}
              placeholder=''
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type='email' 
              />
            </div>

            <div className="mt-2" style={{width:'100%'}}>
              <label className="form-label fw-bold">Password</label>
              <input 
              className="form-control" 
              style={{  backgroundColor: '#f9fafa'}}
              placeholder=''
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}

              type='password' 
              />
            </div>

            <PurpleButton
            type="submit"
            className="mx-2 mt-4 "
            text="Continue"
            style={{ width: '70%', textAlign: 'center' }}
          />
          
          </form>
          
          
          <div className=" w-100 mt-2 d-flex justify-content-start form-check">
            <input type="checkbox " className="fmt-2 d-flex justify-content-start form-check-input" id="exampleCheck1"/>
            <label className="fmt-2 d-flex justify-content-start orm-check-label" for="exampleCheck1">Remember me</label>
          </div>
          <div className="w-100 mt-3">
          
          </div>
          <p className="mt-4 pt-3 mb-3" style={colorPurple}>I forgot my password</p>
          
          



          


        </div>
      </div>
    </div>
  )
}