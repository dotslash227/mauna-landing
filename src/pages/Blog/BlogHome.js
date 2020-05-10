import React from 'react';
import "../../styles/blog/home.css"
import Menu from "../../components/Menu";
import {Link} from 'react-router-dom';
import Ink from  "../../assets/ink.png"
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser'; 

class BlogHome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categories:[],
            articles:[],
            loadedCategory:'',
            loadedArticle:[]
        }
        this.changeSelectedCategory = this.changeSelectedCategory.bind(this);
        this.fetchArticles = this.fetchArticles.bind(this);
    }

    // Method to change  the selected category and fetch articles accordingly
    changeSelectedCategory(categoryId){
        if(categoryId=="all") this.setState({loadedCategory:''}, ()=>this.fetchArticles())
        else this.setState({loadedCategory:categoryId}, ()=>this.fetchArticles())
    }    

    fetchArticles(){        
        let query = "";
        if(!this.state.loadedCategory){
        query = `
        query{            
            articles:allArticles{
              id, title, authorName, intro, date
            }
          }
        `
        }
        else{
            query = `
            query{
                articles:articlesBycat(categoryId:${this.state.loadedCategory}){
                  id, authorName, title, intro, date
                }
              }
            `
        }
        axios({
            method:"post",
            url:"http://15.222.199.18/blogback/graphql",
            data:{query:query}
        }).then((response)=>this.setState({articles:response.data.data.articles}))
        .catch((error)=>console.log(error));
    }

    componentDidMount(){     
        // Load articles when component is loaded   
        this.fetchArticles();
        let query=`
        query{
            categories:allCategories{
              id, name
            }
            articles:allArticles{
              id, title, authorName, intro, date
            }
          }
        `        
        axios({
            method:'post',
            url:'http://15.222.199.18/blogback/graphql',
            data:{"query":query}
        })
        .then((response)=>{            
            this.setState({categories:response.data.data.categories, articles:response.data.data.articles})
        })
        .catch((error)=>console.log(error));
    }

    render(){
        return(
            <div>
                <div>
                    <Menu showBird white />            
                </div>                
                <div className="bloghome-header"></div>                
                <div className="header-title">
                    <p>
                        <img src={Ink} className="ink" alt="ink-logo" />
                        Founder's Speak
                    </p>                   
                </div>
                <div className="row blog-area">
                    <div className="col-2">                                                
                        <ul className="category-list">
                            {this.state.categories.map((item,key)=>{
                                return(
                                    <li key={item.id}>
                                        <a onClick={()=>this.changeSelectedCategory(item.id)}>{item.name}</a>
                                    </li>
                                )
                            })}
                            <li><a onClick={()=>this.changeSelectedCategory("all")}>All</a></li>
                        </ul>
                    </div>
                    <div className="col-10 view-pane" style={{marginTop:15}}>
                        {this.state.articles.map((item,key)=>{
                            return(                                
                                <div className="blog-entry" key={key}>
                                    <Link to={`/blog/${item.id}`}><p className="title">{item.title}</p></Link>
                                    <p className="intro">{ReactHtmlParser(item.intro)}</p>
                                    <div className="author">
                                        <div className="row">
                                            <div className="col-1">
                                                <ion-icon style={{fontSize:20}} name="person-outline"></ion-icon>
                                            </div>
                                            <div className="col-9" style={{marginLeft:-50}}>
                                                <p>{item.authorName}</p>
                                            </div>
                                            <div className="col-2">
                                                <p>{item.date}</p>
                                            </div>
                                        </div>
                                    </div>                                                                                                      
                                </div>                                
                            )
                        })}
                    </div>
                </div>
            </div>
        )        
    }

}

export default BlogHome;