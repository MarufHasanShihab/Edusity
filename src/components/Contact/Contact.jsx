import "./Contact.css"
import message_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import arrow_icon from "../../assets/white-arrow.png"
import { useState } from "react"

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key","e690afb8-ed89-4c9d-9602-f4a693bef2d9")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={message_icon} alt="message_icon" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={mail_icon} alt="mail_icon" />Contact@edusity.com</li>
                    <li><img src={phone_icon} alt="phone_icon" />+1 123-456-7890</li>
                    <li><img src={location_icon} alt="location_icon" />77 Massachusetts Ave, Cambridge<br/>
                    MA 02139, United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" required />
                    <label>Phone Number</label>
                    <input type="tel" name="phone" id="phone" placeholder="Enter your phone number" required/>
                    <label>Phone Number</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email id" required/>
                    <label>Write your message here</label>
                    <textarea name="message" id="message" rows={6} placeholder="Write your message" required></textarea>
                    <button className="btn dark-btn">Submit now <img src={arrow_icon} alt="arrow_icon" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;