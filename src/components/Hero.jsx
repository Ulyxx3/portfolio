import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="h-full flex flex-col justify-start pt-10 px-4 relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl mx-auto"
            >
                {/* Tech ID Header */}
                <div className="flex items-center gap-4 mb-8 border-b border-repo-blue/30 pb-4">
                    <div className="w-16 h-16 bg-repo-blue text-black font-bold flex items-center justify-center text-3xl font-quantico">
                        ID
                    </div>
                    <div>
                        <h2 className="text-4xl font-quantico font-bold text-white uppercase tracking-wider">
                            OPERATOR: ULYXX3
                        </h2>
                        <p className="text-repo-orange font-mono text-sm tracking-widest">
                            CLASS: DEVELOPER // RANK: ELITE
                        </p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Left Column: Description */}
                    <div className="space-y-6">
                        <div className="bg-repo-secondary/50 p-6 border-l-2 border-repo-orange backdrop-blur-sm">
                            <h3 className="text-xl font-quantico text-repo-blue mb-4">MISSION STATEMENT</h3>
                            <p className="text-slate-300 leading-relaxed font-rajdhani text-lg">
                                Developer & Creator specialized in building high-performance web interfaces and immersive digital experiences.
                                Focused on aesthetics, functionality, and cutting-edge technology.
                            </p>
                        </div>

                        {/* Stats / Skills */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-quantico text-white">SKILL SET</h3>
                            {[
                                { name: 'REACT / NEXT.JS', level: '95%' },
                                { name: 'TAILWIND CSS', level: '90%' },
                                { name: 'UI / UX DESIGN', level: '85%' },
                                { name: 'BACKEND DEV', level: '75%' }
                            ].map(skill => (
                                <div key={skill.name} className="bg-black/40 p-2 border border-white/10">
                                    <div className="flex justify-between text-xs text-repo-blue mb-1 font-mono">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-800 relative overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: skill.level }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-repo-orange"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visual Data / Decorative */}
                    <div className="relative border border-white/10 p-4 min-h-[300px] flex items-center justify-center bg-scanlines-pattern">
                        <div className="absolute top-0 right-0 p-2 text-xs text-repo-orange font-mono">
                            SECURE_CONNECTION
                        </div>
                        <div className="text-center space-y-4 opacity-80">
                            <div className="w-32 h-32 mx-auto border-4 border-repo-blue rounded-full flex items-center justify-center animate-pulse">
                                <span className="font-quantico text-4xl text-white">UX</span>
                            </div>
                            <div className="font-mono text-xs text-repo-blue">
                                SYSTEM OPTIMIZED<br />
                                LATENCY: 12ms<br />
                                UPTIME: 99.9%
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
