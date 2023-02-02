import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Footer() {
    return (
        <div className="card border-0 sticky-bottom">
        <div className="container">
        <div class="row">
          <div class="col-sm">
          <Form>
            <h2>Let's Work Together!!!</h2>
        <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          </div>
          <div class="col-sm">
            <ul className='list-unstyled'>
                <li>Home</li>
                <li>About Me</li>
                <li>Projects</li>
            </ul>
          </div>
          <div class="col-sm">
          <ul className='list-unstyled'>
             <li>GitHub</li>
             <li>LinkedIn</li>
             <li>Email</li>
         </ul>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Footer;