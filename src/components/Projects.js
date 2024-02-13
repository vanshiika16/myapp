import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "SHOPIT",
      description: "Full-Stack E-commerce Website",
      imgUrl: projImg3,
      url: "https://github.com/vanshiika16/shop-it",
    },
    {
      title: "EXPENSE TRACKER",
      description: "React.Js App",
      imgUrl: projImg2,
      url:"https://github.com/vanshiika16/Expenses_Tracker",
    },
    {
      title: "FitFreak",
      description: "Fitness App",
      imgUrl: projImg6,
      url: "https://vanshiika16.github.io/myapp/",
    }, 
    {
      title: "My Perf Trip",
      description: "Travel Agency Website",
      imgUrl: projImg1,
      url:"https://github.com/vanshiika16/MY-PERF-TRIP",
 
    },
    {
      title: "Weathera",
      description: "Weather Website",
      imgUrl: projImg4,
      url:"https://github.com/vanshiika16/Weather-app",
    },
    {
      title: "Portfolio",
      description: "My Personal Portfolio",
      imgUrl: projImg5,
      url: "https://vanshiika16.github.io/myapp/",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Qualifications</h2>
                <p>A warm hello to you!</p>
                <p>I'm Vanshika, senior in Computer Science and Engineering. I'm a goal oriented person with a never stop learning attitude. Java, DSA and Full-Stack Development defines me for now. I'm self-taught coder and developer. For me, logical thinking === good software.</p>
                <p>Here is a glance of my work:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">PROJECTS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">EXPERIENCE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">CERTIFICATIONS</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p> ‣ Internxt Technologies Pvt Ltd. - Full Stack Developer</p>  <p>
                      (<time dateTime="2024-01">August, 2023</time> - February, 2024)</p>
                      <p> ‣ CODSOFT - Web Developer </p> <p>(<time dateTime="2024-01">August, 2023</time> - September, 2023)</p> 
                      <p> ‣ HCL Edutech - Java Programmer</p> <p>
                      (<time dateTime="2024-01">February, 2022</time> - August, 2022)</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> ➡ The Complete 2023 Web Development Bootcamp </p>
                      <p> ➡ Agile Methodology Virtual Experience Program</p>
                      <p> ➡ Data Science Foundations </p>
                      <p> ➡ Smart English Basics for Professionals </p>
                      <p> ➡ Cybersecurity Job Simulation</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
