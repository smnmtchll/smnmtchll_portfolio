import fetch from 'node-fetch';
import Layout from '../../components/main-layout';
import parse from 'html-react-parser';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';

const Projects = ({ projects }) => {
  return (
    <Layout>
      {projects.map((project, key) => (
        <Jumbotron
          key={key}
          className={key % 2 == 0 ? 'jumbo-even' : 'jumbo-odd'}
        >
          <Container fluid>
            <Row>
              <Col
                xs={{ span: 12, order: 2 }}
                sm={{ span: 12, order: 2 }}
                md={{
                  span: project.img.active ? 6 : 12,
                  order: key % 2 == 0 ? 1 : 2,
                }}
              >
                <h5>{project.title}</h5>
                {parse(project.txt)}
                <>
                  {project.btn.active ? (
                    <Button href={project.btn.url} target="_blank">
                      {project.btn.txt}
                    </Button>
                  ) : (
                    ''
                  )}
                </>
              </Col>
              {project.img.active ? (
                <Col
                  xs={{ span: 12, order: 1 }}
                  sm={{ span: 12, order: 1 }}
                  md={{ span: 6, order: key % 2 == 0 ? 2 : 1 }}
                  className="img_col"
                >
                  <Row>
                    <Col
                      xs={project.img.width === '100%' ? 0 : 3}
                      sm={project.img.width === '100%' ? 0 : 3}
                      md={project.img.width === '100%' ? 0 : 4}
                    ></Col>
                    <Col
                      xs={project.img.width === '100%' ? 12 : 9}
                      sm={project.img.width === '100%' ? 12 : 9}
                      md={project.img.width === '100%' ? 12 : 8}
                    >
                      <img
                        src={'/img/projects/' + project.img.path}
                        width={project.img.width}
                      />
                    </Col>
                    <Col></Col>
                  </Row>
                </Col>
              ) : (
                ''
              )}
            </Row>
          </Container>
        </Jumbotron>
      ))}
      ;
      <style global jsx>{`
        .jumbotron {
          transition: all 0.2s ease-in-out;
          background-color: rgba(229, 247, 241, 0.4) !important;
          background-repeat: no-repeat !important;
          background-position: right !important;
          background-size: cover !important;
        }
        .jumbo-odd {
          background-image: url('img/layout/geometric-flip.svg') !important;
        }
        .jumbo-even {
          background-image: url('img/layout/geometric.svg') !important;
        }
        .jumbotron:hover {
          background-color: rgba(229, 247, 241, 0.6) !important;
        }
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
        @media only screen and (max-width: 575px) {
          .jumbotron {
            background-color: rgba(229, 247, 241, 0.6) !important;
          }
        }
      `}</style>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.api_url}/api/projects`);
  const projects = await res.json();
  return {
    props: {
      projects,
    },
  };
}

export default Projects;
