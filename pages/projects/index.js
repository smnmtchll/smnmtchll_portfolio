import Layout from '../../components/main_layout';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';

const Projects = () => {
  return (
    <Layout>
      <Jumbotron className="first">
        <Container fluid>
          <Row>
            <Col
              xs={{ span: 12, order: 2 }}
              sm={{ span: 12, order: 2 }}
              md={{ span: 6, order: 1 }}
            >
              <h5>Artworks London Inventory</h5>
              <p>
                Artworks London was an arts services business I co-founded back
                in 2012. At the core of the business was a{' '}
                <strong>
                  <a
                    href="https://en.wikipedia.org/wiki/MEAN_(solution_stack)"
                    target="_blank"
                  >
                    MEAN
                  </a>
                </strong>{' '}
                cloud based inventory system that supported artists, galleries
                and collectors operating internatioanlly in the commercial
                artworld.
              </p>
              <p>
                <Button
                  href="https://github.com/smnmtchll/API_Boilerplate_v1.0"
                  target="_blank"
                >
                  Learn more about the application
                </Button>
              </p>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              sm={{ span: 12, order: 1 }}
              md={{ span: 6, order: 2 }}
              className="img_col"
            >
              <Row>
                <Col xs={2} sm={2} md={0}></Col>
                <Col xs={8} sm={8} md={12}>
                  <img src="/img/al-graphic.png" width="100%" />
                </Col>
                <Col xs={2} sm={2} md={0}></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Jumbotron className="second">
        <Row>
          <Col
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 6, order: 2 }}
          >
            <h5>Boilerplate API</h5>
            <p>
              Built with <strong>Node</strong>, <strong>Express</strong>,{' '}
              <strong>Prisma</strong>, <strong>MySQL</strong>,{' '}
              <strong>Jest</strong> and <strong>Typescript</strong>, the
              Boilerplate API is a kick starter for future projects. It handles
              basic server side user authentication and authorisation.
            </p>
            <p>
              <Button
                href="https://github.com/smnmtchll/API_Boilerplate_v1.0"
                target="_blank"
              >
                View the code on GitHub
              </Button>
            </p>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 6, order: 1 }}
            className="img_col"
          >
            <Row>
              <Col xs={2} sm={2} md={0}></Col>
              <Col xs={8} sm={8} md={12}>
                <img src="/img/api-snippet.png" width="100%" />
              </Col>
              <Col xs={2} sm={2} md={0}></Col>
            </Row>
          </Col>
        </Row>
      </Jumbotron>
      <Jumbotron className="third">
        <Container fluid>
          <Row>
            <Col
              xs={{ span: 12, order: 1 }}
              sm={{ span: 12, order: 1 }}
              md={{ span: 4, order: 2 }}
              className="img_col"
            >
              <Row>
                <Col xs={4} sm={4} md={2}></Col>
                <Col xs={6} sm={6} md={10}>
                  <img src="/img/bidder-phone.png" width="70%" />
                </Col>
                <Col xs={2} sm={2} md={0}></Col>
              </Row>
            </Col>
            <Col
              xs={{ span: 12, order: 2 }}
              sm={{ span: 12, order: 2 }}
              md={{ span: 8, order: 1 }}
            >
              <h5>Artworks Bidder</h5>
              <p>
                Created using the <strong>Ionic Framework</strong> and
                distributed through the Apple App Store, Artworks Bidder was a
                tool for auction attendees. It accurately calculated the total
                price they would have to pay after the addition of{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Buyer%27s_premium"
                  target="_blank"
                >
                  buyers premium
                </a>{' '}
                based on the increasing hammer price in a live auction.
              </p>
              <p>
                The app was widely adopted by the contemporary commercial art
                sector with over 1500 downloads. It was removed from the App
                Store when Artworks London ceased trading.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Jumbotron className="second">
        <Row>
          <Col
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 6, order: 2 }}
          >
            <h5>Under Construction</h5>
            <p>
              Among other things, I'm currently working on a basic invoice
              creation and tracking system for my wife's craft business. I'm
              working with <strong>React</strong> and <strong>NextJS</strong>,
              building out the backend from my Boilerplate API template.
            </p>
            <p>
              <Button href="http://by-me.london" target="_blank">
                Visit the macramé website
              </Button>
            </p>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 6, order: 1 }}
            className="img_col"
          >
            <Row>
              <Col xs={2} sm={2} md={0}></Col>
              <Col xs={8} sm={8} md={12}>
                <img src="/img/macrame.png" width="100%" />
              </Col>
              <Col xs={2} sm={2} md={0}></Col>
            </Row>
          </Col>
        </Row>
      </Jumbotron>{' '}
      <Jumbotron className="first">
        <Row>
          <Col>
            <h5>Portfolio Site</h5>
            <p>
              smnmtchll.com was built using{' '}
              <strong>
                <a href="https://nextjs.org/" target="_blank">
                  NextJS
                </a>
              </strong>{' '}
              and{' '}
              <strong>
                <a href="https://react-bootstrap.github.io/" target="_blank">
                  React-Bootstrap
                </a>
              </strong>
              . The full code base is available to view on my{' '}
              <a
                href="https://github.com/smnmtchll/smnmtchll_portfolio"
                target="_blank"
              >
                GitHub
              </a>
              .
            </p>
            <p>
              <Button
                href="https://github.com/smnmtchll/smnmtchll_portfolio"
                target="_blank"
              >
                View the code on GitHub
              </Button>
            </p>
          </Col>
        </Row>
      </Jumbotron>
      <style global jsx>{`
        .btn {
          background: #555c5a !important;
          border: #555c5a !important;
        }
        h5 {
          margin-top: 10px;
        }
        p a {
          color: black;
          text-decoration: none;
          border-bottom: 1px solid black;
        }
        p a:hover {
          color: black;
          text-decoration: none;
          opacity: 0.7;
        }
        .first {
          background: rgba(229, 247, 241, 0.3) !important;
          background-image: url('img/geometric.svg') !important;
          background-repeat: no-repeat !important;
          background-position: right !important;
          background-size: cover !important;
        }
        .second {
          background: rgba(229, 247, 241, 0.6) !important;
          background-image: url('img/geometric-flip.svg') !important;
          background-repeat: no-repeat !important;
          background-position: left !important;
          background-size: cover !important;
        }
        .third {
          background: rgba(229, 247, 241, 0.4) !important;
          background-image: url('img/geometric.svg') !important;
          background-repeat: no-repeat !important;
          background-position: right !important;
          background-size: cover !important;
        }
      `}</style>
    </Layout>
  );
};

export default Projects;
