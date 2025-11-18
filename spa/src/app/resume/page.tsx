'use client';

import Image from 'next/image';
import Terminal from '@/components/terminal/terminal';
import { motion } from 'framer-motion';
import ThemeBlob from "@/components/theme-blob";
import {FaFilePdf} from "react-icons/fa";

const jobs = [
    {
        company: 'PayPal (Contractor)',
        title: 'Software Engineer III',
        duration: '2025',
        location: 'San Jose, CA, USA',
        image: '/resume/paypal.png',
    },
    {
        company: 'Desjardins Bank',
        title: 'Senior Backend Developer',
        duration: '2022 – 2025',
        location: 'Montreal, QC, Canada',
        image: '/resume/desjardins.png',
    },
    {
        company: 'mbiance',
        title: 'Full-Stack Developer',
        duration: '2021 – 2022',
        location: 'Montreal, QC, Canada',
        image: '/resume/mbiance.png'
    },
    {
        company: 'BoursoBank (Contractor)',
        title: 'Full-Stack Engineer',
        duration: '2020 – 2021',
        location: 'Nancy, France',
        image: '/resume/boursorama.png',
    },
    {
        company: 'University of Lorraine',
        title: 'Data Engineer',
        duration: '2017 – 2020',
        location: 'Nancy, France',
        image: '/resume/ul.png',
    },
    {
        company: 'Saint-Gobain',
        title: 'Full-Stack Engineer (Internship)',
        duration: '2017',
        location: 'Pont-a-Mousson, France',
        image: '/resume/saintgobain.png',
    },
];

export default function ResumePage() {
    return (
        <main className="max-w-5xl mx-auto px-6">
            <section className="flex flex-col md:flex-row items-center gap-24">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Work Experience</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-200 mb-6">
                        My career has taken me across different regions of the world, allowing me to better
                        understand global business needs and learn from diverse cultures.
                    </p>

                    <a
                        target="_blank"
                        href="mailto:xavierchopinca+askresume@gmail.com"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 transition"
                    >
                        Ask for my full resume <FaFilePdf size={18} />
                    </a>
                </div>
                <div className="w-full md:w-1/4 flex justify-center md:justify-start dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 ">
                    <div className="absolute w-56 h-56 bg-gradient-to-r
                        dark:from-blue-400 dark:via-purple-400 dark:to-pink-400
                            rounded-full opacity-50 blur-3xl" />

                    <ThemeBlob folder="resume" size={250} />
                </div>
            </section>


            <section className="mx-auto mt-20">
                <div className="relative">

                    {jobs.map((job, index) => (
                        <motion.div
                            key={1 + index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative z-10 mb-14 flex items-start gap-6"
                        >
                            <div className="flex flex-col items-center w-14 relative z-20">
                                <div className="w-14 h-14 rounded-full bg-white dark:bg-zinc-900 shadow-md ring-2 ring-gray-300 dark:ring-gray-600 overflow-hidden z-10">
                                    <Image
                                        src={job.image}
                                        alt={job.company}
                                        width={56}
                                        height={56}
                                        className="object-contain"
                                    />
                                    </div>
                            </div>

                            <div className="ml-4 w-full">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {job.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-4">
                                        {job.duration}
                                    </p>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    {job.company} — {job.location}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        key="0"
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="absolute left-[26px] top-0 h-full w-[3px] bg-gray-300 dark:bg-gray-700 z-0"
                    ></motion.div>
                </div>

                <motion.div
                    key={7}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <Terminal/>
                </motion.div>
            </section>
        </main>
    );
}
