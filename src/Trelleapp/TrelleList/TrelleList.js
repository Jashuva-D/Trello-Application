import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import {List, ListItem} from 'material-ui/List';
import TrelleCard from '../TrelleCard/TrelleCard';
import  FlatButton  from 'material-ui/FlatButton';
import ListHeader from './ListHeader';


class TrelleList extends React.Component{
    constructor(props){
        super(props);
        this.state={cardsList:[],titleUpdate:false,title:""}

        this.handleMoveCard=this.handleMoveCard.bind(this);
        this.handleAddCard=this.handleAddCard.bind(this);
        this.handleSaveCardUpdate=this.handleSaveCardUpdate.bind(this);
        this.handleDeleteCard=this.handleDeleteCard.bind(this);
        this.handleHeaderUpdate=this.handleHeaderUpdate.bind(this);

    }
    handleHeaderUpdate(newValue){
        this.props.update(this.props.index,newValue);
    }
    handleDeleteCard(index){
        var cards=this.state.cardsList;
        delete cards[index];
        this.setState({cardsList: cards});
    }
    handleSaveCardUpdate(index,newValue){
        this.state.cardsList[index]=newValue;
    }

    handleMoveCard(targetList,cardIndex){
        var cards=this.state.cardsList;
        var targetCard=cards[cardIndex];
        delete cards[cardIndex];
        this.props.handleMoveCard(targetList,targetCard);
        
    }
    componentWillUpdate(){
        if(this.props.title==this.props.MoveList){
            var targetCard=this.props.MoveCard;
            this.state.cardsList.push(targetCard);
        }

    }
   handleAddCard(){
       var card=document.getElementById(this.props.inputid).value;
       if(card!==""){
           
        var cards=this.state.cardsList;
        cards.push(card);
        this.setState({cardsList:cards})
        document.getElementById(this.props.inputid).value="";
       }
      
       
   }
   render(){
            const divStyle = {
                margin: '20px',
                border: '1px solid #ddd',
                display: 'inline-block',
                padding: '0px',
                height:'100%',
                borderRadius: '5px',
                backgroundColor:'white',
                verticalAlign: 'top'
            };
            const inputStyle={
                margin: 0,
                fontSize: "18px",
                lineHeight: "18px",
                height: "18px",
                padding: "10px",
                border: "1px solid #ddd",
                background: "#fff",
                borderRadius: "6px",
                fontFamily: "Lato, sans-serif",
                color: "#888"
            };
           return (
                    <MuiThemeProvider>
                    <div style={divStyle}>
                    <List style={{padding:'0px'}}>
                        <ListItem innerDivStyle={{padding: "0px"}}>
                                <ListHeader title={this.props.title} 
                                            update={this.handleHeaderUpdate}/>
                        </ListItem>
                        <ListItem>
                        <List>
                        {
                            this.state.cardsList.map((value,index)=><TrelleCard 
                                                                    key={index}
                                                                    lists={this.props.lists}
                                                                    cardIndex={index} 
                                                                    data={value} 
                                                                    moveCard={this.handleMoveCard}
                                                                    saveUpdate={this.handleSaveCardUpdate}
                                                                    delete={this.handleDeleteCard}
                                                                    />
                                                    )
                        }
                        </List>
                        </ListItem>
                        <ListItem>
                        <hr />
                        <input style={inputStyle} id={this.props.inputid} type='text'/>
                        <FlatButton label="add" primary={true} onClick={this.handleAddCard} />
                        </ListItem>
                    </List>
                    </div>
                    </MuiThemeProvider>
                )   
    }
}

export default TrelleList;