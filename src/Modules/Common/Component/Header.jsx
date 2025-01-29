import { Container, Row, Col, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../commonSlice";

const Header = () => {

  const activeTab = useSelector((state)=>state.common.activeFilter);
  const dispatch = useDispatch();

  return (
    <header className="bg-light py-4">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Title */}
          <Col xs={12} md={6} className="text-start">
            <h4 className="fw-bold" style={{color:"#3D3D3D"}}>Countries</h4>
          </Col>

          {/* Right Side: Navigation */}
          <Col xs={12} md={6} className="text-end">
            <Nav className="justify-content-end">
              {["All", "Asia", "Europe"].map((region) => (
                <Nav.Item key={region}>
                  <Nav.Link
                    href="#"
                    className={`text-dark fw-bold ${
                      activeTab === region ? "text-decoration-underline" : ""
                    }`}
                    onClick={() => dispatch(setActive(region))}
                  >
                    {region}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>

        {/* Welcome Section */}
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <hr className="border-dark" />
            <h1 className="fw-bold" style={{color:"#3D3D3D"}}>WELCOME</h1>
            <hr className="border-dark" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
