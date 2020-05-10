// ReactJS Component for Input Email for main landing page
// Dependencies: EmailInput.css for styling and react
import React from 'react';
import "../styles/emailInput.css";

class EmailInput extends React.Component{
    constructor(props){
        super(props);        
        this.state = {
            validEmail: false,            
        }
        this.changeFocusColor = this.changeFocusColor.bind(this);
    }    
    
    changeFocusColor(event){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)){
            console.log("valid email");
            this.setState({validEmail:true});
        }
        else this.setState({validEmail:false});
    }

    render(){
        return(            
            <div className="text-center email-form">
                <input 
                    type="text" 
                    className={this.state.validEmail ? "valid-input" : "invalid-input"}
                    placeholder="Enter Email Address" 
                    onChange={e=>{this.changeFocusColor(e); this.props.onChange(e)}} 
                />
                {this.state.validEmail ? 
                    <ion-icon
                        name="arrow-forward-circle-sharp"
                        style={{fontSize:30, marginBottom:-10, color:"green"}}
                    >
                    </ion-icon>
                    :
                    <ion-icon                     
                        // color={this.state.validEmail && "green"} 
                        // onClick={this.props.onClick} 
                        style={{fontSize:30, marginBottom:-10, color:"red"}} 
                        name="arrow-forward-circle-outline"
                    >                        
                    </ion-icon>
                }                
            </div>            
        )
    }    
}

export default EmailInput;