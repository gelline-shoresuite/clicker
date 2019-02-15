import React, {Component} from 'react';

import './Clicker.css';

class Clicker extends Component{
  constructor(props){
    super(props);

    this.state ={
      amountClicked: 100000000,

      minusData: 10,
      addData: 0,

      addToMinus: 1000,

      clickData: 1,
      minusClickData: 1000,

      timeData: 3000,
      minusTimeData: 5000,

      clickerClicked: false,
    };

  }
  


  handleAutoAmount =() =>{
    const {amountClicked, minusData, addData, addToMinus} = this.state;

    if(amountClicked >= minusData){
      const currentAmount = amountClicked - minusData;

      this.setState({
        amountClicked: currentAmount,
      });

      if(addData < 1){
        this.setState({
          minusData: 100,
          addData: addData + 1,
        });
      }else{
        this.setState({
          minusData: minusData + 100 * addData,
          addData: addData + 5,
          AddToMinus: addToMinus * addData,
        });
      }
      

      this.autoAdd();
    }
    
  }

  autoAdd =() =>{
    setInterval(this.pleaseAdd, this.state.timeData);
  }

  pleaseAdd =() =>{
    const {amountClicked, addData} = this.state;
    const addThem = amountClicked + addData;

    this.setState({
      amountClicked: addThem,

    })

  }

  handleCircleClicked = () =>{
    const {amountClicked, clickData} = this.state;

    this.setState({
      amountClicked: amountClicked + clickData,
      clickerClicked: true,
    });
  }

  handleCircleMouseUp =() =>{
    this.setState({
      clickerClicked: false,
    })
  }

  handleAddClick =() =>{
    const {amountClicked, minusClickData, clickData} = this.state;

    if(amountClicked > minusClickData){
      this.setState({
        amountClicked: amountClicked - minusClickData,
        clickData: clickData + 1,
        minusClickData: minusClickData + 6000,
      });
    }
    
  }

  handleMinusTime =() =>{
    const {amountClicked, minusTimeData, timeData, addData} = this.state;

    if(amountClicked > minusTimeData){

      if(timeData >= 400){
        this.setState({
          amountClicked: amountClicked - minusTimeData,
          timeData: timeData - 300,
        })
        if(addData <= 1){
          this.setState({
            minusTimeData: minusTimeData + 1000,
          });
        }else{
          this.setState({
            minusTimeData: minusTimeData + (1000 * addData),
         });
        }

      }else{
        this.setState({
          timeData: 100,
        });

      }
      
    }

  }

  render(){
    
    return(
      <div className="container">

        <div className="clickerContainer">
          <div className="amountContainer">
            <span className={(this.state.clickerClicked? 'active' : ' ')}>{this.state.amountClicked}</span>
          </div>

          <button className={'clicker ' + (this.state.clickerClicked? 'active' : ' ')} onMouseUp={this.handleCircleMouseUp} onMouseDown={this.handleCircleClicked}>{this.props.testImage}</button> 
        </div>

        <div className="autoContainer">
          <p>
            <button className="autoAdd" onClick={this.handleAutoAmount}> {this.state.minusData} points for {(this.state.addData) + 1} auto Click</button>
          </p>
          <p>
            <button className="autoAdd" onClick={this.handleMinusTime}> {this.state.minusTimeData} points to lessen Auto time </button> 
            &nbsp;
            Currently: {(this.state.timeData / 1000)}
          </p>
          <p>
            <button className="autoAdd" onClick={this.handleAddClick}> {this.state.minusClickData} points for +1 Points per Click</button> 
            &nbsp; 
            Currently: {this.state.clickData}
          </p>
        </div>

      </div>

    );

  }
}

export default Clicker;