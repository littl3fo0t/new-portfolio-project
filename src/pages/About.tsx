// About Page

import Header from "../components/Header";
import skills from "../data/skills";
import Tags from "../components/Tags";
import Footer from "../components/Footer";

const About = () => {
    const sortedSkills = skills.sort((a, b) => b.rank - a.rank);

    return (
        <>
            <title>Thomas Brun | About Me</title>

            <Header />

            <div className="container">
                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-centered">About Me</h1>
                <div className="columns">
                    <div className="column">
                        <section className="section">
                            <h2 className="title is-2">My Story</h2>
                            <p className="is-size-5">
                                I'm an aspiring Full-Stack Developer from the island of Mauritius 🦤 based in Halifax, Nova Scotia 🍁. Fluent in both <span className="has-text-weight-bold">English</span>  and <span className="has-text-weight-bold">French</span>.
                            </p>
                            <br />
                            <p className="is-size-5">
                                Praesent placerat scelerisque urna, ac accumsan quam. Etiam ac urna eu tellus viverra placerat. Nullam at molestie nisl. Pellentesque velit mi, maximus sit amet dapibus ac, volutpat quis nisi. Pellentesque semper convallis faucibus. Mauris rhoncus ligula at urna posuere dignissim. Proin odio nibh, aliquam non convallis in, elementum id magna. In feugiat dolor quis dui rhoncus, eget pulvinar orci cursus. Nulla efficitur maximus augue, ut tincidunt risus blandit non. Nunc molestie varius congue. Morbi at est non urna tempus dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </section>
                    </div>
                    <div className="column">
                        <section className="section">
                            <h2 className="title is-2">My Skills</h2>
                            <p className="subtitle mt-2">Click on any of them to find out more 👀</p>
                            <Tags skills={sortedSkills} />
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    );
};

export default About;