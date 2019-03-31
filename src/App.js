import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Store from './Store/Store'
import Header from './components/Header'
import Tooth from './components/Tooth'
import Toolbar from './components/Toolbar'


import './App.css';


const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});




class App extends Component {
  constructor(props){
    super(props)

    this.state = Store

    this.state.value = 0
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="container">
        
        <Header />
        <main>
          <div className={classes.root}>

            <AppBar position="static">
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="Adulto" />
                <Tab label="Infantil" />
              </Tabs>
            </AppBar>

            {value === 0 && 
              <TabContainer>
                {this.state.arcada.adulto.map((item) => {
                  return <Tooth key={item.id} data={item}/>
                })}
              </TabContainer>
            }

            {value === 1 && 
              <TabContainer>
                {this.state.arcada.infantil.map((item) => {
                  return <Tooth key={item.id} data={item}/>
                })}
              </TabContainer>
            }
          </div>

          <Toolbar toolbar={this.state.toolbar}/>
        </main>
        
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
