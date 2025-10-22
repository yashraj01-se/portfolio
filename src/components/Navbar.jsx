import Container from "react-bootstrap/Container";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import logo from "../assets/img/logo.svg";

function NavbarComponent() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
  
      // Get all sections
      const sections = ["home", "skills","experience", "projects","connect"];
      let mostVisibleSection = "home";
      let maxVisibility = 0;
  
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibility = rect.bottom - rect.top-100; // Visible height
  
          // Only update if more of this section is visible than the previous max
          if (rect.top >= -100 && rect.top < window.innerHeight * 0.5 && visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleSection = section;
          }
        }
      });
  
      setActiveLink(mostVisibleSection);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  // Smooth scroll to a section when clicking a navbar link
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveLink(id); // Update active state
    }
  };

  return (
    <Navbar
      expand="lg"
      className={scrolled ? "scrolled" : ""}
      style={{
        background: "transparent",
        boxShadow: "none",
        borderBottom: "none",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" style={{ width: "120px", height: "auto" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex justify-content-center">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={activeLink === "experience" ? "active navbar-link" : "navbar-link"}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("experience");
              }}
            >
              Background
            </Nav.Link> 
            <Nav.Link
              href="#projects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("project");
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#connect"
              className={activeLink === "connect" ? "active navbar-link" : "navbar-link"}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("connect");
              }}
            >
              Message
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <button
              className="vvd mx-4"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/yashraj-sharma-61027a2aa/",
                  "_blank",
                  "noopener,noreferrer,width=" + screen.width + ",height=" + screen.height
                )
              }
              style={{ color: "white" }}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
