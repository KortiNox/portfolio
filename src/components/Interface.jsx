import { motion } from 'framer-motion';

const Section = (props) => {
  const { children, mobileTop } = props;
  return (
    <motion.section
      className={`w-screen p-8 max-w-screen-2xlа flex flex-col items-start justify-center min-h-screen `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen ">
      <AboutSection />
      <div className="mt-16" /> {/* Отступ между секциями */}
      <SkillsSection />
      <div className="mt-16" /> {/* Отступ между секциями */}
      <ProjectSection />
      <div className="mt-24">
        <ContactSection />
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section mobileTop>
      <h1 className="text-3xl font-extrabold leading-snug">
        <span className="bg-white 1px italic">Artem Korolev</span>
      </h1>
      <p className="text-lg text-gray-600 mt-4 bg-white">Frontend-developer</p>
      <button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}>
        Contacts me
      </button>
    </Section>
  );
};

const skills = [
  {
    category: 'Основы веб-разработки',
    items: [{ title: 'HTML' }, { title: 'CSS (SCSS, SASS, Tailwind)' }],
  },
  {
    category: 'Инструменты и системы контроля версий',
    items: [{ title: 'Git (GitHub)' }],
  },
  {
    category: 'Языки программирования',
    items: [{ title: 'JavaScript' }, { title: 'TypeScript' }],
  },
  {
    category: 'Библиотеки и фреймворки',
    items: [{ title: 'React' }, { title: 'Redux / Zustand' }],
  },
  {
    category: 'Инструменты разработки',
    items: [{ title: 'ESLint, Prettier' }, { title: 'Webpack / Vite' }],
  },
  {
    category: 'Тестирование и документация',
    items: [{ title: 'Jest, Storybook, i18n' }],
  },
  {
    category: 'Графика и 3D',
    items: [{ title: 'Three.js, React Three Fiber, Blender' }],
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <div className="min-h-screen max-w-2xl mx-auto px-2 py-4">
        <h2 className="text-2xl font-bold text-left text-gray-900 mb-3">Skills</h2>
        <div className="space-y-3">
          {skills.map((skillCategory, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skillCategory.category}</h3>
              <div className="grid grid-cols-3 gap-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div
                    className="bg-white rounded-lg shadow-md p-2 transition-transform transform hover:scale-100"
                    key={skillIndex}
                  >
                    <h4 className="text-base font-semibold text-gray-800">{skill.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const technologies = ['HTML', 'CSS', 'TypeScript', 'React', 'Redux', 'Vite'];

const ProjectSection = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="flex flex-col items-center justify-center mx-auto px-2 py-4">
          <h1 className="text-3xl font-extrabold leading-snug">
            HOOKAMIX
            <br />
            <span className="bg-white 1px italic">Классический SPA</span>
          </h1>
          <p className="text-lg text-gray-600 mt-6">Используемые технологии:</p>
          <div className="flex flex-wrap gap-4 mt-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-indigo-600 text-white py-2 px-4 rounded-lg font-bold text-lg"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <a href="https://www.google.ru/" className="mt-8">
          <h1 className="text-3xl font-extrabold leading-snug">
            <span className="bg-white 1px italic">Посмотреть проект</span>
          </h1>
          <img src="projects/001.png" width={700} height={400} alt="Project Screenshot" />
        </a>
        <a href="https://www.google.ru/" className="mt-8">
          <h1 className="text-3xl font-extrabold leading-snug">
            <span className="bg-white 1px italic">Посмотреть код (Github)</span>
          </h1>
          <img src="projects/002.png" width={700} height={400} alt="Github Screenshot" />
        </a>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-20 mt-[70px] w-full max-w-4xl mx-auto  pb-24 rounded-3xl mb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300">
            Свяжитесь со мной
          </span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white shadow-xl rounded-xl p-10  hover:shadow-2xl  transition-shadow duration-300 "
        >
          <ul className="space-y-6">
            <li className="flex items-center">
              <span className="font-semibold text-gray-700 w-32">GitHub:</span>
              <a
                href="https://github.com/KortiNox"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-indigo-600 hover:text-indigo-800  transition-colors  font-medium  hover:underline flex-1"
              >
                KortiNox
              </a>
            </li>
            <li className="flex items-center">
              <span className="font-semibold text-gray-700 w-32">Telegram:</span>
              <a
                href="https://t.me/KortiNox"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-indigo-600 hover:text-indigo-800  transition-colors font-medium  hover:underline flex-1"
              >
                KortiNox
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
//
//
//
