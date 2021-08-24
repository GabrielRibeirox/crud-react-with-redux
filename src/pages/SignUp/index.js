import React from 'react'
import './index.scss'
import { Button } from '../../components/Button'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as auth from '../../redux/modules/authUser/actions'

export default function SignUp() {
  const [username, setName] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  function Sign() {
    history.push('/Home');
    dispatch(auth.enterRequest(username));
  }

  return (
    <div className="container">
      <div className="box">
        <h1>Welcome to CodeLeap network!</h1>
        <form>
          <label>
            Please enter your username
            <input id="name"
              type="text"
              name="name"
              placeholder="John doe"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <Button type="button" disabled={!username} onClick={Sign} >
            Enter
          </Button>
        </form>
      </div>
    </div>
  )
}
