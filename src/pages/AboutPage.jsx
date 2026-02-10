import React, { useState } from 'react';
import { motion } from 'framer-motion';
import REPOSlider from '../components/REPOSlider';

const AboutPage = ({ onBack }) => {
    const [activeSection, setActiveSection] = useState('bio');

    const skills = [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'CSS/UI Design', level: 88 },
        { name: 'Node.js', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'Git', level: 85 },
    ];

    const renderContent = () => {
        switch (activeSection) {
            case 'bio':
                return (
                    <div>
                        <h2 style={{ marginBottom: '1.5rem', color: '#FFFFFF' }}>OPERATOR PROFILE</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            Elite-level developer specializing in front-end operations and tactical UI implementations.
                            Deployed across multiple mission-critical projects with a focus on user experience optimization
                            and performance enhancement.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            Primary directive: Creating exceptional web experiences that combine aesthetic precision
                            with functional excellence. Secondary capabilities include full-stack development and
                            system architecture design.
                        </p>
                        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(255, 140, 0, 0.1)', border: '2px solid #FF8C00' }}>
                            <h3 style={{ color: '#FF8C00', marginBottom: '0.5rem' }}>STATUS: ACTIVE</h3>
                            <p style={{ fontSize: '0.9rem' }}>Clearance Level: FULL ACCESS | Availability: IMMEDIATE</p>
                        </div>
                    </div>
                );
            case 'skills':
                return (
                    <div>
                        <h2 style={{ marginBottom: '1.5rem', color: '#FFFFFF' }}>SKILL ASSESSMENT</h2>
                        <p style={{ marginBottom: '2rem', color: '#CCCCCC' }}>
                            Technical proficiency analysis // Operational readiness indicators
                        </p>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <REPOSlider label={skill.name} value={skill.level} />
                            </motion.div>
                        ))}
                    </div>
                );
            case 'timeline':
                return (
                    <div>
                        <h2 style={{ marginBottom: '1.5rem', color: '#FFFFFF' }}>MISSION TIMELINE</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { year: '2024', title: 'SENIOR OPERATIONS', desc: 'Leading tactical web development missions' },
                                { year: '2022', title: 'DEPLOYMENT SPECIALIST', desc: 'Full-stack development and architecture' },
                                { year: '2020', title: 'OPERATIVE TRAINING', desc: 'Advanced web technologies certification' },
                                { year: '2018', title: 'FIELD DEPLOYMENT', desc: 'Initial front-end operations' },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    style={{
                                        padding: '1.5rem',
                                        backgroundColor: 'rgba(10, 10, 10, 0.6)',
                                        border: '2px solid #4169E1',
                                        borderLeft: '4px solid #FF8C00'
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div style={{ fontSize: '0.9rem', color: '#FF8C00', marginBottom: '0.5rem' }}>
                                        {item.year}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                    <p style={{ color: '#CCCCCC' }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
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
                <h1 className="page-title">ABOUT</h1>
                <button className="back-button" onClick={onBack}>BACK</button>
            </div>

            <div className="page-content">
                <div className="page-sidebar">
                    {['bio', 'skills', 'timeline'].map((section) => (
                        <button
                            key={section}
                            className={`repo-menu-item ${activeSection === section ? 'active' : ''}`}
                            onClick={() => setActiveSection(section)}
                            style={{ fontSize: '1.25rem', padding: '1rem' }}
                        >
                            {section.toUpperCase()}
                        </button>
                    ))}
                </div>

                <div className="page-main">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderContent()}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
