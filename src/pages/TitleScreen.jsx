import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/background.jpg';

const TitleScreen = ({ onNavigate }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const menuItems = [
        { id: 'about', label: 'ABOUT' },
        { id: 'projects', label: 'PROJECTS' },
        { id: 'socials', label: 'SOCIALS' },
        { id: 'contact', label: 'CONTACT (N/A)' },
    ];

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev < menuItems.length - 1 ? prev + 1 : 0));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : menuItems.length - 1));
            } else if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigate(menuItems[selectedIndex].id);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, onNavigate, menuItems]);

    return (
        <motion.div
            className="title-screen"
            style={{ backgroundImage: `url(${bgImage})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="title-screen-content">
                <motion.h1
                    className="title-logo"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    ULYXX3
                </motion.h1>

                <motion.div
                    className="title-menu"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {menuItems.map((item, index) => (
                        <motion.button
                            key={item.id}
                            className={`repo-menu-item ${index === selectedIndex ? 'active' : ''}`}
                            onClick={() => onNavigate(item.id)}
                            onMouseEnter={() => setSelectedIndex(index)}
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                            whileHover={{ x: 10 }}
                        >
                            {item.label}
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TitleScreen;
