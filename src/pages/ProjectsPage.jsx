import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsPage = ({ onBack }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const projects = [
        {
            name: 'VERSUSITE',
            description: 'Tournament website for creating 1v1 elimination brackets between items you like',
            completion: 95,
            tech: ['React', 'JavaScript', 'CSS'],
            github: 'https://github.com/Ulyxx3/VersuSite',
            demo: 'https://ulyxx3.github.io/VersuSite/',
            color: null
        },
        {
            name: 'POKEDEXIA',
            description: 'Beautiful Pokédex application for browsing Pokemon data',
            completion: 100,
            tech: ['JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/Ulyxx3/Pokedexia',
            demo: 'https://ulyxx3.github.io/Pokedexia/',
            color: null
        },
        {
            name: 'PORTFOLIO R.E.P.O.',
            description: 'Tactical UI portfolio inspired by R.E.P.O. game interface',
            completion: 100,
            tech: ['React', 'Framer Motion', 'CSS'],
            github: 'https://github.com/Ulyxx3/portfolio',
            demo: 'https://ulyxx3.github.io/portfolio/',
            color: null
        },
        {
            name: 'CLIMBING GAMBLING',
            description: 'Game development project with climbing mechanics',
            completion: 10,
            tech: ['Godot', 'GDScript'],
            github: null,
            demo: null,
            color: null
        },
        {
            name: 'OFFSHADES',
            description: 'Shader pack for Minecraft',
            completion: 30,
            tech: ['GLSL'],
            github: 'https://github.com/Ulyxx3/OffShades',
            demo: null,
            color: null
        },
        {
            name: 'OSMV lite',
            description: 'Local extension for OBS for displaying your actual music with Windows Media Control',
            completion: 100,
            tech: ['HTML', 'JavaScript', 'CSS', 'C#', 'PowerShell'],
            github: 'https://github.com/StreamMusicViewer/OSMV-lite',
            demo: 'https://streammusicviewer.github.io/site/',
            color: null
        },
        {
            name: 'OSMV',
            description: 'Extension for OBS for displaying your actual music with Windows Media Control in OBS with an audio visualizer and more',
            completion: 70,
            tech: ['JavaScript', 'HTML', 'CSS', 'Rust', 'PowerShell'],
            github: 'https://github.com/StreamMusicViewer/OSMV',
            demo: 'https://streammusicviewer.github.io/site/',
            color: null
        },
        {
            name: 'OSMV site',
            description: 'Site for the OSMV extension',
            completion: 100,
            tech: ['HTML', 'JavaScript', 'CSS'],
            github: 'https://github.com/StreamMusicViewer/site',
            demo: 'https://streammusicviewer.github.io/site/',
            color: null
        },
        {
            name: 'ani-cli-fr',
            description: 'ani-cli fork for french sub/dub',
            completion: 100,
            tech: ['Shell', 'Python'],
            github: 'https://github.com/Ulyxx3/ani-cli-fr',
            demo: null,
            color: null
        },
        {
            name: 'Dark Patterns',
            description: 'Website made for a school project showcasing Dark Patterns',
            completion: 100,
            tech: ['JavaScript', 'HTML', 'CSS', 'PHP', 'MySQL'],
            github: 'https://github.com/Ulyxx3/DarkPatterns',
            demo: 'https://ulyxx3.github.io/DarkPatterns/',
            color: null
        },
    ];

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex((prev) => {
                    const next = prev < projects.length - 1 ? prev + 1 : 0;
                    document.getElementById(`project-${next}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    return next;
                });
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex((prev) => {
                    const next = prev > 0 ? prev - 1 : projects.length - 1;
                    document.getElementById(`project-${next}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    return next;
                });
            } else if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const project = projects[selectedIndex];
                const link = project.demo || project.github;
                if (link) {
                    window.open(link, '_blank', 'noopener,noreferrer');
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, projects]);

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
                            id={`project-${index}`}
                            className="project-card"
                            style={index === selectedIndex ? { borderColor: '#FF8C00', backgroundColor: 'rgba(26, 26, 26, 0.8)', boxShadow: '0 0 20px rgba(255, 140, 0, 0.3)' } : {}}
                            onMouseEnter={() => setSelectedIndex(index)}
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

                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#4169E1', transition: 'all 0.3s ease' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#FFFFFF';
                                            e.currentTarget.style.transform = 'scale(1.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = '#4169E1';
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                    >
                                        <Github size={22} />
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#4169E1', transition: 'all 0.3s ease' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#FFFFFF';
                                            e.currentTarget.style.transform = 'scale(1.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = '#4169E1';
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                    >
                                        <ExternalLink size={22} />
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
