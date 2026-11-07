import Image from 'next/image';
import { FiMapPin } from 'react-icons/fi';
import Post from '@/components/x/post';
import { PROFILE } from '@/components/x/profile';

// Shared by the Work Experience page and the home timeline.
export const JOBS = [
    {
        company: 'Capital One',
        title: 'Full Stack Engineer 3',
        duration: '2026 - Present',
        posted: 'Sep 2026',
        promotion: true,
        location: 'San Jose, CA, USA',
        image: '/resume/capitalone.jpeg',
    },
    {
        company: 'Capital One',
        title: 'Principal Associate - Sr. Software Engineer',
        duration: '2025 – 2026',
        posted: 'Dec 2025',
        location: 'San Francisco, CA, USA',
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
        intro: 'Big news: I just moved to Canada 🇨🇦 Bonjour Montréal !',
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
    {
        company: 'French Ministry of Sports',
        title: 'Full-Stack Developer (Internship)',
        duration: '2015',
        posted: 'Apr 2015',
        location: 'Essey-lès-Nancy, France',
        image: '/resume/govfr.png',
    },
];

type Job = (typeof JOBS)[number];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// "Sep 2026" → sortable month number, used to interleave posts by date.
export const postedTime = (posted: string) => {
    const [month, year] = posted.split(' ');
    return Number(year) * 12 + MONTHS.indexOf(month);
};

// A promotion is shown as a reply under the role it follows, not as its own post.
export const JOB_THREADS = JOBS.flatMap((job, index) => {
    if ('promotion' in job) return [];
    const reply = JOBS.find((other) => 'promotion' in other && other.company === job.company);
    return [{ job, index, reply, latest: reply?.posted ?? job.posted }];
});

// "PayPal (Contractor)" → "PayPal"
const companyName = (company: string) => company.split(' (')[0];

function announcement(job: Job, index: number) {
    const text = roleText(job, index);
    return 'intro' in job ? `${job.intro}\n\n${text}` : text;
}

function roleText(job: Job, index: number) {
    const name = companyName(job.company);
    // The card already shows the new position, so the text leaves it out.
    if ('promotion' in job) {
        return `Excited to share that I’m starting a new role at ${name} 🎉`;
    }
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

function CompanyCard({ job }: { job: Job }) {
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

export function JobThread({ job, index, reply }: (typeof JOB_THREADS)[number]) {
    return (
        <>
            <Post date={job.posted} media={<CompanyCard job={job} />} thread={!!reply}>
                {announcement(job, index)}
            </Post>
            {reply && (
                <Post date={reply.posted} media={<CompanyCard job={reply} />} replyingTo={PROFILE.handle}>
                    {announcement(reply, JOBS.indexOf(reply))}
                </Post>
            )}
        </>
    );
}
