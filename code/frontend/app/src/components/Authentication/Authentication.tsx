
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsLogged, loginUserAsync } from "./authenticationSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Form, Button } from 'react-bootstrap'
import axios from "axios";
import { SERVER } from "../../env";

const Authentication = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const logged = useAppSelector(selectIsLogged);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    window.location.assign("http://localhost:3000/register");
  };


  useEffect(() => {
    if (logged) {
      toast("Welcome, " + `${username} 🎉`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme: "light"
      });
    }
  }, [logged]);

  const checkCredentials = (username: string, password: string) => {
    axios.post(SERVER + '/login/', { username, password })
      .then((response) => {
        // Successful login
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          toast.error("Incorrect Password or Username", {
            position: "top-center",
          });
        } else {
          toast.error('Please check you have filled all required fields.', {
            position: "top-center",
          })
        }
      })
  }

  return (
    <div>
      <ToastContainer />
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <Form>
        <Form.Group>
          <div className="d-flex justify-content-center">
            <label style={{ textAlign: "center", padding: "10px" }}>Username</label>
          </div>
          <Form.Control
            type='username'
            placeholder='Enter Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <br />
        <Form.Group>
          <div className="d-flex justify-content-center">
            <label style={{ textAlign: "center", padding: "10px" }}>Password</label>
          </div>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
          </Form.Control>
        </Form.Group>
        <div className="d-flex justify-content-center">
          {/* <Button className="btn btn-light" style={{ margin: '10px' }} onClick={() => dispatch(loginUserAsync({ username, password }))} >Login</Button> */}
          <Button
            className="btn btn-light"
            style={{ margin: "10px" }}
            onClick={() => {
              dispatch(loginUserAsync({ username, password }));
              checkCredentials(username, password);
            }}
          >
            Login
          </Button>;
        </div>
      </Form>
      <h3 className="d-flex justify-content-center">Not registered?</h3>
      <div className="d-flex justify-content-center">
        <Button className="btn btn-light" style={{ margin: '10px' }} onClick={handleClick}>
          Click Here
        </Button>
      </div>
    </div>
  )
}

export default Authentication;
