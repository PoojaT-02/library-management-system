import './style.scss';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate();
  const redirectLogin = () => {
    navigate('/');
  }
  const redirectbook = () => {
    navigate('/books');
  }

  return (
    <div className='login_wrapper'>
       <div className="signcontainer">
    <h2>Sign Up</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Mobile</label>
        <input type="number" id="number" name="number" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div className="form-group last">
        <button type="submit" onClick={redirectbook}>Sign Up</button>
        <span onClick={redirectLogin} className='subredirectCls'>Log in</span>
      </div>
    </form>
  </div>
    </div>
  );
}

export default SignUp;
