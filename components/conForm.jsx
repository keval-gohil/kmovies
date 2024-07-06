"use client";

import { useState, useEffect } from 'react';

const YourFormComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const [failureMessage, setFailureMessage] = useState(false);

    useEffect(() => {
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                const validationMessage = input.nextElementSibling;
                if (validationMessage.classList.contains('name-need') ||
                    validationMessage.classList.contains('mail-need') ||
                    validationMessage.classList.contains('num-need') ||
                    validationMessage.classList.contains('msg-need')) {
                    validationMessage.style.display = 'none';
                }
            });
        });
    }, []);

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const validateForm = () => {
        // Regular expressions for email and phone number validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;

        // Basic form validation
        if (!name) {
            document.querySelector('.name-need').style.display = 'block';
            document.getElementById("Name").focus();
            return false;
        }
        if (!email || !emailRegex.test(email)) {
            document.querySelector('.mail-need').style.display = 'block';
            document.getElementById("Email").focus();
            return false;
        }
        if (!contact || !phoneRegex.test(contact)) {
            document.querySelector('.num-need').style.display = 'block';
            document.getElementById("Contact").focus();
            return false;
        }
        if (!message) {
            document.querySelector('.msg-need').style.display = 'block';
            document.getElementById("message").focus();
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            setSuccessMessage(true);
            setName('');
            setEmail('');
            setContact('');
            setMessage('');
            setTimeout(() => {
                setSuccessMessage(false);
            }, 5000);
        } else {
            setFailureMessage(true);
            setTimeout(() => {
                setFailureMessage(false);
            }, 5000);
        }
    };

    return (
        <div className="mail-container">
            <form>
                <input type="text" id="Name" required placeholder="Enter Your Name...." value={name} onChange={(e) => handleInputChange(e, setName)} />
                <div className="name-need valid-need" style={{ display: 'none' }}>Enter your name first</div>
                <br /><br />

                <input type="email" id="Email" required placeholder="Enter Your Email..." value={email} onChange={(e) => handleInputChange(e, setEmail)} />
                <div className="mail-need valid-need" style={{ display: 'none' }}>Enter a valid email address</div>
                <br /><br />

                <input type="tel" id="Contact" required placeholder="Enter Your Contact number..." value={contact} onChange={(e) => handleInputChange(e, setContact)} />
                <div className="num-need valid-need" style={{ display: 'none' }}>Enter a valid phone number</div>
                <br /><br />

                <textarea name="message" id="message" required placeholder="Enter Your Message" value={message} onChange={(e) => handleInputChange(e, setMessage)}></textarea>
                <div className="msg-need valid-need" style={{ display: 'none' }}>Enter your message first</div>
                <br /><br />

                <button type="button" onClick={handleSubmit} disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</button>
            </form>

            {successMessage && <div className="mail-success">Message sent!</div>}
            {failureMessage && <div className="mail-failed">Message not sent.</div>}
        </div>
    );
};

export default YourFormComponent;
