import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';
import styled from "styled-components";

const LoginBox = styled.div`
    background: #eae9e7;
    width:50vw;
    height:50vh;
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 35px 0;
    margin: auto;
`;

const Login = (props) => {

    
  // react hook에서 state 사용. 컴포넌트 안에 작성
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

    const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        // 태그의 기본 기능으로 리프레쉬 되는 것을 방지.

      };
    

    return (
        <LoginBox className="loginBox">
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button type="submit">Login</button>
            </form>
        </LoginBox>
    )
}
  
export default Login;