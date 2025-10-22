import AOS from "aos";
import "aos/dist/aos.css";
import {React,useEffect} from "react";
import { Tab, Tabs } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Nav from "react-bootstrap/Nav";
import { Projectcard } from "./ProjectCards";
import colorsharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Face.png";
import projImg2 from "../assets/img/gesture.png";
import projImg3 from "../assets/img/movie.png";
import projImg4 from "../assets/img/news.png";
import projImg5 from "../assets/img/mcq.png";
import projImg6 from "../assets/img/sports.png";
function Projects({index}) {
  useEffect(() => {
    AOS.init({
      duration: 600,  // Faster animation speed (reduce from 1000 to 600ms)
      once: true,     // Animation runs every time it appears in view
      offset: 50,     // Trigger animation earlier (reduce from 300 to 100px
      easing: "ease-in-out", // Smoother animation
    });
  }, []);
  
 const project = [
    {
      title: "GuardiAI – AI Facial Security",
      description:
        "Real-time facial recognition using PyTorch and Siamese Neural Networks for secure authentication.",
      imgUrl: projImg1,
      link: "https://github.com/yashraj01-se/GuardiAI-AI-Powered-Facial-Security-System"
    },
    {
      title: "Gesture_2_voice",
      description:
        "Converts hand gestures/sign language into speech using CNNs and Seq2Seq models for real-time communication.",
      imgUrl: projImg2,
      link:"https://github.com/yashraj01-se/Gesture_2_voice"
    },
    {
      title: "Movie-Recommendation-System-Using-Machine-Learning",
      description:
        "Recommender system using NLP & ML to suggest movies based on content similarity.",
      imgUrl: projImg3,
      link:"https://github.com/yashraj01-se/Movie-Recommendation-System-Using-Machine-Learning"
    },
    {
      title: "NewsAnimal-React-Based-Application",
      description:
        "React-based news app displaying latest headlines with filtering and responsive design.",
      imgUrl: projImg4, 
      link:"https://github.com/yashraj01-se/NewsAnimal-React-Based-Application"
    },
    {
      title: "MCQInterview_Generator",
      description:
        "AI-powered system to generate MCQs and simulate interviews for skill assessment.",
      imgUrl: projImg5, 
      link:"https://github.com/yashraj01-se/MCQInterview_Generator"
    },
    {
      title: "Human Tracker & Touch Detection for Sports Analysis",
      description:
        "Real-time human tracking and touch detection using computer vision for sports analytics.",
      imgUrl: projImg6, 
      link:"https://github.com/yashraj01-se/Human_tracker_and_Touch_detection_for_Sports_analysis_using_Computer_Vision"
    },
  ];


  return (
    <section style={{ marginTop:"-10px",marginBottom:"10px"}} className="project" id="project" data-aos="fade-down" // 🛑 Section appears after 500ms delay
    data-aos-anchor-placement="top-bottom">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
             A showcase of AI-powered projects spanning automated screening, interview simulation, text analysis, storytelling evaluation, eCommerce, news aggregation, and recommendation systems. These applications leverage machine learning, NLP, computer vision, and web technologies to streamline workflows, enhance decision-making, and deliver smarter, more interactive user experiences across diverse domains.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="mb-3">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
  <Tab.Pane eventKey="first">
    <Row>
      {project.slice(0, 3).map((project, index) => (
        <Projectcard key={index} {...project} />
      ))}
    </Row>
  </Tab.Pane>
  <Tab.Pane eventKey="second">
    <Row>
      {project.slice(3, 6).map((project, index) => (
        <Projectcard key={index} {...project} />
      ))}
    </Row>
  </Tab.Pane>
 <Tab.Pane eventKey="third">
  <Row className="justify-content-center align-items-center" style={{ minHeight: "200px" }}>
    <Col className="text-center">
      <h4 style={{ color: "#555", fontStyle: "italic" }}>
        More Projects Coming Soon...
      </h4>
      <p style={{ color: "#888" }}>
        Stay tuned for new AI/ML projects and updates!
      </p>
    </Col>
  </Row>
</Tab.Pane>

</Tab.Content>

            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorsharp2}
        alt="Background"
      />
    </section>
  );
}

export default Projects;
