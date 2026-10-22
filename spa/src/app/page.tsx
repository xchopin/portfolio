import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { FiCalendar, FiLink, FiMapPin } from 'react-icons/fi';
import PageHeader from '@/components/x/page-header';
import Post from '@/components/x/post';
import ProfileAvatar from '@/components/x/profile-avatar';
import ProfileTabs from '@/components/x/profile-tabs';
import VerifiedBadge from '@/components/x/verified-badge';
import { PROFILE } from '@/components/x/profile';
import { SKILLS } from '@/components/x/skills';

const BIO =
  'Software Engineer with 9 years of experience architecting high-scale backend systems across Europe and ' +
  'North America, including Silicon Valley. I specialize in Java, Spring Boot, and cloud-native distributed ' +
  'systems, with a rigorous focus on security and microservices. My deep technical expertise is recognized by ' +
  'the official Spring community, and led me to join the Spring Vanguard group where I meet weekly with core ' +
  'framework engineers to discuss the future of the ecosystem.';

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
        <PageHeader title={PROFILE.name} subtitle="1 post" />

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
            Software Engineer · Java · Spring Boot · Cloud-native distributed systems
          </p>

          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[15px] text-muted">
            <span className="flex items-center gap-1"><FiMapPin /> Bay Area, CA</span>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-accent hover:underline">
              <FiLink /> linkedin.com/in/chopinxavier
            </a>
            <span className="flex items-center gap-1"><FiCalendar /> Building since 2013</span>
          </div>

          <div className="mt-3 flex gap-5 text-sm">
            <span><b className="text-ink">9</b> <span className="text-muted">Years</span></span>
            <span><b className="text-ink">3</b> <span className="text-muted">Countries</span></span>
            <span><b className="text-ink">7</b> <span className="text-muted">Companies</span></span>
          </div>
        </section>

        <ProfileTabs
            posts={
              <Post pinned stats={['18', '42', '1.1K', '21K']}>
                {BIO}
              </Post>
            }
            skills={<SkillsPanel />}
        />
      </>
  );
}
