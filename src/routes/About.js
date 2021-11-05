import React from "react";
import './About.css'

function About(props){
    console.log(props)
    return (
    <div className="about__container">
        <sapn>
            About this page: I Build it becasuse it becasuse I love movies.
        </sapn>
        <span>- George Orwell, 1984</span>
    </div>
    )
}

export default About