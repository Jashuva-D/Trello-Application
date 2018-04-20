import React from 'react';
import ReactDOM from 'react-dom';
import Popover from 'material-ui/Popover';
import { MuiThemeProvider } from 'material-ui/styles';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


class MovePopOver extends React.Component{
    
    constructor(props){
        super(props);
        this.state={open:false,anchorEl:null};
        this.handlePopOverClose=this.handlePopOverClose.bind(this);
        this.handleMenuClick=this.handleMenuClick.bind(this);
    }
    handlePopOverClose(){
        this.setState({open:false});
    }
    componentWillUpdate(){
        this.state.open=this.props.open;
    }
    handleMenuClick(event){
        this.props.MenuClick(event.target.textContent);
    }
    render(){
        return(
            <MuiThemeProvider>
                            <Popover
                                    open={this.state.open}
                                    anchorEl={this.props.anchorEl}
                                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                    onRequestClose={this.handlePopOverClose}
                                    >
                                    <Menu style={{backgroundColor:'yellow',color: 'white'}}>
                                        {
                                            this.props.lists.map((list,index)=>
    
                                                                            <MenuItem 
                                                                                key={index} 
                                                                                primaryText={list} 
                                                                                onClick={this.handleMenuClick} 
                                                                            />
                                                                    )
                                        }
                                    </Menu>
                            </Popover>
            </MuiThemeProvider>
        )
    }
}

export default MovePopOver;