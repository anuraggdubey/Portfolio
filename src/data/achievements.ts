import { Award, LucideIcon, Sparkles, Trophy } from 'lucide-react';
import stellarImg from '../../ss/stellar.png';
import execraImg from '../../ss/execra.png';

export interface AchievementItem {
  title: string;
  tag: string;
  org: string;
  desc: string;
  link?: string;
  linkLabel?: string;
  icon?: LucideIcon;
  image?: string;
}

export const achievements: AchievementItem[] = [
  {
    title: '₹60K+ Grants in Stellar Program',
    tag: '₹60K+ Awarded',
    org: 'Stellar Development Foundation / Ecosystem',
    desc: 'Secured ₹60,000+ in builder grants and ecosystem rewards for active development and open-source contributions on Stellar.',
    image: stellarImg,
    icon: Sparkles,
  },
  {
    title: 'Stellar InstaAwards Grant Selection',
    tag: 'Grant Selected',
    org: 'Stellar Mastery Program',
    desc: 'Execra6 project got selected for applying in Stellar InstaAwards grants, developed during the intensive Stellar Mastery Program.',
    link: 'https://github.com/anuraggdubey/Execra6',
    linkLabel: 'View Execra6',
    image: execraImg,
    icon: Award,
  },
  {
    title: 'Global Hackathon Winner — Syndicate by Maximor',
    tag: '🏆 1st Place Global',
    org: 'AO (Agent Orchestrator) · AI India Grants · Dodo Payments',
    desc: 'Won global hackathon for building Verity — an autonomous merge gate with deterministic controls and structured repair for AI finance agents.',
    link: 'https://github.com/anuraggdubey/verity',
    linkLabel: 'View Verity on GitHub',
    icon: Trophy,
  },
  {
    title: 'Intercollegiate Sports Champion',
    tag: 'Champion',
    org: 'Intercollegiate Tournaments',
    desc: '2× Volleyball Intercollegiate Tournament Winner and 1× Cricket Intercollegiate Tournament Winner representing college sports teams.',
    icon: Trophy,
  },
];
