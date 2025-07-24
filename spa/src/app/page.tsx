export default function Home() {
  const linkedinProfile = 'https://www.linkedin.com/in/chopinxavier';
  return (
      <div className="min-h-screen bg-gray-50">

        <header className="flex justify-between items-center p-6">
          <div className="text-lg font-semibold text-gray-600 ">XC</div>
          <div className="flex items-center space-x-4">
            <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">EN</button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto p-6">
          <section className="flex flex-col md:flex-row items-center justify-between mb-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Hi! I'm Xavier Chopin</h1>
              <h2 className="text-2xl text-gray-600 mb-4">Senior Software Engineer</h2>
              <p className="text-lg text-gray-600 mb-6">
                A French tech enthusiast based in the Bay Area, CA specialized in designing and developing scalable systems with Spring Boot and cloud technologies
              </p>
              <a href={linkedinProfile} className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300">
                Add me on LinkedIn!
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center relative">
              <img
                  src="/photo.jpg"
                  alt="Xavier Chopin"
                  className="w-64 h-64 relative z-20 clip-path-polygon"
              />
            </div>
          </section>

          <section className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
              <img
                  src="/image-2.png"
                  alt="Xavier Chopin"
                  className="w-64 h-64 object-contain"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
              <p className="text-lg text-gray-600">
                With over 8 years of international experience in Europe and North America, I specialize in designing and developing scalable systems using Java, Spring Boot, and cloud technologies.
              </p>
            </div>
          </section>
        </main>
      </div>
  );
}
