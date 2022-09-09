import React from "react";
import MainNav from "./MainNav.js";
import Footer from "./Footer.js";
import { Stack, Container, Col, Row, Image, Button } from "react-bootstrap/";

function App() {
  const handleClick = e => {
    e.preventDefault();
    console.log("message sent!");
  };

  return (
    <div>
      <Container>
        <Stack className="px-5" gap={3}>
          {/*Nav bar*/}
          <Row className="py-4">
            <MainNav />
          </Row>
          {/*about us section*/}
          <Row className="py-5">
            <Col xs={12} md lg xl={6}>
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
            <Col xs={12} md lg={6} className="d-flex">
              <Image
                fluid
                thumbnail
                src="https://www.impactplus.com/hubfs/blog-image-uploads/best-about-us-pages.jpg "
              />
            </Col>
          </Row>
          {/*team section*/}
          <Row className="py-5 border-top border-4 border-dark">
            <Row className="p-2 ">
              <h1>Meet our team</h1>
            </Row>
            <Col xs={12} md={6} lg={3} className="text-center mt-2 mb-2 ">
              <Row className="align-items-center">
                <Col xs={5} md lg={12}>
                  <Image
                    fluid
                    src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg "
                  />
                </Col>
                <Col xs={7} md lg={12}>
                  <h4>Jane Smith</h4>
                  <p>Big boss</p>
                </Col>
              </Row>
            </Col>

            <Col xs={12} md={6} lg={3} className="text-center mt-2 mb-2 ">
              <Row className="align-items-center">
                <Col xs={5} md lg={12}>
                  <Image
                    fluid
                    src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg "
                  />
                </Col>
                <Col xs={7} md lg={12}>
                  <h4>John Doe</h4>
                  <p>Code Monkey</p>
                </Col>
              </Row>
            </Col>

            <Col xs={12} md={6} lg={3} className="text-center mt-2 mb-2 ">
              <Row className="align-items-center">
                <Col xs={5} md lg={12}>
                  <Image
                    fluid
                    src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg "
                  />
                </Col>
                <Col xs={7} md lg={12} className="align-items-center">
                  <h4>Arnold Schwarz</h4>
                  <p>CTO</p>
                </Col>
              </Row>
            </Col>

            <Col xs={12} md={6} lg={3} className="text-center mt-2 mb-2 ">
              <Row className="align-items-center">
                <Col xs={5} md lg={12}>
                  <Image
                    fluid
                    src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg "
                  />
                </Col>

                <Col xs={7} md lg={12} className="align-items-center">
                  <h4>Salvador Felipe</h4>
                  <p>Big Man</p>
                </Col>
              </Row>
            </Col>
          </Row>
          {/*work with us section*/}
          <Row className="py-5 border-top border-4 border-dark">
            <Col xs={12} md lg={8}>
              <h1>Work with us</h1>
              <p>
                Lorem ipsum dolor sit amet platea dolore tristique adipiscing
                elit quam facilisis vel ut sed.
              </p>
            </Col>
            <Col xs={12} md lg={{ span: 2, offset: 2 }} className="my-auto ">
              <Button
                className="btn btn-primary w-100 mt-5"
                onClick={handleClick}
              >
                Contact us
              </Button>
            </Col>
          </Row>
          {/*footer section*/}
          <Footer />
        </Stack>
      </Container>
    </div>
  );
}
export default App;
