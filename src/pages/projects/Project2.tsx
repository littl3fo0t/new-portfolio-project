// Project page for Yu-Gi-Oh! Card Search App (version 2)

import { Link } from "react-router-dom";

const Project2: React.FC = () => {
    return (
        <>
            <div className="is-size-5">
                <p>
                    This project represents a significant technical refactoring and feature expansion of my initial <Link to="/projects/1">Yu-Gi-Oh! Card Search App</Link>. The core aim of this iteration was to <span className="has-text-weight-bold">deeply learn and implement TypeScript fundamentals</span> and understand its advantages over vanilla JavaScript.
                </p>
                <p>
                    The V2 application was built in React and configured with TypeScript from the ground up, allowing me to master integration, configuration, and typing complex data structures. The use of <span className="has-text-weight-bold">Redux</span> was central to this project, teaching me how to <span className="has-text-weight-bold">store and efficiently manage data</span> returned from the external API. Crucially, I gained hands-on experience in using Redux to <span className="has-text-weight-bold">reliably track and handle all loading, success, and error states</span> across the application.
                </p>
                <ol type="1">
                    <li><span className="has-text-weight-bold">Advanced Search:</span> Users can now perform more flexible searches by "fuzzy" name or by card properties (Level/Rank/Link Value), instead of requiring an exact name match.</li>
                    <li><span className="has-text-weight-bold">Enhanced Presentation:</span> Incorporation of card properties via icons and the actual card artwork for better visual appeal.</li>
                    <li><span className="has-text-weight-bold">Design Inspiration:</span> The updated UI/UX was inspired by the professional design of the <a href="https://www.masterduelmeta.com/" target="_blank" rel="noopener noreferrer"><span className="is-italic">Yu-Gi-Oh! Master Duel Meta website</span></a>.</li>
                </ol>
                <p>
                    Overall, this project solidified my understanding of <span className="has-text-weight-bold">type safety, scalable state management (Redux), and working with complex data collections (Sets)</span> within a modern React environment.
                </p>
            </div>
        </>
    );
};

export default Project2;