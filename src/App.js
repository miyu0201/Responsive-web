import React from "react";

import {
  Stack,
  Container,
  Col,
  Row,
  Image,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap/";
import {
  Facebook,
  Twitter,
  Linkedin,
  PlayBtn,
  Search,
  Star,
} from "react-bootstrap-icons";

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("message sent!");
  };

  return (
    <div>
      <Container>
        <Stack gap={3}>
          {/*Nav bar*/}
          <Row>
            <Navbar
              collapseOnSelect
              expand="lg"
              bg="dark"
              variant="dark"
              className="p-3"
            >
              <Navbar.Brand href="#home">
                <Col>
                  <Star color="white" size={45} />
                </Col>
              </Navbar.Brand>
              <Col xs={8} md lg={1} className=" d-flex flex-row-reverse">
                <Search color="white" size={23} />
              </Col>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse>
                <Nav>
                  <Nav.Link href="#aboutUs">About Us</Nav.Link>
                  <Nav.Link href="#product">Product</Nav.Link>
                  <Nav.Link href="#contact"> Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Row>
          {/*about us section*/}
          <Row className="p-5">
            <Col xs={12} md lg={6}>
              <h1>About us</h1>
              <p>
                Lorem ipsum dolor sit amet platea dolore tristique adipiscing
                elit quam facilisis vel ut sed.Lorem ipsum dolor sit ame tplatea
                dolore tristique adipiscing elit quam facilisis vel ut sed.
              </p>
              <p>
                Lorem ipsum dolor sit amet platea dolore tristique adipiscing
                elit quam facilisis vel ut sed.Lorem ipsum dolor sit ame tplatea
                dolore tristique adipiscing elit quam facilisis vel ut sed.
              </p>
            </Col>
            <Col xs={12} md lg={6}>
              <Image
                fluid
                src="https://www.impactplus.com/hubfs/blog-image-uploads/best-about-us-pages.jpg "
              />
            </Col>
          </Row>
          {/*team section*/}
          <Row className="p-5 border-top border-4 border-dark">
            <Row className="p-2 ">
              <h1>Meet our team</h1>
            </Row>
            <Col xs={12} md lg={4} className="text-center mt-2 mb-2 ">
              <Row className="align-items-center">
                <Col xs={6} md lg={12}>
                  <Image
                    fluid
                    src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg "
                  />
                </Col>
                <Col xs={6} md lg={12}>
                  <h4>Jane Smith</h4>
                  <p>Big boss</p>
                </Col>
              </Row>
            </Col>

            <Col xs={12} md lg={4} className="text-center mt-2 mb-2 ">
              <Row className="align-items-center">
                <Col xs={6} md lg={12}>
                  <Image
                    fluid
                    src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg "
                  />
                </Col>
                <Col xs={6} md lg={12}>
                  <h4>John Doe</h4>
                  <p>Code Monkey</p>
                </Col>
              </Row>
            </Col>

            <Col xs={12} md lg={4} className="text-center mt-2 mb-2 ">
              <Row className="align-items-center">
                <Col xs={6} md lg={12}>
                  <Image
                    fluid
                    src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg "
                  />
                </Col>
                <Col xs={6} md lg={12}>
                  <h4>Salvador Felipe Jacinto Domenech</h4>
                  <p>Big Man</p>
                </Col>
              </Row>
            </Col>
          </Row>
          {/*work with us section*/}
          <Row className="p-5 border-top border-4 border-dark">
            <Col xs={12} md lg={8}>
              <h1>Work with us</h1>
              <p>
                Lorem ipsum dolor sit amet platea dolore tristique adipiscing
                elit quam facilisis vel ut sed.
              </p>
            </Col>
            <Col xs={12} md lg={{ span: 2, offset: 2 }} className="my-auto ">
              <Button className="btn btn-primary w-100" onClick={handleClick}>
                Contact us
              </Button>
            </Col>
          </Row>
          {/*footer section*/}
          <Row className="p-2 border-top border-4 border-dark">
            <Col xs={12} md lg={8} className="p-5">
              <Row className="d-flex justify-content-center">
                <Col xs={2}>
                  <Facebook color="black" size={20} />
                </Col>
                <Col xs={2}>
                  <Twitter color="black" size={20} />
                </Col>
                <Col xs={2}>
                  <Linkedin color="black" size={20} />
                </Col>
                <Col xs={2}>
                  <PlayBtn color="black" size={20} />
                </Col>
              </Row>
            </Col>

            <Col
              xs={12}
              md
              lg={2}
              className="d-flex justify-content-center my-auto"
            >
              <Star color="royalblue" size={75} />
            </Col>

            <Col
              xs={12}
              md
              lg={2}
              className="d-flex justify-content-center my-auto "
            >
              <Row className="d-flex justify-content-center my-4 ">
                <h2>Company</h2>
              </Row>
            </Col>
          </Row>
        </Stack>
      </Container>
    </div>
  );
}
export default App;
