import './login.css'

const Login = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">BWM</h3>
                <span className="lodinDesc"><b>WELCOME!</b> connect with friends and the world round you on BWM </span>
            </div>
            <div className="loginRight">
                <div className="loginForm">
                  <input placeholder='Email' className="loginInput" />
                  <input placeholder='Password' className="loginInput" />
                  <buttton className="loginBtn">Log In</buttton>
                  <span className="loginForgot">Forgot Password?</span>
                  <buttton className="loginRegisterBtn">Create New Account</buttton>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Login

