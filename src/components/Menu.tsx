// Menu Component for page navigation

//import { useState } from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
    // const [isActive, setIsActive] = useState(false);

    // const handleClick = () => {
    //     console.log("In handle click")
    //     setIsActive(!isActive);
    // };
    return (
        // <header className="container columns">
        //     <div className="column">
        //         <p>testing</p>
        //     </div>
        //     <div className="column">
        //         <div className="buttons are-medium is-flex-wrap-nowrap is-justify-content-end">
        //             <Link to="/about" className="button">
        //                 <span className="icon">
        //                     <i className="fas fa-user" aria-hidden="true"></i>
        //                 </span>
        //                 <span>About</span>
        //             </Link>
        //             <Link to="/contact" className="button">
        //                 <span className="icon">
        //                     <i className="fas fa-comment" aria-hidden="true"></i>
        //                 </span>
        //                 <span>Contact</span>
        //             </Link>
        //             <Link to="/projects" className="button">
        //                 <span className="icon">
        //                     <i className="fas fa-folder-open" aria-hidden="true"></i>
        //                 </span>
        //                 <span>Projects</span>
        //             </Link>
        //             {/* <div className={"dropdown " + (isActive ? "is-active" : "")} onClick={handleClick}>
        //                 <div className="dropdown-trigger">
        //                     <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
        //                         <span>Choose theme</span>
        //                         <span className="icon">
        //                             <i className="fas fa-angle-down" aria-hidden="true"></i>
        //                         </span>
        //                     </button>
        //                 </div>
        //                 <div className="dropdown-menu" role="menu">
        //                     <div className="dropdown-content">
        //                         <div className="dropdown-item is-medium is-hoverable">
        //                             <p>
        //                                 <span className="icon">
        //                                     <i className="fas fa-sun" aria-hidden="true"></i>
        //                                 </span>
        //                                  Light
        //                             </p>
        //                         </div>
        //                         <hr className="dropdown-divider" />
        //                         <div className="dropdown-item is-medium">
        //                             <p>
        //                                 <span className="icon">
        //                                     <i className="fas fa-moon" aria-hidden="true"></i>
        //                                 </span>
        //                                  Dark
        //                             </p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div> */}
        //             <div className="select is-medium">
        //                 <select>
        //                     <option>Choose theme</option>
        //                     <option value="">☀️ Light</option>
        //                     <option value="">🌙 Dark</option>
        //                 </select>
        //             </div>
        //         </div>
        //     </div>

        // </header>
        <header className="container">
            <nav className="navbar is-spaced is-white" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <img src="https://bulma.io/assets/images/placeholders/48x48.png" alt="placeholder" className="image image is-48x48" />
                    </Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <div className="buttons are-medium">
                                <Link to="/about" className="button">
                                    <span className="icon">
                                        <i className="fas fa-user" aria-hidden="true"></i>
                                    </span>
                                    <span>About</span>
                                </Link>
                                <Link to="/projects" className="button">
                                    <span className="icon">
                                        <i className="fas fa-folder-open" aria-hidden="true"></i>
                                    </span>
                                    <span>Projects</span>
                                </Link>
                                <Link to="/contacts" className="button">
                                    <span className="icon">
                                        <i className="fas fa-comment" aria-hidden="true"></i>
                                    </span>
                                    <span>Contact</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Menu;