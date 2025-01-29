import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form } from "react-bootstrap";
import PERSON_IMAGE from "../../../assets/person_image.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState([]);

  const handleLogin = () => {
    const errors = [];
    const capitalLetterRegex = /[A-Z]/;
    const numberRegex = /\d/;
    const symbolRegex = /[@$!%*?&]/;

    // Validate password
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!capitalLetterRegex.test(password)) {
      errors.push("Password must contain at least 1 capital letter.");
    }
    if (!numberRegex.test(password)) {
      errors.push("Password must contain at least 1 number.");
    }
    if (!symbolRegex.test(password)) {
      errors.push("Password must contain at least 1 symbol.");
    }

    if (errors.length > 0) {
      setPasswordErrors(errors);
      return;
    }

    // Clear errors and proceed
    setPasswordErrors([]);
    navigate("/home");
  };

  return (
    <Container fluid style={{ height: "100vh", justifyContent: "center", alignItems: "center", fontFamily: "Noto Sans", }} >
      <Row className="justify-content-center align-items-center h-100 w-100">
        <Col xs={12} sm={12} lg={6} xl={6} className="d-grid justify-content-center text-align-center" >
          <div>
            <h2 style={{ fontWeight: 700 ,color:"#3D3D3D"}}>Sign In</h2>
            <h7 style={{ fontWeight: 700 ,color:"#3D3D3D"}}>
              New user? <span className="text-primary">Create an account</span>
            </h7>
            <Form>
              <div>
                <Form.Group className="mb-3 mt-3">
                  <Form.Control style={{ borderRadius: "0", border: "2px solid black", width: "280px", height: "48px", marginBottom: "3vh", outline: "none", }} type="text" placeholder="Username or email" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <Form.Control style={{ borderRadius: "0", border: "2px solid black", width: "280px", height: "48px", }} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                {/* Password validation messages */}
                {passwordErrors.length > 0 && (
                  <ul style={{ color: "red", fontWeight: 300, paddingLeft: "1rem", marginTop: "1rem", marginBottom: "0", maxWidth: "280px", fontSize:"small" }} >
                    {passwordErrors.map((err, index) => (
                      <li key={index}>{err}</li>
                    ))}
                  </ul>
                )}

                <Form.Check type="checkbox" style={{ borderRadius: "0", fontWeight: 600, fontSize: 16 }} label="Keep me signed in" />
                <Button className="mt-3" style={{ backgroundColor: "#3C3C3C", width: "280px", height: "48px", outline: "none", border: "none", }} onClick={handleLogin} > Sign In </Button>
                <Row className="mt-3">
                  <Col xs={3} md={3} lg={3} xl={3}>
                    <hr />
                  </Col>
                  <Col xs={6} md={6} lg={6} xl={6} className="d-flex justify-content-center align-item-center" >
                    <span style={{ fontSize: "13px", fontWeight: 700, marginTop: "5px", }} >
                      Or Sign In With
                    </span>
                  </Col>
                  <Col xs={3} md={3} lg={3} xl={3}>
                    <hr />
                  </Col>
                </Row>
                <div style={{ display: "flex", gap: "33px", justifyContent: "center", marginTop: "1vh", }} >
                <div style={{height:"40px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #3E3E3E",borderRadius:"50%"}}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                    height={"1.5em"}
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </div>
                 <div style={{height:"40px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #3E3E3E",borderRadius:"50%"}}>
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height={"1.5em"}
                  >
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                 </div>
               <div style={{height:"40px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #3E3E3E",borderRadius:"50%"}}>
               <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height={"1.5em"}
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
               </div>
                <div style={{height:"40px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #3E3E3E",borderRadius:"50%"}}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height={"1.5em"}
                  >
                    <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                  </svg>
                </div>
                </div>
              </div>
            </Form>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6} xl={6} className="d-none d-lg-block">
          <img
            alt="person"
            style={{ width: "500px", height: "509px" }}
            src={PERSON_IMAGE}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
