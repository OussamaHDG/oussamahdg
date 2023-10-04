import "./Login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email:</label>
            <input className="loginInput" type="text" placeholder="Enter your email address"/>
            <label>Password:</label>
            <input className="loginInput" type="password" placeholder="Enter your password"></input>
            <button className="loginButton">Login</button>

            </form>
            <button className="registerButton">Register</button>
      
    </div>
  )
}
