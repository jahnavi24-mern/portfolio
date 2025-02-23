import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const experiences = [
  { role: "SDE-1", company: "Paybolt", duration: "Sept 2024 - Present", 
    details: ["Developed critical application features, including IP whitelisting and session management.", 
        "Integrated front-end elements such as login and password update pages using Next.js and TanStack."],
    techStack: ["Next.js", "TanStack", "Node.js", "Nest.js", "TypeORM", "Go"]
  },
  { role: "Backend Developer Intern", company: "Helpy Moto", duration: "July 2024 - Sept 2024", 
    details: ["Developed APIs for ticket management system with role-based access.", 
        "Implemented real-time chat support using Socket.io."],
    techStack: ["Node.js", "Express.js", "Socket.io", "MongoDB"]
  },
  { role: "SDE-backend", company: "Snouters", duration: "March 2024 - June 2024", 
    details: ["Implemented microservices architecture to enhance scalability and maintainability.", 
        "Developed robust and scalable APIs, testing, and deploying features."],
    techStack: ["Node.js", "Express.js"]
  },
  { role: "SDE Intern", company: "Antino Labs", duration: "Jan 2022 - July 2022", 
    details: ["Developed backend for an e-commerce Android app.", "Built an NGO web application for fundraising and donations, integrating Razorpay and JWT authentication."],
    techStack: ["Node.js", "Express.js", "Razorpay", "JWT"]
  }
];

const projects = [
  { name: "Formbot", 
    description: "Developed a collaborative form-building platform, inspired by Google Forms and Docs. Implemented user authentication, form creation, and real-time collaboration.",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "https://final-2-frontend.vercel.app/"
  },
  { name: "Linkman", 
    description: "Created a URL-shortening application that allows users to generate short links, track usage analytics, and manage links effectively.",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "https://linkman-fe.vercel.app/"
  },
  { name: "Machine Learning Models", 
    description: "Implemented clustering and classification models, including K-means, DBSCAN, and SVM.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    link: "https://github.com/jahnavi02/DS-CS"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8 font-sans">
      <header className="text-center text-6xl font-extrabold my-8 tracking-wider text-blue-400 drop-shadow-lg">Jahnavi Garikapati</header>
      <p className="text-center text-xl text-gray-300 italic">Backend Developer | Full Stack Enthusiast</p>
      
      <section className="my-16">
        <h2 className="text-4xl font-bold mb-8 border-b-4 pb-3 border-blue-500 text-center">Experience</h2>
        <div className="max-w-5xl mx-auto overflow-y-auto h-100 p-4 bg-gray-800 rounded-xl shadow-2xl">
          {experiences.map((exp, index) => (
            <motion.div key={index} className="mb-6 p-6 bg-gray-700 rounded-xl shadow-lg hover:shadow-blue-500 transition-shadow" whileHover={{ scale: 1.05 }}>
              <h3 className="text-2xl font-semibold text-blue-300">{exp.role} - {exp.company}</h3>
              <p className="text-gray-400 italic">{exp.duration}</p>
              <ul className="list-none pl-6 mt-3 text-gray-300">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <p className="mt-3 text-blue-400">Tech Stack: {exp.techStack.join(", ")}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="my-16">
        <h2 className="text-4xl font-bold mb-8 border-b-4 pb-3 border-blue-500 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} className="p-6 bg-gray-800 rounded-xl shadow-2xl hover:shadow-blue-500 transition-shadow hover:bg-gray-700" whileHover={{ scale: 1.05 }}>
              <h3 className="text-2xl font-semibold text-blue-300">{project.name}</h3>
              <p className="text-gray-300">{project.description}</p>
              <p className="mt-3 text-blue-400">Tech Stack: {project.techStack.join(", ")}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">View Project</a>
            </motion.div>
          ))}
        </div>
      </section>
      
      <footer className="text-center mt-16">
        <h2 className="text-3xl font-bold text-blue-400">Contact</h2>
        <p className="text-gray-300 text-lg">Email: jahnavig310@gmail.com</p>
        <div className="flex justify-center mt-8 space-x-8">
          <a href="https://www.linkedin.com/in/jahnavi-garikapati-64b4281b9/" className="text-4xl text-blue-400 hover:text-blue-300 transition-transform transform hover:scale-125"><FaLinkedin /></a>
          <a href="https://github.com/jahnavi02" className="text-4xl text-blue-400 hover:text-blue-300 transition-transform transform hover:scale-125"><FaGithub /></a>
        </div>
      </footer>
    </div>
  );
}
