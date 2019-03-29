import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import Store from './Store/Store'
import Tooth from './components/Tooth'
import Toolbar from './components/Toolbar'


import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = Store
  }

  render() {
    return (
      <div className="container">
        <header>
          <h3>Ready to start programming the OdontogramaJS.</h3>
        </header>

        <main>
          <Tabs>
            <TabList>
              <Tab>Adulto</Tab>
              <Tab>Infantil</Tab>
            </TabList>

            <TabPanel>
                {this.state.arcada.adulto.map((item) => {
                  return <Tooth key={item.id} data={item}/>
                })}
            </TabPanel>
            <TabPanel>
            {this.state.arcada.infantil.map((item) => {
              return <Tooth key={item.id} data={item}/>
            })}
            </TabPanel>
          </Tabs>
          <Toolbar toolbar={this.state.toolbar}/>
        </main>
        
      </div>
    );
  }
}

export default App;
