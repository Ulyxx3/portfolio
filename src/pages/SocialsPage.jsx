import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, MessageSquare, Music, Youtube, Gamepad2, Coffee, List } from 'lucide-react';
import { SiPinterest, SiTiktok, SiSteam, SiBluesky, SiKofi, SiTwitch } from 'react-icons/si';
import REPOButton from '../components/REPOButton';

const SocialsPage = ({ onBack }) => {
    const socials = [
        {
            platform: 'GITHUB',
            handle: '@Ulyxx3',
            url: 'https://github.com/Ulyxx3',
            icon: Github,
            status: 'ACTIVE'
        },
        {
            platform: 'TWITTER',
            handle: '@Ulyxx31',
            url: 'https://twitter.com/Ulyxx31',
            icon: Twitter,
            status: 'ACTIVE'
        },
        {
            platform: 'INSTAGRAM',
            handle: '@ulyxx3',
            url: 'https://www.instagram.com/ulyxx3',
            icon: Instagram,
            status: 'ACTIVE'
        },
        {
            platform: 'PINTEREST',
            handle: 'ulyxx3',
            url: 'https://www.pinterest.fr/ulyxx3/',
            icon: SiPinterest,
            status: 'ACTIVE'
        },
        {
            platform: 'TIKTOK',
            handle: '@ulyxx3',
            url: 'https://www.tiktok.com/@ulyxx3',
            icon: SiTiktok,
            status: 'ACTIVE'
        },
        {
            platform: 'REDDIT',
            handle: 'ConversationMore4995',
            url: 'https://www.reddit.com/user/ConversationMore4995',
            icon: MessageSquare,
            status: 'ACTIVE'
        },
        {
            platform: 'TWITCH',
            handle: 'ulyxx3_tv',
            url: 'https://www.twitch.tv/ulyxx3_tv',
            icon: SiTwitch,
            status: 'ACTIVE'
        },
        {
            platform: 'DISCORD',
            handle: 'discord.gg/spbY6W6',
            url: 'https://discord.gg/spbY6W6',
            icon: Gamepad2,
            status: 'ACTIVE'
        },
        {
            platform: 'YOUTUBE',
            handle: '@ulyxx3',
            url: 'https://www.youtube.com/@ulyxx3',
            icon: Youtube,
            status: 'ACTIVE'
        },
        {
            platform: 'STEAM',
            handle: 'Ulyxx3',
            url: 'https://steamcommunity.com/profiles/76561199087202006',
            icon: SiSteam,
            status: 'ACTIVE'
        },
        {
            platform: 'SPOTIFY',
            handle: 'Ulyxx3',
            url: 'https://open.spotify.com/user/dgf8lor4hfrja7en32jytw2n3',
            icon: Music,
            status: 'ACTIVE'
        },
        {
            platform: 'BLUESKY',
            handle: '@ulyxx3.bsky.social',
            url: 'https://bsky.app/profile/ulyxx3.bsky.social',
            icon: SiBluesky,
            status: 'ACTIVE'
        },
        {
            platform: 'VGEN',
            handle: 'ulyxx3',
            url: 'https://vgen.co/ulyxx3/',
            icon: Coffee,
            status: 'ACTIVE'
        },
        {
            platform: 'BACKLOGGD',
            handle: 'Ulyxx3',
            url: 'https://backloggd.com/u/Ulyxx3/',
            icon: List,
            status: 'ACTIVE'
        },
        {
            platform: 'KO-FI',
            handle: 'ulyxx3',
            url: 'https://ko-fi.com/ulyxx3',
            icon: SiKofi,
            status: 'ACTIVE'
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
                <h1 className="page-title">SOCIALS</h1>
                <button className="back-button" onClick={onBack}>BACK</button>
            </div>

            <div style={{ padding: '2rem', maxWidth: '900px' }}>
                <p style={{ fontSize: '0.9rem', color: '#CCCCCC', marginBottom: '2rem' }}>
                    COMMUNICATION CHANNELS // EXTERNAL FREQUENCIES
                </p>

                <div>
                    {socials.map((social, index) => (
                        <motion.div
                            key={social.platform}
                            className="social-link"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="social-info">
                                <div className="social-icon">
                                    <social.icon size={32} />
                                </div>
                                <div className="social-details">
                                    <h3>{social.platform}</h3>
                                    <p>{social.handle}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <span
                                    style={{
                                        fontSize: '0.9rem',
                                        color: '#00FF00',
                                        fontFamily: 'var(--font-body)'
                                    }}
                                >
                                    {social.status}
                                </span>
                                <a href={social.url} target="_blank" rel="noopener noreferrer">
                                    <REPOButton>CONNECT</REPOButton>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div
                    style={{
                        marginTop: '3rem',
                        padding: '2rem',
                        backgroundColor: 'rgba(65, 105, 225, 0.1)',
                        border: '2px solid #4169E1'
                    }}
                >
                    <h3 style={{ color: '#4169E1', marginBottom: '1rem', fontSize: '1.5rem' }}>
                        SECURE COMMUNICATIONS
                    </h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#CCCCCC' }}>
                        All channels are monitored and secured using military-grade encryption protocols.
                        Response time: 24-48 hours for general inquiries. Priority missions receive
                        immediate attention.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default SocialsPage;
