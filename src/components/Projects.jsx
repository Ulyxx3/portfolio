import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "VersuSite",
        description: "A tournament bracket generator similar to UWUFUFU. Create, play, and rank items in a 1v1 elimination format.",
        tags: ["React", "Tournament", "Interactive"],
        repo: "https://github.com/Ulyxx3/VersuSite",
        demo: "https://ulyxx3.github.io/VersuSite/",
        color: "from-red-500 to-blue-600"
    },
    {
        title: "Pokedexia",
        description: "A comprehensive Pokémon encyclopedia explicitly designed for educational purposes.",
        tags: ["Education", "API", "Pokemon"],
        repo: "https://github.com/Ulyxx3/Pokedexia",
        demo: "https://ulyxx3.github.io/Pokedexia/",
        color: "from-yellow-400 to-red-500"
    }
];

const Projects = () => {
    return (
        <section className="py-20 px-4 relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center mb-16 text-white"
            >
                Featured Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ y: -10 }}
                        className="group relative bg-slate-800 rounded-3xl overflow-hidden border border-slate-700"
                    >
                        {/* Gradient Background Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                        <div className="p-8 relative z-10 h-full flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-3">
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-slate-700 rounded-full hover:bg-white hover:text-black transition-all"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-slate-700 rounded-full hover:bg-primary hover:text-white transition-all"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-sm bg-slate-900 text-sky-400 rounded-full border border-slate-700/50">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
