import React, { useState } from 'react'
import '../sign-up/Sign.css'
import bg from '../../assets/images/bg/curved14.jpg'
import FooterSign from '../../components/footer-sign/Footer-Sign'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/reducer/UserSlice'
import { ToastContainer, toast } from 'react-toastify'

function SignIn() {
  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState([]);
  const dispatch = useDispatch();

  const handleOnchangeInput = (e) => {
    setValueInput({ ...valueInput, [e.target.name]: e.target.value })
  }

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(login(valueInput)).unwrap();
      toast.success('Login successfully', {
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
        if(valueInput.email ==="admin@gmail.com")
        {
         data && navigate("/admin/manage-rooms");
        }
        else
        {
          data && navigate("/");
        }

      }, 2000);
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
// console.log(22222,valueInput.email);

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
                  <span>Email</span>
                  <input type="text" placeholder="Email" name='email' onChange={handleOnchangeInput} />
                  <span>Password</span>
                  <input type="password" placeholder="Password" name='password' onChange={handleOnchangeInput} />
                  <input type="checkbox" />Remember me
                  <button>SIGN IN</button>
                  <span>Don't have an account ?  </span>
                  <NavLink to={"/auth/sign-up"}>
                    <b>Sign in</b>
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

export default SignIn