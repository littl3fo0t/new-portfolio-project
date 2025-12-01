// Footer Component

const Footer: React.FC = () => {
    return (
        <footer className="footer mt-4" data-theme="dark">
            <div className="container is-flex is-justify-content-center">
                <a href="https://www.linkedin.com/in/thomasbrun1/" target="_blank">
                    <span className="icon is-large has-text-white">
                        <i className="fab fa-linkedin-in fa-2x"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/thomasbrun1/" target="_blank">
                    <span className="icon is-large has-text-white">
                        <i className="fab fa-github fa-2x"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/thomasbrun1/" target="_blank">
                    <span className="icon is-large has-text-white">
                        <i className="far fa-envelope fa-2x"></i>
                    </span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;