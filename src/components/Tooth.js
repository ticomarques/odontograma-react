import React, { Component } from 'react'

export default class Tooth extends Component {
  constructor(props) {
    super(props)
    console.log("Dentro do componente dente", props)
  }

  setTooth = (face) => {
    console.log(face)
  }

  render(props) {
    return (
      <div className={this.props.data.css ? `boxTooth ${this.props.data.css}` : 'boxTooth'}>
        <button className="removeButton">-</button>
        <button className="addButton">+</button>
        <small style={{textAlign: "center", display: "block"}}>{this.props.data.id}</small> 

        <svg width="29" height="34"  id={this.props.data.id} className="tooth">

          <polygon 
            stroke="blue" 
            points="1.0136711597442627,1.35626420378685 7.767158031463623,9.155386298894882 21.696229934692383,9.155386298894882 28.449718475341797,1.35626420378685 " 
            id={this.props.data.faces[0].id} 
            fill={this.props.data.faces[0].estado}
            onClick={this.setTooth}
            className="face"
          />

          <polygon 
            stroke="blue" 
            points="21.445681169629097,9.104242324829102 21.445681169629097,25.189937591552734 28.19916971027851,32.98905944824219 28.41021592915058,0.8176754713058472 " 
            id={this.props.data.faces[1].id} 
            fill={this.props.data.faces[1].estado}
            className="face"
          />
          
          <polygon 
            stroke="blue" 
            points="21.445680618286133,25.29296439886093 28.199169158935547,33.092128217220306 0.7631232142448425,33.092128217220306 7.516610622406006,25.29296439886093 " 
            id={this.props.data.faces[2].id}
            fill={this.props.data.faces[2].estado}
            className="face"
          />
          
          <polygon 
            stroke="blue" 
            points="0.7631232291460037,1.3051201105117798 0.7631232291460037,33.232784271240234 7.516610696911812,25.189937591552734 7.516610696911812,25.189937591552734 7.516610696911812,9.104242324829102 " 
            id={this.props.data.faces[3].id} 
            fill={this.props.data.faces[3].estado}
            className="face"
          />
          <polygon 
            stroke="blue" 
            points="7.516610696911812,9.104242324829102 21.445681169629097,9.104242324829102 21.445681169629097,25.189937591552734 7.516610696911812,25.189937591552734 " 
            id={this.props.data.faces[4].id} 
            fill={this.props.data.faces[4].estado}
            className="face"
          />
          
        </svg>
      </div>
    )
  }
}
