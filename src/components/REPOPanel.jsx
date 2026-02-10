import React from 'react';
import { motion } from 'framer-motion';

const REPOPanel = ({ title, children, showBack, onBack }) => {
    return (
        <motion.div
            className="repo-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            {title && (
                <div className="repo-panel-header">
                    {title}
                </div>
            )}
            <div className="repo-panel-content">
                {children}
            </div>
            {showBack && (
                <button className="back-button" onClick={onBack} style={{ marginTop: '2rem' }}>
                    BACK
                </button>
            )}
        </motion.div>
    );
};

export default REPOPanel;
