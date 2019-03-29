import React, { Component } from 'react'

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default class Toolbar extends Component {

    handleAction = (cor, nome) => {
        console.log(cor)
        console.log(nome)
    } 

    render(props) {     
        return (
            <div className="box-toolbar clear">
            {this.props.toolbar.opcoes.map((item)=>{
                let cor = item.cor
                let nome = item.nome

                return <AwesomeButton 
                            type="primary" 
                            key={item.nome} 
                            className="bt-toolbar"
                            onPress={() => this.handleAction(cor, nome)}
                        >
                            {item.nome}
                        </AwesomeButton>
            })}
            </div>
        )
    }
}
