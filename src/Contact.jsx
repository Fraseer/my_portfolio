import React, { Component } from "react";
import { Container } from "semantic-ui-react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit} netlify name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name:
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Message:
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <button id="send-button" type="submit">Send</button>
        </p>
      </form>
    );
  }
}

// const Contact = () => {
//   return (
//     <Container>
//       <h1 id="contact-header">Contact</h1>
//       <p>
//         If you like what you see please don't hesitate to get in contact one of
//         the ways below.
//       </p>
//       <p>Email: Fraser.Hughes@btinternet.com</p>
//       <p>
//         Social Media:{" "}
//         <a
//           href="https://www.linkedin.com/in/fraser-hughes-568243107/"
//           rel="nofollow noreferrer"
//         >
//           {" "}
//           My LinkedIn.
//         </a>
//       </p>
//     </Container>
//   );
// };

export default ContactForm;
// export default Contact;
