import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { SlLink } from "react-icons/sl";
import { GoLinkExternal } from "react-icons/go";
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full max-w-xl ">
              <motion.h6
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="mb-2  font-semibold"
              >
                {project.title}
              </motion.h6>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
              >
                <ul style={{ listStyleType: "disc" }}>
                  {project.description.map((desc, index) => (
                    <li key={index} className="mb-4 text-neutral-400">
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="inline-flex items-baseline text-neutral-400 hover:underline mt-4 font-semibold space-x-1">
                      <div> Code </div>
                      <SlLink className="size-3.5" />
                    </div>
                  </a>
                </div>

                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="inline-flex items-baseline text-neutral-400 hover:underline mt-1 font-semibold space-x-1">
                      <div>Live site here</div>
                      <GoLinkExternal className="size-3.5" />
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
