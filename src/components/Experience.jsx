import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const experiences = [
  // Experience
  {
    type: "Experience",
    role: "Data Engineer Intern",
    company: "Neoware Technology Solutions",
    duration: "Oct 2025 – Present",
    description:
      "Working as a Data Engineer Intern at NeoWare.ai, contributing to building scalable, cloud-based data systems that power AI-driven applications.",
  },
  // Education
  {
    type: "Education",
    role: "Master of Computer Applications (MCA)",
    company: "VIT Vellore",
    duration: "2024 – 2026",
    description:
      "Specialized in Data Engineering and AI applications, completed projects in Machine Learning, NLP, and Web Development.",
  },
  {
    type: "Education",
    role: "Bachelor of Computer Applications (BCA)",
    company: "SS Jain Subodh PG College, Jaipur",
    duration: "2021 – 2024",
    description:
      "Learned core programming, data structures, algorithms, and foundational computer science principles.",
  }
];


export const Experience = () => {
  return (
    <section style={{ marginTop: "150px", paddingBottom: "10px"}} className="experience" id="experience">
      <Container>
        <Row>
          <Col>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "80px", fontSize: "3rem" }}
            >
                Background
            </motion.h1>

            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                  initial={{ opacity: 0, scale: 0.6, rotateX: -90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
                >
                  <div className="content">
                    <h4>{exp.role}</h4>
                    <h5>
                      {exp.company} | {exp.duration}
                    </h5>
                    <p>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Inline CSS for dynamic timeline */}
      <style jsx="true">{`
        .timeline {
          position: relative;
          margin: 80px 0;
          padding: 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          width: 6px;
          height: 100%;
          background: linear-gradient(to bottom, #6c63ff, #00c6ff);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          width: 48%;
          padding: 30px;
          background: #fdfdfd;
          border-radius: 16px;
          margin-bottom: 80px;
          transform-origin: top center;
          transition: all 0.3s ease;
          border-left: 4px solid #6c63ff;
        }

        .timeline-item.left {
          left: 0;
        }

        .timeline-item.right {
          left: 52%;
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          top: 25px;
          width: 25px;
          height: 25px;
          background: linear-gradient(45deg, #6c63ff, #00c6ff);
          border-radius: 50%;
          border: 5px solid white;
          transition: transform 0.3s ease;
        }

        .timeline-item.left::after {
          right: -12px;
        }

        .timeline-item.right::after {
          left: -12px;
        }

        .timeline-item:hover::after {
          transform: scale(1.3);
        }

        .timeline-item .content h4 {
          margin-bottom: 10px;
          color: #333;
          font-size: 1.8rem;
        }

        .timeline-item .content h5 {
          margin-bottom: 15px;
          color: #666;
          font-style: italic;
          font-size: 1.2rem;
        }

        .timeline-item .content p {
          color: #555;
          line-height: 1.8;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .timeline-item,
          .timeline-item.left,
          .timeline-item.right {
            width: 100% !important;
            left: 0 !important;
          }
          .timeline-item::after {
            left: calc(50% - 12px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
