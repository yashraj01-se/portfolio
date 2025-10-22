import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorsharp from "../assets/img/color-sharp.png";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // For very large screens
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    
    <section className="skill -mt-16" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>
I specialize in AI/ML and Machine Learning, along with Web Development (React.js, Node.js), Java & SpringBoot, Python, NLP, SQL, and MongoDB. My expertise includes designing and deploying AI-driven applications, frontend and backend development, and database management. I am passionate about creating scalable solutions and excel in problem-solving, innovation, and leveraging AI/ML to solve real-world problems.
</p>

                    <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}          // ✅ Auto-play enabled
                autoPlaySpeed={2000}      // ✅ Moves every 2 seconds
                arrows={false}
                className="skill-slider"
                
              >
                    <div className="item">
                        <img src={meter3} alt="Image"></img>
                        <h5>Machine Learning</h5>
                    </div>
                    <div className="item">
                        <img src={meter1} alt="Image"></img>
                        <h5>Deep Learning</h5>
                    </div>
                    <div className="item">
                        <img src={meter2} alt="Image"></img>
                        <h5>Computer Vision</h5>
                    </div>
                    <div className="item">
                        <img src={meter3} alt="Image"></img>
                        <h5>Pytorch</h5>
                    </div>
                    <div className="item">
                        <img src={meter1} alt="Image"></img>
                        <h5>Generative AI</h5>
                    </div>
                    <div className="item">
                        <img src={meter2} alt="Image"></img>
                        <h5>Data Structure and Algorithm</h5>
                    </div>
                    <div className="item">
                        <img src={meter3} alt="Image"></img>
                        <h5>C++</h5>
                    </div>
                    <div className="item">
                        <img src={meter1} alt="Image"></img>
                        <h5>System Design</h5>
                    </div>
                    <div className="item">
                        <img src={meter2} alt="Image"></img>
                        <h5>NLPs and LLMs</h5>
                    </div>
                    
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorsharp}/>
    </section>
  );
};

export default Skills;
