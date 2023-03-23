import React from "react"

export default function RightCol() {
    return (
        <nav className="">
		<div className="box-blue">
		<p>
    <strong> Try it free 7 days</strong> then $20/mo. thereafter 
  </p>
		</div>
		<>
		<p></p>
		</>
		<form className="box" id="form">
    <div className="form-control">
      <input type="text" id="firstname" placeholder="First Name" />
      <small>First Name cannot be empty</small>
    </div>
    <div className="form-control">
      <input type="text" id="lastname" placeholder="Last Name"/>
      <small>Last Name cannot be empty</small>
    </div>
    <div className="form-control">
      <input type="email" id="email" placeholder="Email Address" />
      <small>Email cannot be empty</small>
      <small></small>
    </div>
    <div className="form-control">
      <input type="password" id="password" placeholder="Password" />
      <small>Password cannot be empty</small>
    </div>
	<div>
    <button  onclick="validateForm()">CLAIM YOUR FREE TRIAL</button>
    <small className="last">By clicking the button, you are agreeing to our <strong><a href ="http//123@3345">Terms and Services</a>
		</strong></small>
  </div>
  
  </form>

        </nav>
    )
}