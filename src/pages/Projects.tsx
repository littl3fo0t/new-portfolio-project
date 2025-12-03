// Projects page

import Footer from "../components/Footer";
import Menu from "../components/Menu";

const Projects: React.FC = () => {
    return (
        <>
            <title>Thomas Brun | My Projects</title>

            <Menu />

            <main>
                <div className="container has-text-centered">
                    <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Projects</h1>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Projects;