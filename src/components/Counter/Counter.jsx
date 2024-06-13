import React from "react";

export default class Counter extends React.Component{
 constructor(){
  super()
  this.state = {counter: 0}
  console.log("Construindo a classe counter")
 }

 componentDidMount() {
    console.log("O componente foi montado");
    
  }
  
  componentDidUpdate() {
    console.log("O componente foi atualizado");
  }
  shouldComponentUpdate(){
    
    return true;
  }
  componentWillUnmount(){
    console.log("O componente vai desmontar")

   
  }
  
  render(){
    console.log("Renderizando o componente counter");
    return (
        
      <div>

        <h2>{this.state.counter}</h2>
       <button onClick={() => {
         this.setState({counter: this.state.counter + 1})
       } }> Aumentar
       </button>
       <button onClick={() => {
         this.setState({counter: this.state.aumentar - 1})
       }}>
        Diminuir
       </button>
      </div>
     
     );
  }
  
}