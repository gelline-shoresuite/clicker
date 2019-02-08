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
      this.setState({
        amountClicked: amountClicked - minusData,
        addData: addData + 1,
        minusData: minusData + 10,
      }, this.autoAdd);
    }
    
  }

  autoAdd =() =>{
    const amountData = setInterval(this.pleaseAdd, 3000);

    this.setState({
      amountClicked: amountData,
    });
  }

  pleaseAdd =() =>{
    const {amountClicked, addData} = this.state;
    this.setState({
      amountClicked: amountClicked + addData,
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
        <button onClick={this.handleCircleClicked}>Click me!</button> 

        <div>
          <p>
            Total: {this.state.amountClicked}
          </p>
          <button onClick={this.handleMinusAmount}> -{(this.state.minusData.toString())} for {(this.state.addData + 1).toString()}</button>
        </div>
      </div>
    );
  }
}

export default Clicker;