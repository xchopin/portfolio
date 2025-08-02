import Image from 'next/image';

import { FaLinkedin } from 'react-icons/fa';
import ThemeBlob from '@/components/theme-blob';

export default function Home() {
  const linkedinProfile = 'https://www.linkedin.com/in/chopinxavier';

  return (
      <div className="font-bold transition-colors">
        <main className="max-w-5xl mx-auto px-6">
          <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 mb-16">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2  text-gray-800 dark:text-gray-50">
                Hi! I&apos;m Xavier Chopin
              </h1>
              <h2 className="text-2xl mb-4 text-gray-600 dark:text-gray-200">
                Senior Software Engineer
              </h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-200">
                I build systems that scale, survive, and serve — with clean code, resilience, and real impact.
              </p>
              <a
                  target="_blank"
                  href={linkedinProfile}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 transition"
              >
                Add me on LinkedIn <FaLinkedin size={18} />
              </a>
            </div>
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              <div className="absolute w-72 h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r
              dark:from-blue-400 dark:via-purple-400 dark:to-pink-400
              rounded-full opacity-50 blur-3xl -z-10" />
              <Image
                  src="/photo.png"
                  alt="Xavier Chopin"
                  width={275}
                  height={275}
                  className="relative z-10"
                  priority
              />
            </div>
          </section>
          <section className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 ">
              <ThemeBlob />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">About Me</h2>
              <p className="text-lg text-gray-600 dark:text-gray-200">
                I’m a passionate Software Engineer with over 7 years of experience in building resilient systems. <br />
                Throughout my journey, my expertise has allowed me to reside in various regions, including France, Canada, and the United States. <br /><br />
                With these experiences, I was invited to join the Spring Vanguard community by Broadcom, where I weekly meet with core Spring engineers to explore new features and
                advancements in Java. <br/>
                Besides programming, I also enjoy making electronic music where both of my passions come together.<br /><br />
                I currently reside in San Jose, CA, and am looking for opportunities where I can apply my expertise.
              </p>
            </div>
          </section>
        </main>
      </div>
  );
}
