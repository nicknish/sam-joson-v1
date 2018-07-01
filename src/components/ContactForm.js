import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'whatwg-fetch';
import Button from './Button';

const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(this.handleSuccess)
      .catch(error => alert(error));
    event.preventDefault();
  };

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <form
        name="contact"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
        overlay={this.state.showModal}
        onClick={this.closeModal}
      >
        <input type="hidden" name="form-name" value="contact" />

        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot" onChange={this.handleInputChange} />
          </label>
        </p>

        <input
          name="name"
          className="input"
          type="text"
          placeholder="NAME"
          value={this.state.name}
          onChange={this.handleInputChange}
          required
        />
        <input
          name="email"
          type="email"
          className="input"
          placeholder="EMAIL"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />

        <textarea
          name="message"
          className="textarea"
          type="text"
          placeholder="MESSAGE"
          value={this.state.message}
          onChange={this.handleInputChange}
          required
        />

        <Button className="btn btn-primary btn-sm m-t-10">Send</Button>

        <Modal visible={this.state.showModal}>
          <p>
            Thank you for reaching out. I will get back to you as soon as
            possible.
          </p>
          <Button onClick={this.closeModal}>Okay</Button>
        </Modal>
      </form>
    );
  }
}

ContactForm.propTypes = {
  data: PropTypes.object
};

export default ContactForm;
