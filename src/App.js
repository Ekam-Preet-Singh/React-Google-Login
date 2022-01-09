import "./App.css";
import GoogleLogin from "react-google-login";
import { Fragment, useState } from "react";
import Container from "@material-ui/core/Container";
import loginImg from "./login.png";
import Topography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FcGoogle } from "react-icons/fc";

function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch("/api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(googleData);

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };

  return (
    <Container component="div" maxWidth="xs" className="root">
      <div className="paper">
        <div>
          {loginData ? (
            <Fragment>
              <Topography variant="h6" style={{ paddingTop: "15px" }}>
                <strong>You logged in as</strong>
                <br />
                Name: {loginData.name}
                <br />
                Email: {loginData.email}
              </Topography>
              <Button
                variant="outlined"
                color="primary"
                className="submit"
                style={{ marginTop: "15px", marginLeft: "130px" }}
                startIcon={<FcGoogle />}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Topography variant="h4" style={{ paddingTop: "15px" }}>
                React Google Login App
              </Topography>
              <img src={loginImg} className="mainImg" alt="signup img" />
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={"single_host_origin"}
                className="submit"
              ></GoogleLogin>
            </Fragment>
          )}
        </div>
      </div>
    </Container>
  );
}

export default App;
