// Home.js for the homepage of mauna landing website
// Dependencies: React, Styles placed under styles/main.css for this webpage
import React from 'react';
import Menu from '../components/Menu'; // Menu Component
import "../styles/main.css"; // Main landing page css
import Logo from "../assets/logo.png";
import MobileLogo from "../assets/mauna-dark.png";
import FbLogo from '../assets/fblogo.png';
import Twitter from '../assets/twitter.png';
import LinkedIn from '../assets/linkedinround.png';
import EmailInput from '../components/EmailInput'; //EmailInput Component for email capturing
import Wanderer from "../components/Wanderer";

class Home extends React.Component{
    constructor(props){
        super(props);        
        this.state = { 
            emailAddress:'',                        
        }
        this.handleEmailChange = this.handleEmailChange.bind(this); //Binder for handleEmail input method
        this.submitEmail = this.submitEmail.bind(this); // Binder for submit email method
    }    

    // Method to handle changing email event
    handleEmailChange(event){                
        this.setState({emailAddress:event.target.value})
    }

    // Method for handling click aftwer email input
    // ToDo : Integrate the email submission with a backend: Backend has to be decided (FireBase or Google Sheets or own custom end)
    submitEmail(){
        console.log("email in state: ", this.state.emailAddress);
    }

    render(){        
        return(            
            <div className="row">      
                <Wanderer />          
                <div className="homeContentArea col">
                    <Menu />
                    {/* <Menu /> */}
                    <div className="container">
                        <div className="text-center">
                            {
                                (window.innerWidth > 768) ? <img src={Logo} alt="Mauna AI Logo" className="logo img-fluid" /> : <img src={MobileLogo} alt="Mauna AI Logo" className="logo img-fluid" />
                            }                            
                            <p className="home-text">
                                Build State of the Art<br />
                                Conversational Interfaces<br />
                                with Voice or Text
                            </p>
                            <p className="info-text">
                                Notify me when Mauna launches                                    
                            </p>                             
                            <EmailInput onClick={this.submitEmail} onChange={this.handleEmailChange} />   
                        </div>
                        {/* Start of social media icon box */}
                        <div className="social-icons-box">
                            <a target="_blanl" href="https://www.facebook.com">
                                <img src={FbLogo} alt="Facebook Logo" className="social-icon img-fluid" />
                            </a>
                            <a target="_blanl" href="https://www.facebook.com">
                                <img src={Twitter} alt="Twitter logo" className="social-icon img-fluid" />
                            </a>
                            <a target="_blanl" href="https://www.facebook.com">
                                <img src={LinkedIn} alt="Twitter logo" className="social-icon img-fluid" />
                            </a>                                                        
                        </div>
                        {/* End of social media icon box */}
                    </div>
                </div>
            </div>                                            
        )        
    }
}

export default Home;