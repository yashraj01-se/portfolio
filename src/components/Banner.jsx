import { useState, useEffect } from "react";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { BsArrowRightCircle } from "react-icons/bs";
import headerimage from "../assets/img/header-img.svg";
import bg from "../assets/img/banner-bg.png";

function Banner() {
  const [LoopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setDeleting] = useState(false);
  const toRotate = ["AI/ML Engineer","Data Scientist","DL Engineer","NLP Enthusiast"];
  const [Text, SetText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 50);
  const period = 1500;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [Text]);

  const tick = () => {
    let i = LoopNumber % toRotate.length;
    let fulltext = toRotate[i];
    let updatedText = isDeleting
      ? fulltext.substring(0, Text.length - 1)
      : fulltext.substring(0, Text.length + 1);

    SetText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fulltext) {
      setDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setDeleting(false);
      setLoopNumber(LoopNumber + 1);
      setDelta(500);
    }
  };

  return (
    <div>
      <section className="Banner" id="home"
      style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    minHeight: "100vh",
    maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
  }}>
        <Container>
          <Row className="align-items-center">
            {/* Move Text Down */}
            <Col xs={12} md={6} xl={7} className="mt-5 mt-lg-5">
              <span className="Tagline text-primary fw-bold">
                Welcome to my Portfolio
              </span>
              <h1 className="mt-3">
                Hi, <span className="wrap text-warning">{Text}</span>
              </h1>
              <p className="text-muted">
                Aspiring AI/ML Engineer passionate about building intelligent, data-driven solutions. 
                Experienced in Machine Learning, Deep Learning, NLP, and Generative AI, 
                with hands-on expertise in Python, PyTorch, and real-world AI projects.
              </p>
              <button
                className="btn btn-primary mt-3"
                onClick={() => window.open("https://leetcode.com/u/yashrajsharma14/", "_blank", "noopener,noreferrer,width=" + screen.width + ",height=" + screen.height)}
              >
                Let's Code <BsArrowRightCircle size={25} />
              </button>
            </Col>

            {/* Smaller Header Image */}
            <Col
              xs={12}
              md={6}
              xl={5}
              className="d-flex justify-content-center"
            >
              <img
                src={headerimage}
                alt="Header img"
                className="img-fluid"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Banner;
