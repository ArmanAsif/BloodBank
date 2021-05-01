import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";


const WelcomeScreen = ({history}) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if(userInfo){
      history.push('/home')
    }
  }, [userInfo, history])

  return (
    <div className="welcome">
      <div className="welcomeHeader">
        <h1>Welcome To Blood Bank</h1>
        <p>Donate Blood. Save Life.</p>
      </div>
      <Link to={'/login'} className="welcomeLink">Welcome</Link>
    </div>
  );
};

export default WelcomeScreen;





