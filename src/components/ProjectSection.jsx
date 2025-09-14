import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "A beautiful web page",
    description: "A beautiful web page that helps people with shopping.",
    image: "/projects/project-1.webp",
    tags: ["React", "Tailwind", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "A Real time Chatting System",
    description:
      "This project helps to chat with another person in real time",
    image: "/projects/chat.png",
    tags: ["React", "Tailwind", "Mongo DB", "Express JS", "Node JS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "User Friendly Ecommerce site",
    description:
      "A complete e-commerce website with authentication, product filtering, and cart functionality.",
    image: "/projects/project-4.jpeg",
    tags: ["React", "Tailwind", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the coolest projects that I have created. Each project
          was carefully crafted with attention to detail, performance, and user
          experience.
        </p>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Pushes this section to bottom */}
                <div className="mt-auto">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-secondary/50 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex justify-between items-center">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm flex items-center gap-1"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm flex items-center gap-1"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
