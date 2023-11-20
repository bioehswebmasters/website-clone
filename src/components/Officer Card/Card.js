import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';

function OfficerCard({ id, name, position }) {
  const [open, setOpen] = useState(false);

  return (
    <Card style={{ width: '18rem' }}>
      {/* Assuming 'holder.js' is a placeholder image library */}
      <Card.Img variant="top" src="holder.js/100px180" alt="Officer's Image" />
      <Card.Body>
        <Card.Title>{position}</Card.Title>
        <Card.Header>{name}</Card.Header>
        <Button
          variant="outline-dark"
          onClick={() => setOpen(!open)}
          aria-controls={`example-collapse-text-${id}`}
          aria-expanded={open}
        >
          More About Me!
        </Button>
        <Collapse in={open}>
          <div id={`example-collapse-text-${id}`}>
            {/* Your specific content for each card */}
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default OfficerCard;
