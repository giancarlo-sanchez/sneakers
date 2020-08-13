import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {signin}  from '../actions/userSessionAction';

function LoginPanel (props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const  userSignin = useSelector(state => state. userSignin);

    const {userInfo, loading, error} = userSignin

    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';


    useEffect(() => {
        if (userInfo) {
          props.history.push(redirect);
        }
        return () => {
          //
        };
      }, [userInfo]);

      const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));

      }

      const handleDemo = (e) => {
        e.preventDefault();
        dispatch(signin('user@one.io', 'abc123'));

      }

      return <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>Sign-In</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor="email">
              Email
            </label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
            </input>
          </li>
          <li>
            <button type="submit" className="button primary">Sign in</button>
          </li>
          <li>
            <button onClick={handleDemo} className="button primary">Demo user</button>
          </li>
          <li>
            New to My-Sneakers?
          </li>
          <li>
            <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button secondary text-center" >Create your Sneakers Account</Link>
          </li>
        </ul>
      </form>
    </div>
  }

export default LoginPanel;
