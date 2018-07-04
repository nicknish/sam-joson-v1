import React from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import Button from './Button';
import Modal from './Modal';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    showModal: false
  };

  handleInputChange = event => {
    const target = event.target;
    const { value, name } = target;

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
        onClick={this.closeModal}
      >
        <input type="hidden" name="form-name" value="contact" />

        <p hidden>
          <label>
            Don't fill this out:{' '}
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

        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          contentLabel="Successfully sent message modal"
        >
          <p>Thanks for the message!</p>
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
