import React from 'react'
import { useState } from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import imga from '../assets/img/contact-img.svg'
function Contact() {
    const formIntialdetails={
        firstname:'',
        lastname:'',
        email:'',
        message:'',
        phone:'',
    }
    const[formdetails,setformdetails]=useState(formIntialdetails);
    const[buttontext,setbuttontext]=useState('Send');
    const[status,setstatus]=useState({});

    const onformupdate=(category,value)=>{
       setformdetails({
        ...formdetails,
        [category]:value
       })
    }
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        setbuttontext("Sending..."); // Update button text to indicate processing
    
        const formData = {
            firstname: formdetails.firstname,
            lastname: formdetails.lastname,
            email: formdetails.email,
            phone: formdetails.phone,
            message: formdetails.message
        };
    
        try {
            const response = await fetch("https://formspree.io/f/xwpvgagg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(formData)
            });
    
            const responseData = await response.json(); // Parse JSON response
    
            if (response.ok) {
                setstatus({ success: true, message: "Message sent successfully!" });
                setformdetails(formIntialdetails); // Reset form fields
                setTimeout(() => {
                    setstatus({});
                }, 5000);
            } else {
                setstatus({ success: false, message: responseData.error || "Failed to send message." });
            }
        } catch (error) {
            console.error("Error:", error);
            setstatus({ success: false, message: "An error occurred. Please try again." });
        }
    
        setbuttontext("Send"); // Reset button text
    };
    
    
  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col ms={6}>
                <img src={imga} alt='contact'/>
                </Col>
                <Col md={6}>
                   <h2 style={{ marginBottom: "10px", marginTop: "-20px" }}>Get in Touch</h2>
                   <form onSubmit={handleSubmit} className="p-5 shadow-sm bg-white rounded mx-auto" style={{ maxWidth: "600px" }}>
    <Row className="gy-2">
        {/* First & Last Name Side by Side */}
        <Col xs={6}>
            <input 
                type="text" 
                className="form-control form-control-sm" 
                value={formdetails.firstname} 
                placeholder="First Name" 
                onChange={(e) => onformupdate('firstname', e.target.value)} 
                style={{ height: "38px" }} 
                required
            />
        </Col>
        <Col xs={6}>
            <input 
                type="text" 
                className="form-control form-control-sm" 
                value={formdetails.lastname} 
                placeholder="Last Name" 
                onChange={(e) => onformupdate('lastname', e.target.value)} 
                style={{ height: "38px" }} 
                required
            />
        </Col>

        {/* Email & Phone Side by Side */}
        <Col xs={6}>
            <input 
                type="email" 
                className="form-control form-control-sm" 
                value={formdetails.email} 
                placeholder="Email" 
                onChange={(e) => onformupdate('email', e.target.value)} 
                style={{ height: "38px" }} 
                required
            />
        </Col>
        <Col xs={6}>
            <input 
                type="tel" 
                className="form-control form-control-sm" 
                value={formdetails.phone} 
                placeholder="Phone" 
                onChange={(e) => onformupdate('phone', e.target.value)} 
                style={{ height: "38px" }} 
                required
            />
        </Col>

        {/* Message Box */}
        <Col xs={12}>
            <textarea 
                className="form-control form-control-sm" 
                rows="2" 
                value={formdetails.message} 
                placeholder="Message" 
                onChange={(e) => onformupdate('message', e.target.value)} 
                required
            />
        </Col>

        {/* Submit Button */}
        <Col xs={12} className="text-center">
            <button type="submit" className="btn btn-primary btn-sm px-4">
                {buttontext}
            </button>
        </Col>

        {/* Status Message */}
        {status.message && (
            <Col xs={12} className="text-center mt-2">
                <p className={status.success ? "text-success fw-bold" : "text-danger fw-bold"}>
                    {status.message}
                </p>
            </Col>
        )}
    </Row>
</form>

                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact
