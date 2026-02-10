import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-5xl mx-auto"
            >
                {/* Tech ID Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 border-b border-repo-blue/30 pb-6">
                    <div className="w-24 h-24 bg-repo-blue text-black font-bold flex items-center justify-center text-4xl font-quantico shrink-0">
                        ID
                    </div>
                    <div>
                        <h2 className="text-5xl font-quantico font-bold text-white uppercase tracking-wider mb-2">
                            OPERATOR: ULYXX3
                        </h2>
                        <div className="flex flex-wrap gap-4 text-repo-orange font-mono text-sm tracking-widest">
                            <span>CLASS: DEVELOPER</span>
                            <span>//</span>
                            <span>RANK: ELITE</span>
                            <span>//</span>
                            <span>STATUS: ACTIVE</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                    {/* Left Column: Description */}
                    <div className="space-y-8">
                        <div className="bg-repo-secondary/50 p-8 border-l-4 border-repo-orange backdrop-blur-sm">
                            <h3 className="text-xl font-quantico text-repo-blue mb-4 flex items-center gap-2">
                                <div className="w-2 h-2 bg-repo-blue" /> MISSION STATEMENT
                            </h3>
                            <p className="text-slate-300 leading-relaxed font-rajdhani text-xl">
                                Developer & Creator specialized in building high-performance web interfaces and immersive digital experiences.
                                Focused on aesthetics, functionality, and cutting-edge technology.
                            </p>
                        </div>

                        {/* Stats / Skills */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-quantico text-white mb-6">SKILL_SET_ANALYSIS</h3>
                            {[
                                { name: 'REACT / NEXT.JS', level: '95%' },
                                { name: 'TAILWIND CSS', level: '90%' },
                                { name: 'UI / UX DESIGN', level: '85%' },
                                { name: 'BACKEND DEV', level: '75%' }
                            ].map(skill => (
                                <div key={skill.name} className="relative">
                                    <div className="flex justify-between text-sm text-repo-blue mb-2 font-mono">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}</span>
                                    </div>
                                    <div className="h-4 w-full bg-black border border-white/20 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_2px,#000_2px)] bg-[size:4px_100%] z-10 opacity-30" />
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: skill.level }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-repo-orange/80"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visual Data / Decorative */}
                    <div className="relative border border-white/10 p-8 min-h-[300px] flex items-center justify-center bg-black/40">
                        {/* Corner Decorations */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-repo-orange" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-repo-orange" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-repo-orange" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-repo-orange" />

                        <div className="absolute top-4 right-4 text-xs text-repo-orange font-mono animate-pulse">
                            SECURE_CONNECTION
                        </div>

                        <div className="text-center space-y-6 opacity-80">
                            <div className="w-48 h-48 mx-auto border-4 border-repo-blue/30 rounded-full flex items-center justify-center relative">
                                <div className="absolute inset-0 border-4 border-t-repo-orange border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin-slow" />
                                <div className="absolute inset-4 border-2 border-white/10 rounded-full" />
                                <span className="font-quantico text-6xl text-white">UX</span>
                            </div>
                            <div className="font-mono text-sm text-repo-blue space-y-1">
                                <div>SYSTEM OPTIMIZED</div>
                                <div className="text-white">LATENCY: <span className="text-repo-orange">12ms</span></div>
                                <div>UPTIME: 99.9%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
