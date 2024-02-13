import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <p class="centered-text custom-font-color">
            You can also download my CV for persual.
               <p><a href="https://drive.google.com/file/d/1-iGwYmd4hgGPmvraiASHzbnZYqSE4-n1/view?usp=sharing" download="your_cv_filename.pdf">
                <button>Download CV</button>
            </a> </p>
            </p>    
         
          
        </div>
      </Col>
  )
}
