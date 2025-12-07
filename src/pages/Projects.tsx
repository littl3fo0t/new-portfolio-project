// Projects page

import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectCard from "../components/Project";
import projects from "../data/projects";

const Projects: React.FC = () => {
    const sortedProjects = projects.sort((a, b) => a.createdDate.getTime() - b.createdDate.getTime());
    return (
        <>
            <title>Thomas Brun | My Projects</title>

            <Header />

            <main>
                <div className="container has-text-centered">
                    <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Projects</h1>
                </div>
                <div className="is-flex is-flex-wrap-wrap is-align-items-baseline">
                    {sortedProjects.map((project, index) => <ProjectCard key={index} project={project} />)}
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Projects;