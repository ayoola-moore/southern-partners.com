import React, { Component } from "react"

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }

  render() {
    const { status } = this.state
    return (
      <form
        className="contact"
        method="post"
        onSubmit={this.submitForm}
        action="https://formspree.io/mqkyppnk"
      >
        {status === "SUCCESS" && (
          <div className={"feedback"}>Thanks! Message sent successfully </div>
        )}
        {status === "ERROR" && (
          <div className={"feedback"}>
            {" "}
            Ooops! There was an error. Try again
          </div>
        )}
        <input
          className="in1"
          type="text"
          placeholder="Name"
          required=" "
          name="name"
        />
        <input
          className="in2"
          type="email"
          placeholder="Email"
          required=" "
          name="email"
        />
        <input
          className="in3 no_margin_right"
          type="tel"
          placeholder="Tel"
          required=" "
          name="phone"
        />
        <textarea
          className="in4"
          placeholder="Type your message"
          required=" "
          name="message"
        ></textarea>
        <input type="submit" value="SEND" />
        <div className="clearfix"> </div>
      </form>
    )
  }
}

export default ContactForm
