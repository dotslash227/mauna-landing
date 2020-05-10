// Webpage for the team section
// Dependencies: React. For styling -> None for now
import React from 'react';
import Wanderer from '../components/Wanderer';
import Menu from '../components/Menu';
import "../styles/main.css"; // Main landing page css

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="row">
                <Wanderer />
                <div className="homeContentArea2 col" >
                    <Menu showBird />
                    <h2>About Us</h2>
                    <p>
                        Mauna is a comprehensive platform that brings together a host of natural language and speech models in a declarative product. <br />
                        The core product is a framework for creating natural-sounding, intelligent conversational agents without having to
                        learn advanced AI, NLU or deep learning, etc.<br />
                    </p>
                </div>
            </div>
        )
    }
}

export default About;
