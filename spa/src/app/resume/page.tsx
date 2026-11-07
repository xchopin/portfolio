'use client';

import { motion } from 'framer-motion';
import {FaFilePdf} from "react-icons/fa";
import PageHeader from '@/components/x/page-header';
import Post from '@/components/x/post';
import { PROFILE } from '@/components/x/profile';
import { JOBS, JOB_THREADS, JobThread } from '@/components/x/experience';


export default function ResumePage() {
    return (
        <>
            <PageHeader title="Work Experience" subtitle={`${JOBS.length} positions`} back />

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

            {JOB_THREADS.map((entry) => (
                <motion.div
                    key={`${entry.job.company}-${entry.job.posted}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: entry.index * 0.05 }}
                    viewport={{ once: true }}
                >
                    <JobThread {...entry} />
                </motion.div>
            ))}
        </>
    );
}
