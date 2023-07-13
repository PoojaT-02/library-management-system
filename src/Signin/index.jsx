import "./style.scss";
import { useNavigate } from 'react-router-dom';

function SignIN() {
  const navigate = useNavigate();
  const redirectLogin = () => {
    navigate('/signup');
  }
  const redirectbook = () => {
    navigate('/books');
  }

  return (
    <div className="main_wrapper">
      <div className="container">
        <h2>Sign in</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group last">
            <button type="submit" onClick={redirectbook}>Log in</button>
            <span onClick={redirectLogin} className='subredirectCls'>Sign Up</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIN;
