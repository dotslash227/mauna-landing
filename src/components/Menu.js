// Menu.js for top navigation for mauna landing page
// Dependencies: React. Styles -> menu.css
import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../assets/mauna-icon-dark.png'
import 'react-responsive-modal/styles.css';
import "../styles/menu.css";
import { Modal } from 'react-responsive-modal';

class Menu extends React.Component{

    constructor(props){
        super(props);  
        this.state = {
            openModal: false,
        }      
        this.handleModal = this.handleModal.bind(this);
    }

    handleModal(){
        const {openModal} = this.state;
        if (openModal) this.setState({openModal:false})
        else this.setState({openModal:true})
    }
    
    render(){        
        return(      
            <div className="menu-position" style={{marginRight:50}}>
                {(this.props.white) ? (
                    // To show a white bird
                    <div style={{float:"left"}}>
                        {(this.props.showBird) && 
                            <div className="logo-area" >
                                <img src={Logo} alt="mauna-logo-birdie" />
                            </div>
                        }   
                    </div>  
                ) : (
                    // showing the non-white
                    <div style={{float:"left"}}>
                        {(this.props.showBird) && 
                            <div className="logo-area" >
                                <img src={Logo} alt="mauna-logo-birdie" />
                            </div>
                        }   
                    </div>  
                )}                
                <div style={{float:"right", marginTop:20}}>
                    <ion-icon name="menu-outline" onClick={()=>this.handleModal()} style={(this.props.white)?{fontSize:40,color:"white"}:{fontSize:40}}></ion-icon>
                </div>                 
                <Modal open={this.state.openModal} onClose={this.handleModal} center classNames={{modal:"overlay-menu"}}>
                    <div style={{opacity:1, width:500, textAlign:"center", fontSize:30, borderWidth:0}}>
                        <Link style={{color:"white"}} to="/" className="nav-item nav-link active mr3">Home</Link>                        
                        <Link to="/team" className="nav-item nav-link active mr3">Team</Link>                    
                        <Link to="/blog" className="nav-item nav-link active mr3">Blog</Link>                                    
                    </div>
                </Modal>                
            </div>      
        )
    }
}

export default Menu;