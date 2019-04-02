import React, { Component } from 'react'

export default class Tooth extends Component {
  
  render(props) {
    return (
      <div className={this.props.data.css ? `boxTooth ${this.props.data.css}` : 'boxTooth'}>
        {this.props.data.status ? 
        <button className="removeButton" onClick={() => this.props.toggleTooth(this.props.data)}>-</button>
        :
        <button className="addButton" onClick={() => this.props.toggleTooth(this.props.data)}>+</button>
        }
        
        <small style={{textAlign: "center", display: "block", clear: "both"}}>{this.props.data.id}</small> 

        <svg width="29" height="34"  id={this.props.data.id} className={this.props.data.status ? 'tooth' : 'tooth disabled' } >

          <polygon 
            stroke="blue" 
            points="1.0136711597442627,1.35626420378685 7.767158031463623,9.155386298894882 21.696229934692383,9.155386298894882 28.449718475341797,1.35626420378685 " 
            id={this.props.data.faces[0].id} 
            fill={this.props.data.faces[0].estado}
            onClick={() => this.props.setFace(this.props.data.faces[0].id, 0, this.props.data)}
            className="face"
          />

          <polygon 
            stroke="blue" 
            points="21.445681169629097,9.104242324829102 21.445681169629097,25.189937591552734 28.19916971027851,32.98905944824219 28.41021592915058,0.8176754713058472 " 
            id={this.props.data.faces[1].id} 
            fill={this.props.data.faces[1].estado}
            onClick={() => this.props.setFace(this.props.data.faces[1].id, 1, this.props.data)}
            className="face"
          />
          
          <polygon 
            stroke="blue" 
            points="21.445680618286133,25.29296439886093 28.199169158935547,33.092128217220306 0.7631232142448425,33.092128217220306 7.516610622406006,25.29296439886093 " 
            id={this.props.data.faces[2].id}
            fill={this.props.data.faces[2].estado}
            onClick={() => this.props.setFace(this.props.data.faces[2].id, 2, this.props.data)}
            className="face"
          />
          
          <polygon 
            stroke="blue" 
            points="0.7631232291460037,1.3051201105117798 0.7631232291460037,33.232784271240234 7.516610696911812,25.189937591552734 7.516610696911812,25.189937591552734 7.516610696911812,9.104242324829102 " 
            id={this.props.data.faces[3].id} 
            fill={this.props.data.faces[3].estado}
            onClick={() => this.props.setFace(this.props.data.faces[3].id, 3, this.props.data)}
            className="face"
          />
          <polygon 
            stroke="blue" 
            points="7.516610696911812,9.104242324829102 21.445681169629097,9.104242324829102 21.445681169629097,25.189937591552734 7.516610696911812,25.189937591552734 " 
            id={this.props.data.faces[4].id} 
            fill={this.props.data.faces[4].estado}
            onClick={() => this.props.setFace(this.props.data.faces[4].id, 4, this.props.data)}
            className="face"
          />
          
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={!this.props.data.status ? 'tooth' : 'tooth disabled' }>
          <path fill="red" d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
        </svg>

      </div>
    )
  }
}
