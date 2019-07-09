import React from 'react';
import Card from 'react-bootstrap/Card';

function Event(props) {
  const { event } = props;
  return (
    <Card border={event.visibility === 'public' ? 'success' : 'secondary'}>
      <Card.Body>
        <Card.Title>
          {event.name}
        </Card.Title>
        <Card.Text>
          Created By: {event.group.name}
        </Card.Text>
        <Card.Text>
          From: {(new Date(event.time)).toGMTString()}
        </Card.Text>
        <Card.Text>
          To: {(new Date(event.time + event.duration)).toGMTString()} - {event.duration / 3600000}hours
                    </Card.Text>
        {
          event.visibility === 'public' && event.venue
            ?
            <Card.Text>
              Location: {event.venue.name}, {event.venue.address_1} {event.venue.zip} - {event.venue.city} {event.venue.state}
            </Card.Text>
            : <Card.Text>
                Members Only
              </Card.Text>
        }
        {
          event.fee
            ? <Card.Text>
                Fee: {event.fee.currency}${event.fee.amount}
              </Card.Text>
            : null
        }
        <Card.Link href={event.link}>
          More Details
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Event;