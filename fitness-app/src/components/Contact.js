import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
        <h3>Contact Us</h3>
        <p>Reach out to us through Email - <a href="mailto:info@fitnessapp.com">info@fitnessapp.com</a></p>
        <p>Follow us on social media:</p>
        <ul>
            <li>Twitter: <a href="https://twitter.com/fitnessapp" target="_blank" rel="noopener noreferrer">@fitnessapp</a></li>
            <li>Facebook: <a href="https://www.facebook.com/fitnessapp" target="_blank" rel="noopener noreferrer">@fitnessapp</a></li>
            <li>Instagram: <a href="https://www.instagram.com/fitnessapp" target="_blank" rel="noopener noreferrer">@fitnessapp</a></li>
        </ul>
    </div>
  );
}

export default Contact;
