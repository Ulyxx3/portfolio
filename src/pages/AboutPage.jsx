import React, { useState } from 'react';
import { motion } from 'framer-motion';
import REPOSlider from '../components/REPOSlider';

const AboutPage = ({ onBack }) => {
    const [activeSection, setActiveSection] = useState('bio');

    const skills = [
        { name: 'React', level: 70 },
        { name: 'JavaScript', level: 75 },
        { name: 'CSS', level: 65 },
        { name: 'Node.js', level: 55 },
        { name: 'Python', level: 70 },
        { name: 'Git', level: 75 },
        { name: 'GDScript', level: 30 },
    ];

    const renderContent = () => {
        switch (activeSection) {
            case 'bio':
                return (
                    <div>
                        <h2 style={{ marginBottom: '1.5rem', color: '#FFFFFF' }}>OPERATOR PROFILE</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            Je suis développeur, designer et animateur 2D, j'ai crée des sites qu'on peut retrouver sur ce portfolio.
                            J'ai aussi crée des animations 2D, des vidéos et des projets de jeux vidéos.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            Mon but est de crée des sites web et des animations 2D de qualité, avec un design moderne et professionnel.
                            Je suis aussi à la recherche de projets pour développer mes compétences et mon expérience.
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
                                { year: '2026', title: 'GDScript', desc: 'Game development' },
                                { year: '2025', title: 'JS/REACT', desc: 'Advanced web development' },
                                { year: '2024', title: 'HTML/CSS', desc: 'Basic web development' },
                                { year: '2023', title: 'DISCORD BOT DEVELOPMENT', desc: 'Discord bot development' },
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
