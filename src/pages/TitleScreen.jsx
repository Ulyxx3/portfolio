import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/background.jpg';

const TitleScreen = ({ onNavigate }) => {
    const menuItems = [
        { id: 'about', label: 'ABOUT' },
        { id: 'projects', label: 'PROJECTS' },
        { id: 'socials', label: 'SOCIALS' },
        { id: 'contact', label: 'CONTACT' },
    ];

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
                    ULYX.X3
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
                            className="repo-menu-item"
                            onClick={() => onNavigate(item.id)}
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
