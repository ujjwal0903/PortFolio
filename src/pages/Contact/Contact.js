import React, { useState } from "react";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    // Handle form submission
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
            <div className="card card0 border-0">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="card1">
                    <div className="row border-line">
                    <img
                        src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                        alt="contact"
                        className="image"
                    />
                    </div>
                </div>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="card2 d-flex card border-0 px-4 py-5">
                    <div className="row">
                    <h6>
                        Contact With
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                        <BsGithub color="black" size={30} className="ms-2" />
                        <BsFacebook color="blue" size={30} className="ms-2" />
                    </h6>
                    </div>

                    <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                    </div>

                    <form onSubmit={handleSubmit}>
                    <div className="row px-3">
                        <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="row px-3">
                        <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="row px-3">
                        <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        />
                    </div>
                    <div className="row px-3">
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
