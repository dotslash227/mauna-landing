import React from 'react';
import WandererImage from "../assets/main.jpg"
import "../styles/main.css"; // Main landing page css

class Wanderer extends React.Component{
    render(){
        return(            
            <div className="col homeImagePlaceholder">
                <img alt="Wanderer of the Sea" src={WandererImage} className="home-img img-fluid" />
                <span className="wandererText">
                    Wanderer above the Sea of Fog<br />
                    Caspar David Friedrich c.1818<br />                                                            
                    Into the darkness they go, the wise and the lovely.
                </span>                
            </div>                                
        )
    }
}

export default Wanderer;