import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {

  return (
    <div>
        <h2>Navigation Bar</h2>
        <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="/first">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/link">Demo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
    </Card>
    </div>
  )
}
export default Navigation;
