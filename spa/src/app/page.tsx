import { Fragment } from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { FiCalendar, FiFileText, FiLink, FiMapPin, FiMic } from 'react-icons/fi';
import PageHeader from '@/components/x/page-header';
import Post from '@/components/x/post';
import ProfileAvatar from '@/components/x/profile-avatar';
import ProfileTabs from '@/components/x/profile-tabs';
import VerifiedBadge from '@/components/x/verified-badge';
import { PROFILE } from '@/components/x/profile';
import { SKILLS } from '@/components/x/skills';
import { JOBS, JOB_THREADS, JobThread, postedTime } from '@/components/x/experience';

const BIO =
  'Software Engineer with 8 years of experience architecting high-scale backend systems across Europe and ' +
  'North America, including Silicon Valley. I specialize in Java, Spring Boot, and cloud-native distributed ' +
  'systems, with a rigorous focus on security and microservices. My deep technical expertise is recognized by ' +
  'the official Spring community, and led me to join the Spring Vanguard group where I meet weekly with core ' +
  'framework engineers to discuss the future of the ecosystem.';

// Derived from the Skills tab so the header stats never drift from it.
const TECH_DOMAINS = SKILLS.filter(({ category }) => category !== 'Soft Skills');
const TECH_COUNT = TECH_DOMAINS.reduce((total, { items }) => total + items.length, 0);

const TELESCOPE_URL = 'https://github.com/eschizoid/telescope';
const AWS_BADGE_URL = 'https://www.credly.com/badges/c7b95c14-774f-449d-b97a-48d50cee6f9c';
const LETUDIANT_URL =
  'https://www.letudiant.fr/educpros/actualite/pour-limiter-les-decrochages-en-l1-l-universite-de-lorraine-teste-l-analyse-des-donnees.html';
const LSAC_URL = 'https://lsac2019.loria.fr/';
const SPRING_AI_URL = 'https://github.com/spring-projects/spring-ai';

function DegreeCard({ degree, year }: { degree: string; year: string }) {
  return (
      <div className="flex items-center gap-3 p-3">
        <Image src="/resume/ul.png" alt="" width={64} height={64} className="h-16 w-16 shrink-0 rounded-xl bg-white object-contain" />
        <div className="min-w-0 text-[15px] leading-5">
          <p className="truncate font-bold">Université de Lorraine</p>
          <p className="truncate text-muted">{degree}</p>
          <p className="text-[13px] text-muted">{year}</p>
        </div>
      </div>
  );
}

