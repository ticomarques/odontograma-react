import React, { Component } from 'react';
import Tooth from './components/Tooth'


import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      arcada: {
        adulto: [{
          id: 18,
          nome: 'dente18',
          faces: [
            {
              id: '18face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '18face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '18face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '18face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '18face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        },{
          id: 17,
          nome: 'dente17',
          faces: [
            {
              id: '17face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '17face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '17face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '17face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '17face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        },{
          id: 16,
          nome: 'dente16',
          faces: [
            {
              id: '16face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '16face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '16face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '16face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '16face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 15,
          nome: 'dente15',
          faces: [
            {
              id: '15face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '15face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '15face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '15face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '15face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 14,
          nome: 'dente14',
          faces: [
            {
              id: '14face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '14face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '14face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '14face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '14face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 13,
          nome: 'dente13',
          faces: [
            {
              id: '13face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '13face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '13face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '13face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '13face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 12,
          nome: 'dente12',
          faces: [
            {
              id: '12face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '12face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '12face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '12face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '12face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 11,
          nome: 'dente11',
          css: 'spaceRight',
          faces: [
            {
              id: '11face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '11face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '11face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '11face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '11face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 21,
          nome: 'dente21',
          faces: [
            {
              id: '21face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '21face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '21face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '21face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '21face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 22,
          nome: 'dente22',
          faces: [
            {
              id: '22face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '22face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '22face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '22face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '22face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 23,
          nome: 'dente23',
          faces: [
            {
              id: '23face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '23face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '23face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '23face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '23face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 24,
          nome: 'dente24',
          faces: [
            {
              id: '24face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '24face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '24face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '24face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '24face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 25,
          nome: 'dente25',
          faces: [
            {
              id: '25face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '25face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '25face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '25face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '25face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 26,
          nome: 'dente26',
          faces: [
            {
              id: '26face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '26face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '26face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '26face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '26face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 27,
          nome: 'dente27',
          faces: [
            {
              id: '27face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '27face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '27face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '27face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '27face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 28,
          nome: 'dente11',
          css: 'noMarginRight',
          faces: [
            {
              id: '28face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '28face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '28face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '28face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '28face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 48,
          nome: 'dente48',
          css: 'clear',
          faces: [
            {
              id: '48face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '48face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '48face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '48face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '48face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 47,
          nome: 'dente47',
          faces: [
            {
              id: '47face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '47face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '47face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '47face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '47face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 46,
          nome: 'dente46',
          faces: [
            {
              id: '46face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '46face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '46face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '46face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '46face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 45,
          nome: 'dente45',
          faces: [
            {
              id: '45face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '45face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '45face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '45face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '45face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 44,
          nome: 'dente44',
          faces: [
            {
              id: '44face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '44face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '44face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '44face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '44face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 43,
          nome: 'dente43',
          faces: [
            {
              id: '43face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '43face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '43face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '43face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '43face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 42,
          nome: 'dente42',
          faces: [
            {
              id: '42face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '42face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '42face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '42face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '42face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 41,
          nome: 'dente41',
          css: 'spaceRight',
          faces: [
            {
              id: '41face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '41face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '41face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '41face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '41face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 31,
          nome: 'dente31',
          faces: [
            {
              id: '31face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '31face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '31face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '31face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '31face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 32,
          nome: 'dente32',
          faces: [
            {
              id: '32face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '32face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '32face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '32face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '32face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 33,
          nome: 'dente35',
          faces: [
            {
              id: '33face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '33face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '33face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '33face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '33face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 34,
          nome: 'dente34',
          faces: [
            {
              id: '34face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '34face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '34face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '34face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '34face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 35,
          nome: 'dente35',
          faces: [
            {
              id: '35face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '35face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '35face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '35face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '35face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 36,
          nome: 'dente36',
          faces: [
            {
              id: '36face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '36face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '36face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '36face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '36face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 37,
          nome: 'dente37',
          faces: [
            {
              id: '37face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '37face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '37face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '37face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '37face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        }, {
          id: 38,
          nome: 'dente38',
          css: 'noMarginRight',
          faces: [
            {
              id: '38face1',
              nome:'face1',
              estado: 'white'
            },{
              id: '38face2',
              nome:'face2',
              estado: 'white'
            },{
              id: '38face3',
              nome:'face3',
              estado: 'white'
            },{
              id: '38face4',
              nome:'face4',
              estado: 'white'
            },{
              id: '38face5',
              nome:'face5',
              estado: 'white'
            }
          ]
        } ],
        infantil: ''
      }
    }
  }




  render() {
    return (
      <div className="container">
        <header>
          <h3>Ready to start programming the OdontogramaJS.</h3>
        </header>

        <main>
          {this.state.arcada.adulto.map((item) => {
            return <Tooth key={item.id} data={item}/>
          })}
        </main>
        
      </div>
    );
  }
}

export default App;
