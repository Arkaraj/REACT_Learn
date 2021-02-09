import React from 'react';
import { Link } from 'react-router-dom'
// Link prevents reload of pages

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <Link to="/">Go to Home</Link>
        </div>
    );
}

export default About;
