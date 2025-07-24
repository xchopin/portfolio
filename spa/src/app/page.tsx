import Image from 'next/image'
import Terminal from '@/components/terminal/terminal'
import { FaLinkedin } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'

export default function Home() {
  const linkedinProfile = 'https://www.linkedin.com/in/chopinxavier'

  return (
      <div className="min-h-screen bg-gray-50">
        <header className="flex justify-between items-center p-6">
          <div className="text-lg font-semibold text-gray-600">XC</div>
          <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <FiSun size={18} className="text-gray-700" />
          </button>
        </header>

        <main className="max-w-5xl mx-auto px-6">
          <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 mb-16">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Hi! I&apos;m Xavier Chopin</h1>
              <h2 className="text-2xl text-gray-600 mb-4">Senior Software Engineer</h2>
              <p className="text-lg text-gray-600 mb-6">
                I build systems that scale, survive, and serve — with clean code, resilience, and real impact.
              </p>
              <a
                  target="_blank"
                  href={linkedinProfile}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                Add me on LinkedIn <FaLinkedin size={18} />
              </a>
            </div>

            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              <div className="absolute w-72 h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-50 blur-3xl -z-10" />
              <Image
                  src="/photo.jpg"
                  alt="Xavier Chopin"
                  width={208}
                  height={208}
                  className="relative z-10 clip-path-polygon rounded-3xl"
                  priority
              />
            </div>
          </section>

          <section className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <Image
                  src="/blob.png"
                  alt=""
                  width={300}
                  height={300}
                  className="object-contain z-10"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
              <p className="text-lg text-gray-600">
                I’m a Senior Software Engineer with over 8 years of experience in building scalable systems using Java, Spring Boot, and cloud technologies. <br/>
                My expertise has allowed me to work in various countries, including France, Canada, and now the United States.  <br/> <br/>
                Through these experiences, I have become a part of the Spring Vanguard community, where I weekly meet with core Spring engineers to explore new features and
                advancements in Java.  <br/>
                Beyond my professional life, I am passionate about music and occasionally produce electronic music.<br/> <br/>
                <b>I currently reside in San Jose, CA, and am looking for opportunities where I can apply my expertise.</b>
              </p>
            </div>
          </section>

          <div className="mt-5"></div>

          <section
              aria-labelledby="skills-title"
              className="container section"
              style={{margin: 'auto', padding: '1rem'}}
          >
            <h2 id="skills-title" className="text-[1.8rem] font-semibold mb-4 text-black">
              Skills
            </h2>

              <Terminal />

          </section>

        </main>
      </div>
  )
}
