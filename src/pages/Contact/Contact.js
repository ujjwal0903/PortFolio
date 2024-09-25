import React, { useState } from "react";
import "./Contact.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !msg) {
      toast.error("Please fill out all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("access_key", "29aefb71-bded-4284-a238-b2028dfc8f16");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", msg);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("There was an error submitting the form. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card0 border-0">
          <div className="row">
            <div className="card1 col-lg-6 col-md-6">
              <img
                src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                alt="Contact Us"
                className="image"
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5 text-center">
                <h6>
                  Contact With
                  <a
                    href="https://github.com/ujjwal0903"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <BsGithub size={30} className="ms-2" />
                  </a>
                  <a
                    href="https://linkedin.com/in/ujjwal-singhal"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <BsLinkedin size={30} className="ms-2" />
                  </a>
                </h6>
                <div className="px-3 mb-4 text-center">
                  <div className="line" />
                  <small className="or">OR</small>
                  <div className="line" />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="px-3">
                    <textarea
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      required
                    />
                  </div>
                  <div className="px-3">
                    <button className="button" type="submit">
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={5000} />
    </>
  );
};

export default Contact;
