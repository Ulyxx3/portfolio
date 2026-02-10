import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
    {
        title: "VERSUSITE",
        description: "Tournament bracket generator. Features 1v1 elimination logic.",
        tags: ["REACT", "LOGIC", "GAME"],
        repo: "https://github.com/Ulyxx3/VersuSite",
        demo: "https://ulyxx3.github.io/VersuSite/",
        status: "DEPLOYED"
    },
    {
        title: "POKEDEXIA",
        description: "Comprehensive data encyclopedia. API integration for retrieval.",
        tags: ["API", "DATA", "UI"],
        repo: "https://github.com/Ulyxx3/Pokedexia",
        demo: "https://ulyxx3.github.io/Pokedexia/",
        status: "OPERATIONAL"
    }
];

const Projects = () => {
    return (
        <div className="w-full max-w-5xl mx-auto">
            {/* Filter / Header Row */}
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <h2 className="text-3xl font-quantico text-white">PROJECT_MANIFEST</h2>
                <div className="text-repo-orange font-mono text-sm">TOTAL_ENTRIES: {projects.length}</div>
            </div>

            <div className="grid gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-black/40 border border-white/10 hover:border-repo-orange hover:bg-white/5 transition-all p-6 flex flex-col md:flex-row gap-6 before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-repo-blue hover:before:bg-repo-orange"
                    >
                        {/* Icon / Thumbnail Box */}
                        <div className="w-24 h-24 bg-repo-secondary flex items-center justify-center border border-white/5 group-hover:border-repo-orange/50 transition-colors">
                            <Folder size={40} className="text-repo-blue group-hover:text-repo-orange" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h3 className="text-2xl font-quantico text-white group-hover:text-repo-orange transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-xs font-mono px-2 py-1 bg-repo-blue/20 text-repo-blue border border-repo-blue/50">
                                    {project.status}
                                </span>
                            </div>

                            <p className="text-slate-400 font-rajdhani text-lg mt-2 mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-repo-orange/70">
                                        [{tag}]
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-repo-orange transition-colors uppercase tracking-wider font-bold"
                                >
                                    <Github size={16} /> SOURCE_CODE
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-repo-blue transition-colors uppercase tracking-wider font-bold"
                                >
                                    <ExternalLink size={16} /> INITIALIZE_DEMO
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
