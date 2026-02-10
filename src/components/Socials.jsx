import { motion } from 'framer-motion';
import { Twitter, Instagram, MessageSquare, Twitch, Youtube, Gamepad2, Music, Github, Coffee, List } from 'lucide-react';
import { SiPinterest, SiTiktok, SiSteam, SiBluesky, SiKofi } from 'react-icons/si';

const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/Ulyxx31', icon: Twitter, id: 'TW-01' },
    { name: 'Instagram', url: 'https://www.instagram.com/ulyxx3', icon: Instagram, id: 'IG-02' },
    { name: 'Pinterest', url: 'https://www.pinterest.fr/ulyxx3/', icon: SiPinterest, id: 'PN-03' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@ulyxx3', icon: SiTiktok, id: 'TK-04' },
    { name: 'Reddit', url: 'https://www.reddit.com/user/ConversationMore4995', icon: MessageSquare, id: 'RD-05' },
    { name: 'Twitch', url: 'https://www.twitch.tv/ulyxx3_tv', icon: Twitch, id: 'TV-06' },
    { name: 'Discord', url: 'https://discord.gg/spbY6W6', icon: Gamepad2, id: 'DC-07' },
    { name: 'YouTube', url: 'https://www.youtube.com/@ulyxx3', icon: Youtube, id: 'YT-08' },
    { name: 'Steam', url: 'https://steamcommunity.com/profiles/76561199087202006', icon: SiSteam, id: 'ST-09' },
    { name: 'Spotify', url: 'https://open.spotify.com/user/dgf8lor4hfrja7en32jytw2n3', icon: Music, id: 'SP-10' },
    { name: 'GitHub', url: 'https://github.com/Ulyxx3', icon: Github, id: 'GH-11' },
    { name: 'Bluesky', url: 'https://bsky.app/profile/ulyxx3.bsky.social', icon: SiBluesky, id: 'BS-12' },
    { name: 'VGen', url: 'https://vgen.co/ulyxx3/', icon: Coffee, id: 'VG-13' },
    { name: 'Backloggd', url: 'https://backloggd.com/u/Ulyxx3/', icon: List, id: 'BL-14' },
    { name: 'Ko-fi', url: 'https://ko-fi.com/ulyxx3', icon: SiKofi, id: 'KF-15' },
];

const Socials = () => {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <h2 className="text-3xl font-quantico text-white">COMMS_FREQUENCY</h2>
                <div className="text-repo-orange font-mono text-sm uppercase">Channels: OPEN</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative bg-black/40 border border-white/10 p-4 flex items-center gap-4 hover:border-repo-orange hover:bg-white/5 transition-all"
                    >
                        <div className="p-2 bg-repo-secondary border border-white/5 group-hover:border-repo-orange/50 transition-colors">
                            <social.icon size={24} className="text-repo-blue group-hover:text-repo-orange transition-colors" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-xs text-slate-500 font-mono">{social.id}</span>
                            <span className="text-white font-rajdhani font-bold group-hover:text-repo-orange transition-colors">
                                {social.name.toUpperCase()}
                            </span>
                        </div>

                        {/* Corner Accent */}
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-repo-blue opacity-50 group-hover:opacity-100 group-hover:border-repo-orange transition-all" />
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Socials;
