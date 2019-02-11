import React, {Component} from 'react';

class Clicker extends Component{
  constructor(props){
    super(props);

    this.state ={
      amountClicked: 0,
      minusData: 10,
      addData: 0,
    };

  }

  handleMinusAmount =() =>{
    const {amountClicked, minusData, addData} = this.state;

    if(amountClicked >= minusData){
      const currentAmount = amountClicked - minusData;

      this.setState({
        amountClicked: currentAmount,
        addData: addData + 1,
        minusData: minusData + 10,
      });

      this.autoAdd();
    }
    
  }

  autoAdd =() =>{
    setInterval(this.pleaseAdd, 3000);
  }

  pleaseAdd =() =>{
    const {amountClicked, addData} = this.state;
    const addThem = amountClicked + addData;

    this.setState({
      amountClicked: addThem,
    })

  }

  handleCircleClicked = () =>{
    this.setState({
      amountClicked: this.state.amountClicked + 1,
    });
  }

  render(){
    
    return(
      <div>

        <div>
          <button onClick={this.handleCircleClicked}>Click me!</button> 
        </div>

        <p>
          Total: {this.state.amountClicked}
        </p>
       
        <div>
          <button onClick={this.handleMinusAmount}> -{(this.state.minusData.toString())} for {(this.state.addData + 1).toString()}</button>
        </div>
      </div>
    );

  }
}

export default Clicker;