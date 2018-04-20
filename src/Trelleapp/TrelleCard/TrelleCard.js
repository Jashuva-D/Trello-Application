import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MovePopOver from './MovePopOver';

class TrelleCard extends React.Component{
    
    constructor(props){
        super(props);

        this.state={OpenPopOver: false,anchorEl:null,update:false,value:""}
        this.handleMoveClick=this.handleMoveClick.bind(this);
        this.handleMoveItem=this.handleMoveItem.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.saveUpdate=this.saveUpdate.bind(this);
        this.handleInput=this.handleInput.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }
    handleDelete(){
        this.props.delete(this.props.cardIndex);
    }
    handleInput(event){
        this.setState({update:true,value: event.target.value})
        //this.state.value=event.target.value;
    }
    handleUpdate(){
        this.setState({update: true})
    }
    componentWillMount(){
        this.state.value=this.props.data;
    }
    handleMoveClick(event){
        this.setState({OpenPopOver: true,anchorEl:event.currentTarget});
    }
    handleMoveItem(targetList){
        this.props.moveCard(targetList,this.props.cardIndex);
        
    }
    saveUpdate(){
        this.props.saveUpdate(this.props.cardIndex,this.state.value);
        this.setState({update: false})
    }
    render(){
        const inputStyle={
            margin: 0,
            fontSize: "18px",
            lineHeight: "18px",
            padding: "5px",
            border: "1px solid #ddd",
            background: "#fff",
            borderRadius: "6px",
            fontFamily: "Lato, sans-serif",
            color: "#888"
        }
        const ListItemStyle={
            border: "1px solid #ddd ",
            borderRadius: "10px",
            padding:"0px"
        }
        var update=this.state.update;
        if(!update){
            return (
                <ListItem style={ListItemStyle} primaryText={this.state.value} 
                          leftAvatar={
                                        <Avatar icon={<IconMenu
                                                        iconButtonElement={<IconButton><Menu /></IconButton>}
                                                        >
                                                            <MenuItem primaryText="Edit" onClick={this.handleUpdate}/>
                                                            <MenuItem primaryText="Delete" onClick={this.handleDelete}/>
                                                        </IconMenu>
                                                    }
                                                size={30}
                                        />
                            }
                                     
                          rightIcon={<ArrowDropRight onClick={this.handleMoveClick}/>}
                >
                <MovePopOver 
                    open={this.state.OpenPopOver}
                    lists={this.props.lists}
                    anchorEl={this.state.anchorEl}
                    MenuClick={this.handleMoveItem}
                />
                </ListItem>
            )
        }
        else{
            return (
                <ListItem>
                    <input style={inputStyle} value={this.state.value} onChange={this.handleInput}/>
                    <FlatButton label='save' onClick={this.saveUpdate} />
                </ListItem>
            )
        }
        
    }
}

export default TrelleCard;