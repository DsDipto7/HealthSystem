import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./loginadmin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/loginadmin/",
        {
          email,
          password,
        }
      );

      toast.success("Admin logged in successfully!");

      // Save candidate data to session storage
      sessionStorage.setItem(
        "candidateData",
        JSON.stringify(response.data.candidate)
      );

      setTimeout(() => {
        navigate("/admindashboard");
      }, 2500);
    } catch (err) {
      const errorMessage =
        err.response?.data?.detail || "Invalid credentials. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login");
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login");
  };

  return (
    <div className="signin-container">
      <ToastContainer
        className="toast-class"
        position="top-center"
        autoClose={2000}
      />
      <div className="card shadow-lg signin-card-div">
        <div className="card-body">
          <h2 className="text-center">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="text-dark">Email:</label>
              <input
                name="email"
                placeholder="Enter email address"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Password:</label>
              <input
                placeholder="Please enter password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="form-group d-flex justify-content-between">
          
        
              
              
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Login
            </button>
            <Link to="/login" className="ghost">Are you an user?</Link>
          </form>

          

        
          <div className="social d-flex justify-content-center">
          

          {/* <p className="w-100 text-center text-dark">
            &mdash; Or Sign In With &mdash;
          </p> */}
          {/* <div className="social d-flex justify-content-center">
            <button
              className="btn btn-danger px-2 py-2 mr-md-1 rounded"
              onClick={handleGoogleLogin}
            >
              <i className="fab fa-google mr-2"></i> Google
            </button>
            <button
              className="btn btn-primary px-2 py-2 ml-md-1 rounded"
              onClick={handleFacebookLogin}
            >
              <i className="fab fa-facebook-f mr-2"></i> Facebook
            </button>
          </div>
          <p className="w-100 text-center text-dark">
            &mdash; &mdash; &mdash; &mdash;
          </p>
          {/* <Link
            to="/company-signin"
            className="text-center btn btn-primary py-2 m-auto"
          >
            Company Signin
          </Link> */}
          </div> 
          <p className="w-100 text-center text-dark">
            &mdash; &mdash; &mdash; &mdash;
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Signin;
