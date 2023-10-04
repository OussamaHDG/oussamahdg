import "./Register.css"

export default function Register() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Nom:</label>
                <input className="loginInput" type="text" placeholder="Enter your name" />
                <label>Username:</label>
            <input className="loginInput" type="text" placeholder="Enter your Username"/>
                <label>Email:</label>
                <input className="loginInput" type="text" placeholder="Enter your email address" />
                <label>Password:</label>
                <input className="loginInput" type="password" placeholder="Enter your password"></input>
                <button className="loginButton">Register</button>

            </form>
            <button className="registerButton">Login</button>

        </div>
    )
}
