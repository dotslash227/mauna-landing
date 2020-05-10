import React from 'react';
import {Link, useParams, withRouter} from "react-router-dom";
import Menu from '../../components/Menu';
import axios from "axios";
import "../../styles/blog/article.css";
import ReactHtmlParser from 'react-html-parser'; 

class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:this.props.match.params.id,
            article:[]
        }                   
    }

    componentDidMount(){        
        let query=`
        query{
            article:singleArticle(articleId:${this.state.id}){
              id, title, authorName, date, intro, content
            }
          }
        `        
        axios({
            method:"post",
            url:"http://15.222.199.18/blogback/graphql",
            data:{query:query}
        })
        .then((response)=>{
            console.log(response.data.data.article)
            this.setState({article:response.data.data.article}, ()=>document.title = this.state.article.title)            
        }).catch((error)=>console.log(error));
    }

    render(){
        const {title, authorName, date, intro, content} = this.state.article;
        return(            
            <div>                                
                <div>
                    <Menu showBird />
                </div>                
                <div className="row article-container">
                    <div className="col">
                        <div className="title">
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className="bar" style={{marginBottom:10}}></div>
                        <div className="articonti">
                            <div className="intro-articlep">
                                <p>{ReactHtmlParser(intro)}</p>
                            </div>
                            <div className="row bar">
                                <div className="col-1">
                                    <ion-icon style={{fontSize:20}} name="person-outline"></ion-icon>
                                </div>
                                <div className="col-9" style={{marginLeft:-50}}>
                                    <p>{authorName}</p>
                                </div>
                                <div className="col-2">
                                    <p>{date}</p>
                                </div>
                            </div>                        
                            <div className="content-article">
                                {ReactHtmlParser(content)}
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>                            
        )
    }

}

export default withRouter(Article);