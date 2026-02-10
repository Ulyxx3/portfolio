import { motion } from 'framer-motion';
import { Twitter, Instagram, Pin, MessageSquare, Twitch, Youtube, Gamepad2, Music, Github, Globe, Coffee, List } from 'lucide-react';
import { SiTiktok, SiSteam, SiBluesky, SiKofi } from 'simple-icons-v14'; // Note: lucide doesn't have all icons, using custom SVGs or fallback

// Since lucide doesn't have all brand icons, I'll create a helper for custom SVGs if needed, 
// or I will use text/generic icons where specific ones are missing, 
// but for now I will map best effort and use Lucide. 
// Actually, simple-icons is better for brand icons but getting it might be extra step.
// I will use Lucide where possible and SVG strings for others to keep it simple without more dependencies.

const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/Ulyxx31', icon: Twitter, color: '#1DA1F2' },
    { name: 'Instagram', url: 'https://www.instagram.com/ulyxx3', icon: Instagram, color: '#E1306C' },
    { name: 'Pinterest', url: 'https://www.pinterest.fr/ulyxx3/', icon: Pin, color: '#BD081C' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@ulyxx3', icon: Music, color: '#00F2EA' }, // Using Music as proxy
    { name: 'Reddit', url: 'https://www.reddit.com/user/ConversationMore4995', icon: MessageSquare, color: '#FF4500' },
    { name: 'Twitch', url: 'https://www.twitch.tv/ulyxx3_tv', icon: Twitch, color: '#9146FF' },
    { name: 'Discord', url: 'https://discord.gg/spbY6W6', icon: Gamepad2, color: '#5865F2' },
    { name: 'YouTube', url: 'https://www.youtube.com/@ulyxx3', icon: Youtube, color: '#FF0000' },
    { name: 'Steam', url: 'https://steamcommunity.com/profiles/76561199087202006', icon: Gamepad2, color: '#171a21' },
    { name: 'Spotify', url: 'https://open.spotify.com/user/dgf8lor4hfrja7en32jytw2n3', icon: Music, color: '#1DB954' },
    { name: 'GitHub', url: 'https://github.com/Ulyxx3', icon: Github, color: '#ffffff' },
    { name: 'Bluesky', url: 'https://bsky.app/profile/ulyxx3.bsky.social', icon: Globe, color: '#0560ff' },
    { name: 'VGen', url: 'https://vgen.co/ulyxx3/', icon: Coffee, color: '#ff6b6b' },
    { name: 'Backloggd', url: 'https://backloggd.com/u/Ulyxx3/', icon: List, color: '#4a90e2' }, // Proxy icon
    { name: 'Ko-fi', url: 'https://ko-fi.com/ulyxx3', icon: Coffee, color: '#FF5E5B' },
];

const Socials = () => {
    return (
        <section className="py-20 px-4">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600"
            >
                Connect With Me
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: social.color + '20',
                            borderColor: social.color
                        }}
                        className="flex flex-col items-center justify-center p-6 w-32 h-32 rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-300 group"
                        style={{ '--hover-color': social.color }}
                    >
                        <social.icon
                            size={32}
                            className="mb-2 text-slate-400 group-hover:text-[var(--hover-color)] transition-colors duration-300"
                            style={{ color: social.color }} // Force color for now to look good immediately
                        />
                        <span className="text-sm font-medium text-slate-300 group-hover:text-white">{social.name}</span>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Socials;
