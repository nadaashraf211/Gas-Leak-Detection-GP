import React from 'react';
import useMailchimp from 'react-mailchimp-subscribe';

const MailchimpForm = () => {
    const { subscribe, status, message } = useMailchimp();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform additional actions or validation if needed
        // Subscribe to Mailchimp
        subscribe({ EMAIL: 'example@email.com' });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Your Mailchimp form fields go here */}
            <button type="submit">Subscribe</button>
            {status === 'success' && <p>{message}</p>}
            {status === 'error' && <p>{message}</p>}
        </form>
    );
};

export default MailchimpForm;
