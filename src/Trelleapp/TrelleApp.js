import React from 'react';
import TrelleList from './TrelleList/TrelleList.js';
import  FlatButton  from 'material-ui/FlatButton';
import { MuiThemeProvider } from 'material-ui/styles';

class TrelleApp extends React.Component{
    constructor(props){
        super(props);
        this.state={lists: ['To Do','Doing'], moveTargetList:"", moveTargetCard:""};
        this.update=true;
        this.handleAddList=this.handleAddList.bind(this);
        this.handleMoveCard=this.handleMoveCard.bind(this);
        this.handleListUpdate=this.handleListUpdate.bind(this);
    }
    handleAddList(){
        var title=prompt("Enter Title");
        this.state.lists.push(title);
        var updated=this.state.lists;
        this.setState({lists: updated})
        
    }
    handleMoveCard(targetList,targetCard){
        this.update=true;
        this.setState({moveTargetList:targetList,moveTargetCard:targetCard});
    }
    handleListUpdate(index,newValue){
        var list=this.state.lists;
        list[index]=newValue;
        this.setState({lists:list})
    }
    componentDidUpdate(){
        this.state.moveTargetList="";
        this.state.moveTargetCard="";
        if(this.update==true){
            this.update=false;
            this.forceUpdate();
        }
        
    }
    render(){
        var targetList=this.state.moveTargetList;
        var targetCard=this.state.moveTargetCard;
        var lists=this.state.lists;
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
        }
            return <MuiThemeProvider><div>
            {this.state.lists.map((value,index)=><TrelleList key={index} title={value} inputid={value+"input"}
                                                     listid={value+'list'}
                                                     lists={lists}
                                                     index={index}
                                                     handleMoveCard={this.handleMoveCard}
                                                     MoveList={targetList}
                                                     MoveCard={targetCard}
                                                     update={this.handleListUpdate}
                                                    />)}
            <div style={divStyle}>
            <FlatButton label="Add List" secondary={true} onClick={this.handleAddList} />
            </div>
        </div>
        </MuiThemeProvider>
        
    }
}

export default TrelleApp;