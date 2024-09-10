import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import "../styles/signUp.css"
const SignUp = () => {
  return ( <>
        <Navbar/>
      
        <div className="container" style={{ marginTop: "150px" }}>
        <div className="wrapper d-flex align-items-center justify-content-center h-100">
            <div className="card login-form">
                <div className="card-body">
                    <h5 className="card-title text-center">Login Form</h5>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                        <div className="sign-up mt-4">
                            Don't have an account? <Link href="#">Create One</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>





    </> )}

export default SignUp
