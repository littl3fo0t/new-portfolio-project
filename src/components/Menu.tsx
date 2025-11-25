// Menu Component for page navigation

import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <header className="container">
            <p className="buttons are-medium">
                <Link to="/about" className="button">
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>
                    <span>About</span>
                </Link>
                <Link to="/contact" className="button">
                    <span className="icon">
                        <i className="fas fa-comment"></i>
                    </span>
                    <span>Contact</span>
                </Link>
                <Link to="/projects" className="button">
                    <span className="icon">
                        <i className="fas fa-folder-open"></i>
                    </span>
                    <span>Projects</span>
                </Link>
            </p>
        </header>
    );
};

export default Menu;