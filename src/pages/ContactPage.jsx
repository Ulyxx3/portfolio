import React, { useState } from 'react';
import { motion } from 'framer-motion';
import REPOButton from '../components/REPOButton';

const ContactPage = ({ onBack }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('TRANSMITTING...');

        try {
            const response = await fetch('https://formspree.io/f/xanyrgvk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            if (response.ok) {
                setStatus('TRANSMISSION SUCCESSFUL');
                setTimeout(() => {
                    setFormData({ name: '', email: '', message: '' });
                    setStatus('');
                }, 5000);
            } else {
                setStatus('TRANSMISSION FAILED - RETRY');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (error) {
            setStatus('CONNECTION ERROR - CHECK NETWORK');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <motion.div
            className="full-screen-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="page-header">
                <h1 className="page-title">CONTACT</h1>
                <button className="back-button" onClick={onBack}>BACK</button>
            </div>

            <div style={{ padding: '2rem', maxWidth: '900px' }}>
                <p style={{ fontSize: '0.9rem', color: '#CCCCCC', marginBottom: '2rem' }}>
                    SECURE MESSAGE TRANSMISSION // ENCRYPTED CHANNEL
                </p>

                <form className="repo-form" onSubmit={handleSubmit}>
                    <div className="repo-form-group">
                        <label className="repo-form-label" htmlFor="name">
                            OPERATOR NAME
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="repo-form-input"
                            required
                            placeholder="Enter your call sign..."
                        />
                    </div>

                    <div className="repo-form-group">
                        <label className="repo-form-label" htmlFor="email">
                            COMM FREQUENCY (EMAIL)
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="repo-form-input"
                            required
                            placeholder="your.frequency@comms.net"
                        />
                    </div>

                    <div className="repo-form-group">
                        <label className="repo-form-label" htmlFor="message">
                            TRANSMISSION CONTENT
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="repo-form-textarea"
                            required
                            placeholder="Enter encrypted message..."
                        />
                    </div>

                    <REPOButton type="submit">SEND TRANSMISSION</REPOButton>

                    {status && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                marginTop: '1rem',
                                padding: '1rem',
                                backgroundColor: status.includes('SUCCESSFUL')
                                    ? 'rgba(0, 255, 0, 0.1)'
                                    : status.includes('FAILED') || status.includes('ERROR')
                                        ? 'rgba(255, 0, 0, 0.1)'
                                        : 'rgba(255, 140, 0, 0.1)',
                                border: status.includes('SUCCESSFUL')
                                    ? '2px solid #00FF00'
                                    : status.includes('FAILED') || status.includes('ERROR')
                                        ? '2px solid #FF0000'
                                        : '2px solid #FF8C00',
                                color: status.includes('SUCCESSFUL')
                                    ? '#00FF00'
                                    : status.includes('FAILED') || status.includes('ERROR')
                                        ? '#FF0000'
                                        : '#FF8C00',
                                fontFamily: 'var(--font-header)',
                                fontSize: '1.25rem'
                            }}
                        >
                            {status}
                        </motion.div>
                    )}
                </form>

                <div
                    style={{
                        marginTop: '3rem',
                        padding: '2rem',
                        backgroundColor: 'rgba(255, 140, 0, 0.1)',
                        border: '2px solid #FF8C00'
                    }}
                >
                    <h3 style={{ color: '#FF8C00', marginBottom: '1rem', fontSize: '1.5rem' }}>
                        MISSION BRIEFING
                    </h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#CCCCCC' }}>
                        All transmissions are reviewed within 24 hours. For urgent missions requiring
                        immediate deployment, use the priority communication channels listed in the
                        SOCIALS section. Standard protocol applies to all incoming messages.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactPage;
