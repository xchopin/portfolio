'use client';

import { motion } from 'framer-motion';
import {FaFilePdf} from "react-icons/fa";
import Image from 'next/image';
import { FiMapPin } from 'react-icons/fi';
import PageHeader from '@/components/x/page-header';
import Post from '@/components/x/post';
import { PROFILE } from '@/components/x/profile';

const jobs = [
    {
        company: 'Capital One',
        title: 'Principal Associate - Sr. Software Engineer',
        duration: '2025 - Present',
        posted: 'Dec 2025',
        location: 'San Jose, CA, USA',
        image: '/resume/capitalone.jpeg',
    },
    {
        company: 'PayPal (Contractor)',
        title: 'Software Engineer III',
        duration: '2025',
        posted: 'Sep 2025',
        intro: 'Big news: I just moved to the US 🇺🇸 Hello Silicon Valley!',
        location: 'San Jose, CA, USA',
        image: '/resume/paypal.png',
    },
    {
        company: 'Desjardins Bank',
        title: 'Senior Backend Developer',
        duration: '2022 – 2025',
        posted: 'Feb 2022',
        location: 'Montreal, QC, Canada',
        image: '/resume/desjardins.png',
    },
    {
        company: 'mbiance',
        title: 'Full-Stack Developer',
        duration: '2021 – 2022',
        posted: 'Oct 2021',
        intro: 'Big news: I just moved to Canada 🇨🇦 Bonjour Montréal\u00a0!',
        location: 'Montréal, QC, Canada',
        image: '/resume/mbiance.png'
    },
    {
        company: 'BoursoBank (Contractor)',
        title: 'Full-Stack Engineer',
        duration: '2020 – 2021',
        posted: 'Mar 2020',
        location: 'Nancy, France',
        image: '/resume/boursorama.png',
    },
    {
        company: 'University of Lorraine',
        title: 'Data Engineer',
        duration: '2017 – 2020',
        posted: 'Oct 2017',
        location: 'Nancy, France',
        image: '/resume/ul.png',
    },
    {
        company: 'Saint-Gobain',
        title: 'Full-Stack Engineer (Internship)',
        duration: '2017',
        posted: 'Apr 2017',
        location: 'Pont-à-Mousson, France',
        image: '/resume/saintgobain.png',
    },
];

// "PayPal (Contractor)" → "PayPal"
const companyName = (company: string) => company.split(' (')[0];

function announcement(job: (typeof jobs)[number], index: number) {
    const text = roleText(job, index);
    return 'intro' in job ? `${job.intro}\n\n${text}` : text;
}

function roleText(job: (typeof jobs)[number], index: number) {
    const name = companyName(job.company);
    if (job.title.includes('Internship')) {
        return `Starting my internship at ${name} as a ${job.title.replace(' (Internship)', '')} 🎓`;
    }
    if (job.company.includes('Contractor')) {
        return `New mission! I’m joining ${name} as a contractor, ${job.title} 🤝`;
    }
    return index === 0
        ? `Excited to share that I’m joining ${name} as ${job.title} 🎉`
        : `New role: I’m joining ${name} as ${job.title} 🚀`;
}

function CompanyCard({ job }: { job: (typeof jobs)[number] }) {
    return (
        <div className="flex items-center gap-3 p-3">
            <Image
                src={job.image}
                alt={job.company}
                width={64}
                height={64}
                className="h-16 w-16 shrink-0 rounded-xl bg-white object-contain"
            />
            <div className="min-w-0 text-[15px] leading-5">
                <p className="truncate font-bold">{companyName(job.company)}</p>
                <p className="truncate text-muted">{job.title}</p>
                <p className="flex items-center gap-1 text-[13px] text-muted">
                    <FiMapPin size={12} /> {job.location} · {job.duration}
                </p>
            </div>
        </div>
    );
}

export default function ResumePage() {
    return (
        <>
            <PageHeader title="Work Experience" subtitle={`${jobs.length} positions`} back />

            <Post pinned stats={['4', '16', '512', '11K']}>
                My career has taken me across different regions of the world, allowing me to better understand
                global business needs at both a region-specific and a global level.
                <a
                    target="_blank"
                    href={PROFILE.contact}
                    rel="noopener noreferrer"
                    className="mt-3 flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-2 font-bold text-white transition-opacity hover:opacity-90"
                >
                    Ask for my full resume <FaFilePdf size={14} />
                </a>
            </Post>

            {jobs.map((job, index) => (
                <motion.div
                    key={job.company}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                >
                    <Post date={job.posted} media={<CompanyCard job={job} />}>
                        {announcement(job, index)}
                    </Post>
                </motion.div>
            ))}
        </>
    );
}
