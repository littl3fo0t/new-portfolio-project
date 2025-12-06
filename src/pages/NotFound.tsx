// 404 Page Not Found

import type React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound: React.FC = () => {
    return (
        <>
            <Header />

            <title>404 | Page Not Found</title>

            <div className="container box">
                <div className="has-text-centered">
                    <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">404</h1>
                    <p className="subtitle is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">Page not found 😔</p>
                    <div className="content">
                        <p className="is-size-5">
                            Looks like you clicked on a broken link or another error occurred...
                        </p>
                    </div>
                    <Link to="/" className="button is-rounded is-large">
                        <span className="icon">
                            <i className="fas fa-home" aria-hidden="true"></i>
                        </span>
                        <span>Go Home</span>
                    </Link>
                </div>
            </div>

            <Footer />
        </>

    );
};

export default NotFound;