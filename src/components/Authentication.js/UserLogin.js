import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserLogin = ({ setIsLoggedIn }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)

      .then(() => {
        setIsLoggedIn(true);
        toast.success('Login successful!');
        // alert('Login successful!');

        navigate('/home');
      })
      .catch((error) => {
        toast.error('Login failed: ' + error.message);
      });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsLoggedIn(true);
        toast.success('Sign up successful!');
        navigate('/home');
      })
      .catch((error) => {
        toast.error('Sign up failed: ' + error.message);
      });
  };

  return (
    <>
      <div className="login-container">
        <div className={`cont ${isSignUp ? 's--signup' : ''}`}>
          <div className="form sign-in mt-5">
            <h2>Welcome</h2>
            <label>
              <span>Email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              <span>Password</span>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <p className="forgot-pass">Forgot password?</p>
            <button type="button" className="submit mx-auto" onClick={handleLogin}>Sign In</button>
          </div>
          <div className="sub-cont">
            <div className="img">
              <div className="img__text m--up">
                <h3>Don't have an account? Please Sign up!</h3>
              </div>
              <div className="img__text m--in">
                <h3>If you already have an account, just sign in.</h3>
              </div>
              <div className="img__btn" onClick={toggleSignUp}>
                <span className="m--up">Sign Up</span>
                <span className="m--in">Sign In</span>
              </div>
            </div>
            <div className="form sign-up">
              <h2>Create your Account</h2>
              <label>
                <span>Name</span>
                <input type="text" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label>
                <span>Password</span>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <button type="button" className="submit mx-auto" onClick={handleSignUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default UserLogin;
