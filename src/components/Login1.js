import React from 'react';
import '../App.css';

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted!");
    };

    return (
        <div className="login-page dark-theme">
            <div className="login-container">
                <div className="login-content">
                    <h2>Welcome back to <span className="highlight">CODEX</span>,</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="email" placeholder="Email" required />
                            
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Password" required />
                            
                        </div>
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                    <p className="signup-text">
                        Don't have an account? Sign up, <a href="#" className="signup-link">here</a>
                    </p>
                </div>
            </div>
            <footer className="login-footer">
                <p>Built with 💛 &nbsp; by &nbsp;
                <a href="https://github.com/sumit45sagar">Team Codex</a>.</p>
            </footer>
        </div>
    );
};

export default Login;
