import { NavLink, useNavigate } from 'react-router-dom';
import bg from '../../assets/images/bg/curved14.jpg'
import FooterSign from '../../components/footer-sign/Footer-Sign';
import './Sign.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../../redux/reducer/UserSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {

  const [valueInput, setValueInput] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnchangeInput = (e) => {
    setValueInput({ ...valueInput, [e.target.name]: e.target.value })
  }

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(register(valueInput)).unwrap();
      toast.success('Created successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/auth/sign-in");
      }, 3000);
    }
    catch (error) {
      // console.log(error.message);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }


  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
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
                <form onSubmit={handleClickSubmit}>
                  <span>Name</span>
                  <input type="text" placeholder="Name" name='name' onChange={handleOnchangeInput} />
                  <span>Email</span>
                  <input type="text" placeholder="Email" name='email' onChange={handleOnchangeInput} />
                  <span>Password</span>
                  <input type="password" placeholder="Password" name='password' onChange={handleOnchangeInput} />
                  <input type="checkbox" />
                  <label>I agree the Term and Condition </label>
                  <button type='submit'>SIGN UP</button>
                  <span>Already have an account ?</span>
                  <NavLink to={"/auth/sign-in"}>
                    <b>Sign up</b>
                  </NavLink>
                </form>
              </div>
            </div>
            <FooterSign />
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;