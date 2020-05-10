import React from 'react';
import '../styles/team.css';
import Logo from '../assets/mauna-icon-dark.png';
import Diwank from '../assets/team/diwank.png'
import Ishaan from '../assets/team/Ishaan.png';
import Dmitry from '../assets/team/dmitry.png';
import Vivek from '../assets/team/vivek.png';
import Dhruv from '../assets/team/Dhruv.png';
import Nina from '../assets/team/Nina.png';
import Jazzy from '../assets/team/Jazzy.png';
import Bruce from '../assets/team/Bruce.png';
import Philip from '../assets/team/Philip.png'
import Menu from '../components/Menu';

class Team extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            current:'',
            people:{
                "diwank":{fullName:'Diwank Singh Tomar', pos:'Engineering'},
                "ishaan":{fullName: 'Ishaan Chugh', pos:'Business'},
                "dmitry":{fullName:'Dmitry Paramonov', pos:'Engineering'},
                "jazzy": {fullName: "Jazzy Borlagatan", pos:"Business"},
                "nina": {fullName: "Nina-Simone", pos:"Security"},
                "philip": {fullName: "Philip Balbas", pos:"Engineering"},
                "bruce": {fullName: "Bruce Angelis", pos:"Engineering"},
                "dhruv": {fullName: "Dhruv Arora", pos:"Engineering"},
                "vivek": {fullName: "Vivek Jain", pos:"Business"}
            }            
        }        
        this.renderPerson = this.renderPerson.bind(this);        
        this.changeSelected = this.changeSelected.bind(this);
    }

    changeSelected(name){        
        this.setState({current:name});                
    }

    renderPerson(){        
        if(this.state.current){
            console.log(this.state.current);
            let {fullName, pos} = this.state.people[this.state.current];
            console.log(fullName, pos)
            return(
                <div className="mate-description">
                    <p>
                        <span style={{color:"#6a6a6a"}}>{fullName}</span><br />
                        <span style={{color:"#06a5f9"}}>{pos}</span>
                    </p>                        
                </div>
            )
        }        
        else{
            console.log("no current")
            return(
                <div></div>
            )            
        }        
    }
    
    render(){
        return(                      
            <div>
                <Menu showBird />
                <div className="row" style={{overflowY:"hidden"}}>
                    <div className="col">
                        <p className="main-text">The Craftsmen</p>
                        <p className="words">
                            If you want to build a ship, don't drum up people to collect wood <br />
                            and don't assign them tasks and work, but rather teach them to long <br />
                            for the endless immensity of the sea. <br />
                            - Antoine de Saint-Exupery
                        </p>
                        <div className="team-pics">
                            <div className="section-1-team">                            
                                <img src={Diwank} className="human1" alt="Diwank" onClick={()=>this.changeSelected("diwank")} />
                                <img src={Ishaan} className="human1" alt="Ishaan" onClick={()=>this.changeSelected("ishaan")} />
                                <img src={Nina} className="human1" alt="Nina" onClick={()=>this.changeSelected("nina")} />
                                <img src={Vivek} className="human1" style={{marginLeft:20}} alt="Vivek" onClick={()=>this.changeSelected("vivek")} />
                                <img src={Bruce} className="human" style={{marginLeft:383, marginTop:-61}} alt="Bruce" onClick={()=>this.changeSelected("bruce")} />
                                <div></div>                            
                                <img src={Dmitry} className="human" style={{marginLeft:383, marginTop:-500}} alt="Dmitry" onClick={()=>this.changeSelected("dmitry")} />
                                <div></div>
                                <img src={Philip} className="human" style={{marginLeft:465, marginTop:-83}} alt="Philip" onClick={()=>this.changeSelected("philip")} />
                                <div></div>
                                <img src={Jazzy} className="human" style={{marginLeft:465, marginTop:-825}} alt="Jazzy" onClick={()=>this.changeSelected("jazzy")  } />
                                <div></div>
                                <img src={Dhruv} className="human" style={{marginLeft:549, marginTop:-380}} alt="Dhruv" onClick={()=>this.changeSelected("dhruv")} />
                            </div>                         
                        </div>
                        {(this.state.current) && this.renderPerson()}
                    </div>                
                </div>
            </div>
        )
    }
}

export default Team;