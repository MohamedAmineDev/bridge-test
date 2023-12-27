function Contact() {
    return (
        <>
            <div className="contact">
                <div className="contact-title">
                    <h4>
                        Contact us
                    </h4>
                </div>
                <div className="contact-content">
                    <div className="contact-form">
                        <label htmlFor="name" className="contact-form-label">NAME</label>
                        <input type="text" name="name" id="name" placeholder="Jiara Martins" />
                    </div>
                    <div className="contact-form">
                        <label htmlFor="email" className="contact-form-label">EMAIL</label>
                        <input type="email" name="email" id="email" placeholder="hello@reallygreatsite.com" />
                    </div>
                    <div className="contact-form">
                        <label htmlFor="message" className="contact-form-label">MESSAGE</label>
                        <textarea name="message" id="message" cols="30" rows="2" placeholder="Write your message here"></textarea>
                    </div>
                    <div className="contact-form">
                        <button type="button" className="button-contact">Send the message</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;