// Projects page

import Footer from "../components/Footer";
import Header from "../components/Header";

const Projects: React.FC = () => {
    return (
        <>
            <title>Thomas Brun | My Projects</title>

            <Header />

            <main>
                <div className="container has-text-centered">
                    <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Projects</h1>
                </div>
                <div className="is-flex is-flex-wrap-wrap is-align-items-baseline">
                    <div className="card">
                        <div className="card-header">
                            <p className="is-size-3">
                                <b>GeeksforGeeks</b>
                            </p>

                        </div>
                        <div className="card-image">
                            <figure className="image">
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20220115184050/gfglogo-300x300.png"
                                    alt="GeeksforGeeks logo" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <p>
                                GeeksforGeeks is a computer science
                                portal for geeks by geeks. Here you
                                can find articles on various computer
                                science topics like Data Structures,
                                Algorithms and many more.
                            </p>
                        </div>

                        <div className="card-footer">
                            <a href="#" className="card-footer-item">
                                GeeksforGeeks
                            </a>
                            <a href="#" className="card-footer-item">
                                Practice
                            </a>
                            <a href="#" className="card-footer-item">
                                Courses
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <p className="is-size-3">
                                <b>GeeksforGeeks</b>
                            </p>

                        </div>
                        <div className="card-image">
                            <figure className="image">
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20220115184050/gfglogo-300x300.png"
                                    alt="GeeksforGeeks logo" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <p>
                                GeeksforGeeks is a computer science
                                portal for geeks by geeks. Here you
                                can find articles on various computer
                                science topics like Data Structures,
                                Algorithms and many more.
                            </p>
                        </div>

                        <div className="card-footer">
                            <a href="#" className="card-footer-item">
                                GeeksforGeeks
                            </a>
                            <a href="#" className="card-footer-item">
                                Practice
                            </a>
                            <a href="#" className="card-footer-item">
                                Courses
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <p className="is-size-3">
                                <b>GeeksforGeeks</b>
                            </p>

                        </div>
                        <div className="card-image">
                            <figure className="image">
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20220115184050/gfglogo-300x300.png"
                                    alt="GeeksforGeeks logo" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <p>
                                GeeksforGeeks is a computer science
                                portal for geeks by geeks. Here you
                                can find articles on various computer
                                science topics like Data Structures,
                                Algorithms and many more.
                            </p>
                        </div>

                        <div className="card-footer">
                            <a href="#" className="card-footer-item">
                                GeeksforGeeks
                            </a>
                            <a href="#" className="card-footer-item">
                                Practice
                            </a>
                            <a href="#" className="card-footer-item">
                                Courses
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <p className="is-size-3">
                                <b>THis is a very long title for no reason whatsoever</b>
                            </p>

                        </div>
                        <div className="card-image">
                            <figure className="image">
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20220115184050/gfglogo-300x300.png"
                                    alt="GeeksforGeeks logo" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="field is-grouped is-grouped-multiline">
                                <span className="tag is-hoverable is-medium">Tag 1</span>
                                <span className="tag is-hoverable is-medium">Tag 2</span>
                                <div className="control">
                                    <div className="tags are-medium has-addons">
                                        <span className="tag icon is-dark">
                                            <i className="fas fa-database" aria-hidden="true"></i>
                                        </span>
                                        <span className="tag is-hoverable">Tag 3</span>
                                    </div>
                                </div>
                            </div>
                            <p>
                                GeeksforGeeks is a computer science
                                portal for geeks by geeks. Here you
                                can find articles on various computer
                                science topics like Data Structures,
                                Algorithms and many more.
                            </p>
                        </div>

                        <div className="card-footer">
                            <a href="#" className="card-footer-item">
                                GeeksforGeeks
                            </a>
                            <a href="#" className="card-footer-item">
                                Practice
                            </a>
                            <a href="#" className="card-footer-item">
                                Courses
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Projects;