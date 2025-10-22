import Col from "react-bootstrap/esm/Col";
import React from "react";

export const Projectcard = ({ title, description, imgUrl, index, link }) => {
  return (
    <Col
      sm={6}
      md={4}
    >
      <div className="proj-card">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="proj-imgbx">
            <img src={imgUrl} alt={title} className="img-fluid" />
          </div>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};
