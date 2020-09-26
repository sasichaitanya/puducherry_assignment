import React from 'react';
import { Container, Row, Col, Form, Image, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bookEvent } from '../redux/actions';
import { Link } from 'react-router-dom';

import image from '../assets/small.png'

class EventBooking extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      seats: '',
      seatsToSelect: [1, 2, 3, 4, 5, 6],
      seatsSelected: 0,
      selectedName: '',
      selectedEmail: '',
      selectedPhone: '',
      selectedAttendee: '',
      errors: ''
    }
  }

  componentDidMount() {
    if (this.props.location && this.props.location.query && this.props.location.query.eventDetails) {
      const receivedUser = this.props.location.query.eventDetails;
      this.setState({ name: receivedUser.name })
      if (receivedUser.seats < 6) {
        this.setState({ seatsToSelect: Array.from({ length: receivedUser.seats }, (_, i) => i + 1) })
      }
      this.setState({ id: receivedUser.id })
      this.setState({ seats: receivedUser.seats })
      // setUser(receivedUser)
    }
  }

  setName(ev) {
    let RegExpression = /^[a-zA-Z\s]*$/;
    if (!RegExpression.test(ev.target.value)) {
      return
    }
    this.setState({ selectedName: ev.target.value })
  }

  setEmail(ev) {
    this.setState({ selectedEmail: ev.target.value })
  }

  setPhone(ev) {
    this.setState({ selectedPhone: ev.target.value })
  }

  setselectedAttendee(ev) {
    this.setState({ selectedAttendee: ev.target.value })
  }

  setNumberofSeats(ev) {
    this.setState({ seatsSelected: ev.target.innerHTML })
  }

  submit = () => {
    if (!this.state.selectedName) {
      this.setState({ errors: 'Please enter name required field' })
      setTimeout(() => {
        this.setState({ errors: '' })
      }, 3000);
      return
    }
    if (!this.state.selectedEmail) {
      this.setState({ errors: 'Please enter email required field' })
      setTimeout(() => {
        this.setState({ errors: '' })
      }, 3000);
      return
    }
    if (this.state.selectedEmail) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(this.state.selectedEmail).toLowerCase())) {
        this.setState({ errors: 'Please enter correct email' })
        setTimeout(() => {
          this.setState({ errors: '' })
        }, 3000);
        return
      }
    }
    if (!this.state.selectedPhone) {
      this.setState({ errors: 'Please enter phone number required field' })
      setTimeout(() => {
        this.setState({ errors: '' })
      }, 3000);
      return
    }
    if (this.state.selectedEmail) {
      const re = /^[0-9]*$/;
      if (!re.test(String(this.state.selectedPhone).toLowerCase())) {
        this.setState({ errors: 'Please enter correct phone number' })
        setTimeout(() => {
          this.setState({ errors: '' })
        }, 3000);
        return
      }
    }
    this.props.bookTheEvent({
      id: this.state.id,
      noOfSeats: this.state.seatsSelected
    })
    this.setState({ errors: 'Details are printed in console. And will be redirected to listing page in sometime' })
    console.log('The event details are', this.state)
    setTimeout(() => {
      this.props.history.push('/eventlisting')
    }, 5000);
  }

  render() {
    const containerStyle = {
      border: '2px solid black'
    }
    const dropDownStyle = {
      color: 'black',
      padding: '5px 30px',
      background: 'transparent',
      border: '1px solid #c3b8b8'
    }
    const errorsClass = {
      color: '#00ff00'
    }
    let errorsElement
    if (this.state.errors) {
      errorsElement = <span className={errorsClass}>{this.state.errors}</span>
    } else {
      errorsElement = null
    }

    return (
      <div>
        <h2>{this.state.name}</h2>
        <h5>Number of available seats {this.state.seats}</h5>
        <Container className={containerStyle}>
          <br/>
          <Row>
            <Col xs={12} md={4}>
              <Image src={image} fluid roundedCircle />
            </Col>
            <Col xs={12} md={8}>
              <Form.Group as={Row} >
                <Form.Label column sm="3" lg="4">
                  Name
                </Form.Label>
                <Col sm="9" lg="8">
                  <Form.Control value={this.state.selectedName} onChange={(e) => this.setName(e)} placeholder="Name" />
                  {/* {nameValidation} */}
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="3" lg="4">
                  Email
                </Form.Label>
                <Col sm="9" lg="8">
                  <Form.Control type="text" value={this.state.selectedEmail} onChange={(e) => this.setEmail(e)} placeholder="Email" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="3" lg="4">
                  Phone No
                </Form.Label>
                <Col sm="9" lg="8">
                  <Form.Control type="text" value={this.state.selectedPhone} onChange={(e) => this.setPhone(e)} placeholder="Phone Number" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="3" lg="4">
                  Number of seats
                </Form.Label>
                <Col sm="9" lg="8" style={{textAlign: "left"}}>
                  {/* <Form.Control type="text" placeholder="Number of seats" /> */}
                  <Dropdown variant='Secondary' >
                    <Dropdown.Toggle id="dropdown-basic" style={dropDownStyle}>
                      {this.state.seatsSelected}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {this.state.seatsToSelect.map((item) => {
                        return (<Dropdown.Item key={item} onClick={(e) => this.setNumberofSeats(e)}>{item}</Dropdown.Item>)
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="3" lg="4">
                  Name of Attendee {this.state.seatsSelected}
                </Form.Label>
                <Col sm="9" lg="8">
                  <Form.Control type="text" value={this.state.selectedAttendee} onChange={(e) => this.setselectedAttendee(e)} placeholder="Name of Attendee" />
                </Col>
              </Form.Group>
              {errorsElement}
              <Form.Group as={Row} >
                <Form.Label column sm="3" lg="4">

                </Form.Label>
                <Col sm="9" lg="8">
                  <button onClick={this.submit}>Submit</button>&nbsp;&nbsp;&nbsp;
                  <Link to={{
                    pathname: `/eventlisting`,

                  }}>  <button>Cancel</button></Link>

                </Col>

              </Form.Group>

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    bookTheEvent: (obj) => dispatch(bookEvent(obj))
  }
}

export default connect(null, mapDispatchToProps)(EventBooking);