const POSTS = [
  {
    posted: 'Sep 2026',
    post: (
      <Post date="Sep 2026">
        Contributing to{' '}
        <a href={TELESCOPE_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          Telescope
        </a>
        {' '}🔭 a type-safe Java mapper for records and POJOs, using method references instead of strings and
        running as fast as MapStruct.
      </Post>
    ),
  },
  {
    posted: 'Aug 2026',
    post: (
      <Post
          date="Aug 2026"
          media={
            <a href={AWS_BADGE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 hover:bg-hover">
              <Image src="/aws-saa.png" alt="" width={64} height={64} className="h-16 w-16 shrink-0" />
              <div className="min-w-0 text-[15px] leading-5">
                <p className="truncate font-bold">AWS Certified Solutions Architect – Associate</p>
                <p className="truncate text-muted">Amazon Web Services</p>
                <p className="text-[13px] text-muted">credly.com</p>
              </div>
            </a>
          }
      >
        Just got my AWS Certified Solutions Architect certification ☁️🎉
      </Post>
    ),
  },
  {
    posted: 'Apr 2025',
    post: (
      <Post date="Apr 2025">
        Happy to have contributed to{' '}
        <a href={SPRING_AI_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          Spring AI
        </a>
        {' '}🍃 I worked on the JDBC Chat Memory, which lets your AI apps persist conversation history in a
        relational database. Thanks{' '}
        <a href="https://github.com/markpollack" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          @markpollack
        </a>
        {' '}for the recognition 🙏
      </Post>
    ),
  },
  {
    posted: 'Apr 2025',
    post: (
      <Post
          date="Apr 2025"
          media={
            <Image
                src="/vanguard.jpeg"
                alt="Spring Vanguard 2025"
                width={400}
                height={400}
                className="block h-auto w-full"
            />
          }
      >
        Proud to share that I joined the Spring Vanguard community 🍃 I now meet weekly with core Spring
        framework engineers to discuss the future of the ecosystem.
      </Post>
    ),
  },
  {
    posted: 'Oct 2019',
    post: (
      <Post
          date="Oct 2019"
          media={
            <a href={LSAC_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 hover:bg-hover">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-card text-muted">
                <FiMic size={28} />
              </div>
              <div className="min-w-0 text-[15px] leading-5">
                <p className="truncate font-bold">LSAC 2019</p>
                <p className="line-clamp-2 text-muted">3rd Annual Learning &amp; Student Analytics Conference</p>
                <p className="text-[13px] text-muted">Loria, Nancy, France · lsac2019.loria.fr</p>
              </div>
            </a>
          }
      >
        Speaking at my first international conference 🎤 At LSAC 2019, hosted by INRIA/Loria, I&apos;ll dig into how we built our data warehouse at Université de Lorraine, and our
        strategy to process that data and deploy it across the university.
      </Post>
    ),
  },
  {
    posted: 'May 2018',
    post: (
      <Post
          date="May 2018"
          media={
            <a href={LETUDIANT_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 hover:bg-hover">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-card text-muted">
                <FiFileText size={28} />
              </div>
              <div className="min-w-0 text-[15px] leading-5">
                <p className="line-clamp-2 font-bold">
                  At the Université de Lorraine, fighting first-year dropout starts with data analysis
                </p>
                <p className="text-[13px] text-muted">EducPros by L&apos;Etudiant · letudiant.fr</p>
              </div>
            </a>
          }
      >
        Quoted in L&apos;Etudiant, a French higher-education magazine, about our learning analytics pilot project 📰
        We&apos;re using data to spot first-year students at risk of dropping out, a pilot in France and the European
        Union.
      </Post>
    ),
  },
  {
    posted: 'Jul 2017',
    post: (
      <Post date="Jul 2017" media={<DegreeCard degree="Bachelor's Degree in Computer Science" year="2017" />}>
        Officially graduated with my Bachelor&apos;s Degree in Computer Science from Université de Lorraine 🎓
      </Post>
    ),
  },
  {
    posted: 'Jul 2015',
    post: (
      <Post date="Jul 2015" media={<DegreeCard degree="Associate Degree in Computer Science" year="2015" />}>
        Proud to have earned my Associate Degree in Computer Science from Université de Lorraine 🎓 First step
        done, on to the Bachelor&apos;s!
      </Post>
    ),
  },
];

// Own posts and Work Experience announcements, newest first.
const TIMELINE = [
  ...POSTS.map(({ posted, post }, i) => ({ key: `post-${i}`, posted, node: post })),
  ...JOB_THREADS.map((entry) => ({
    key: `job-${entry.job.company}-${entry.job.posted}`,
    posted: entry.latest,
    node: <JobThread {...entry} />,
  })),
].sort((a, b) => postedTime(b.posted) - postedTime(a.posted));

function SkillsPanel() {
  return (
      <div>
        {SKILLS.map(({ category, items }) => (
            <section key={category} className="border-b border-line px-4 py-3">
              <h3 className="text-[15px] font-bold">{category}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {items.map((item) => (
                    <li key={item} className="rounded-full border border-line px-3 py-1 text-[13px]">{item}</li>
                ))}
              </ul>
            </section>
        ))}
      </div>
  );
}

export default function Home() {
  return (
      <>
        <PageHeader title={PROFILE.name} subtitle={`${POSTS.length + JOBS.length + 1} posts`} />

        <div className="relative aspect-[3/1] bg-card">
          <Image
              src="/banner.jpg"
              alt=""
              fill
              priority
              sizes="(min-width: 640px) 600px, 100vw"
              className="object-cover object-[50%_55%]"
          />
        </div>

        <section className="px-4 pb-3">
          <div className="flex items-start justify-between">
            <ProfileAvatar
                size={134}
                priority
                className="relative z-10 -mt-[15%] aspect-square w-1/4 min-w-12 max-w-[134px] border-4 border-canvas"
            />
            <a
                target="_blank"
                href={PROFILE.linkedin}
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[15px] font-bold text-canvas transition-opacity hover:opacity-90"
            >
              <FaLinkedin size={16} /> Follow
            </a>
          </div>

          <div className="mt-3">
            <h2 className="flex items-center gap-1 text-xl font-extrabold leading-6">
              {PROFILE.name} <VerifiedBadge size={20} />
            </h2>
            <p className="text-[15px] text-muted">@{PROFILE.handle}</p>
          </div>

          <p className="mt-3 text-[15px] leading-5">
            Software Engineer · AWS Certified Solutions Architect · Java · Spring Boot · Fintech
          </p>

          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[15px] text-muted">
            <span className="flex items-center gap-1"><FiMapPin /> Bay Area, CA</span>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-accent hover:underline">
              <FiLink /> linkedin.com/in/chopinxavier
            </a>
            <span className="flex items-center gap-1"><FiCalendar /> Building since 2013</span>
          </div>

          <div className="mt-3 flex gap-5 text-sm">
            <span><b className="text-ink">{TECH_COUNT}</b> <span className="text-muted">Technologies</span></span>
            <span><b className="text-ink">8</b> <span className="text-muted">Years</span></span>
          </div>
        </section>

        <ProfileTabs
            posts={
              <>
                <Post pinned stats={['18', '42', '1.1K', '21K']}>
                  {BIO}
                </Post>
                {TIMELINE.map(({ key, node }) => <Fragment key={key}>{node}</Fragment>)}
              </>
            }
            skills={<SkillsPanel />}
        />
      </>
  );
}
