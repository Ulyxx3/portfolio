import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsPage = ({ onBack }) => {
    const projects = [
        {
            name: 'VERSUSITE',
            description: 'Tournament website for creating 1v1 elimination brackets between items you like',
            completion: 95,
            tech: ['React', 'JavaScript', 'CSS'],
            github: 'https://github.com/Ulyxx3/VersuSite',
            demo: 'https://ulyxx3.github.io/VersuSite/',
            color: '#FF8C00'
        },
        {
            name: 'POKEDEXIA',
            description: 'Beautiful Pokédex application for browsing Pokemon data',
            completion: 100,
            tech: ['JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/Ulyxx3/Pokedexia',
            demo: 'https://ulyxx3.github.io/Pokedexia/',
            color: '#00FF00'
        },
        {
            name: 'PORTFOLIO R.E.P.O.',
            description: 'Tactical UI portfolio inspired by R.E.P.O. game interface',
            completion: 100,
            tech: ['React', 'Framer Motion', 'CSS'],
            github: 'https://github.com/Ulyxx3/portfolio',
            demo: null,
            color: '#4169E1'
        },
        {
            name: 'CLIMBING GAMBLING',
            description: 'Game development project with climbing mechanics',
            completion: 10,
            tech: ['Godot', 'GDScript'],
            github: null,
            demo: null,
            color: '#9370DB'
        },
    ];

    return (
        <motion.div
            className="full-screen-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="page-header">
                <h1 className="page-title">PROJECTS</h1>
                <button className="back-button" onClick={onBack}>BACK</button>
            </div>

            <div style={{ padding: '2rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#CCCCCC', marginBottom: '2rem' }}>
                    MISSION ARCHIVE // COMPLETED AND ACTIVE OPERATIONS
                </p>

                <div>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            className="project-card"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="project-indicator">
                                {project.completion}%
                            </div>

                            <div className="project-bar">
                                <div
                                    className="project-bar-fill"
                                    style={{ width: `${project.completion}%` }}
                                />
                            </div>

                            <div style={{ flex: 1 }}>
                                <h3 className="project-name">{project.name}</h3>
                                <p style={{ color: '#CCCCCC', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                                    {project.description}
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                fontSize: '0.8rem',
                                                color: '#FF8C00',
                                                backgroundColor: 'rgba(255, 140, 0, 0.1)',
                                                padding: '0.25rem 0.75rem',
                                                border: '1px solid #FF8C00'
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div
                                className="project-icon"
                                style={{ backgroundColor: project.color }}
                            >
                                <Github size={20} color="#000" />
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#4169E1', transition: 'color 0.3s' }}
                                        onMouseEnter={(e) => e.target.style.color = '#FF8C00'}
                                        onMouseLeave={(e) => e.target.style.color = '#4169E1'}
                                    >
                                        <Github size={24} />
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#4169E1', transition: 'color 0.3s' }}
                                        onMouseEnter={(e) => e.target.style.color = '#FF8C00'}
                                        onMouseLeave={(e) => e.target.style.color = '#4169E1'}
                                    >
                                        <ExternalLink size={24} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectsPage;
