import bg from '../../assets/images/bg/curved14.jpg'
import FooterSign from '../../components/footer-sign/Footer-Sign';
import './Sign-up.css'
import React from 'react'

function SignUp() {
  return (
    <>
      <div className='Main-body'>
        <div className='Main_Container'>
          <div className='bg_image'>
            <img src={bg} alt="" />
          </div>
          <div className="box_position">
            <div className="form_conten">
              <div className="box_text">
                <h1> Welcome !</h1>
              </div>
              <div className="box_form">
                <input type="text" placeholder="Name" />
                <p></p>
                <input type="text" placeholder="Email" />
                <p></p>
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Re-password" />
                <input type="checkbox" />
                <label>I agree the Term and Condition </label>
                <button>SIGN UP</button>
                <p>Already have an account? <b>Sign in</b></p>
              </div>
            </div>
            <FooterSign/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;