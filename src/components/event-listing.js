import React from 'react';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import image from '../assets/small.png'

class EventListing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword })
  }


  render() {
    const cardStyle = {
      border: '2px solid black',
      // maxWidth:' 23%',
      // margin: '1%'
    };

    const loopingElements = this.props.events.filter((data) => {
      if (this.state.search == null)
        return data
      else if (data.name.toLowerCase().includes(this.state.search.toLowerCase())) {
        return data
      }
    }).map((event, index) => {
      return (
        <Col sm='12' lg='3' key={event.name + index} style={cardStyle}>
          <h5 className="justify-content-md-center">{event.name}</h5>
          <Row>
            <Col lg='4'>
              <Image src={image} fluid roundedCircle />
            </Col>
            <Col lg='8'>
              <p>{new Date().toTimeString()}</p>
              <p>Seats Available {event.seats}</p>
              <Link to={{
                pathname: `/eventbooking/${event.name}`,
                query: {
                  eventDetails: event
                }
              }}> <button>Book Now</button></Link>
              
            </Col>
          </Row>
        </Col>
      )
    })


    return (
      <Container>
        <br />
        <Row className="justify-content-md-center">
          <Col xs="6" lg="3">
            <Form.Control type="email" onChange={(e) => this.searchSpace(e)} placeholder="SEARCH EVENTS" />
          </Col>
        </Row>
        <Row>
          {loopingElements.length === 0 ? 'No Elements' : loopingElements}
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}


export default connect(mapStateToProps)(EventListing);