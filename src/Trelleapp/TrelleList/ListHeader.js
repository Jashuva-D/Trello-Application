import React from 'react';
import ReactDOM from 'react-dom';
import {Card,CardHeader} from 'material-ui/Card'
import { MuiThemeProvider } from 'material-ui/styles';
import {List, ListItem} from 'material-ui/List';
import  FlatButton  from 'material-ui/FlatButton';

class ListHeader extends React.Component{
    constructor(props){
        super(props);
        this.state={title:"",update:false};
        
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleInput=this.handleInput.bind(this);
        this.saveUpdate=this.saveUpdate.bind(this);
    }
    componentWillMount(){
        this.state.title=this.props.title;
    }
    handleUpdate(){
        this.setState({update:true});
    }
    handleInput(event){
        this.setState({title:event.target.value});
    }
    saveUpdate(){
        this.props.update(this.state.title);
        this.state.update=false;
    }

    render(){
        const update=this.state.update;
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
        if(!update){
            return (
                <ListItem innerDivStyle={{padding: "0px"}} onClick={this.handleUpdate}>
                                    <Card>
                                    <CardHeader 
                                        title={this.state.title}
                                        actAsExpander={true}
                                        onClick={this.handleCheck}
                                        style={{padding: '20px',backgroundColor: '#E0E0E0'}}
                                    />
                                    </Card>
                </ListItem>
            )
        }
        else {
            return(
                <ListItem innerDivStyle={{padding: "16px"}}>
                            
                            <input style={inputStyle} value={this.state.title} onChange={this.handleInput}/>
                            <FlatButton label='Update' onClick={this.saveUpdate} />
                </ListItem>
            )
        }
        
    }
}

export default ListHeader;