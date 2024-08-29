import { Fragment, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./LoginPage.css";
import { redirect } from "react-router-dom";

const LoginPage = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/auth/jwt/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include', // Stores the refresh token in the HTTP-only cookie
      });

      if (!response.ok) {
        throw new Error('Login failed! Please check your credentials.');
      }

      const data = await response.json();
      localStorage.setItem("accessToken", "");
      localStorage.setItem("accessToken", data.access);
      console.log(localStorage.getItem("accessToken"));
      localStorage.setItem("isAuthenticated", "true");
      window.location.href = '/'
      
      // Redirect to a protected page or update UI to show user is logged in
    } catch (error: any) {
      console.error('Error during login:', error);
      setError(error.message);
    }
  };

  return (
    <Fragment>
      <NavBar />
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">OrbitView Media</h1>
          <p className="login-subtitle">Sign in to your account</p>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Email</label>{/* Only works for username and not email? */}
              <input
                type="string"
                id="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter your email" 
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <div className="login-footer">
            <a href="/forgot-password" className="footer-link">
              Forgot Password?
            </a>
            <a href="/sign-up" className="footer-link">
              Don't have an account? Sign Up
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default LoginPage;
