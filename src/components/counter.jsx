import React,{Component} from 'react'


export default class Counter extends Component{
  // componentDidMount(){
  //   console.log(this.props.store);
  // }
  
  increment = ()=>{
    
    let {value} = this.refs.selectNumber
    //this.props.dispatch(createIncrementAction(value*1))
    this.props.increment(value*1)
  }
  decrement = ()=>{
    
    let {value} = this.refs.selectNumber
    //this.props.store.dispatch(createDecrementAction(value*1))
    this.props.decrement(value*1)
  }
  incrementOfOdd = ()=>{
    
    let {value} = this.refs.selectNumber
    let {count} = this.props
    if (count%2 === 1) {
      this.props.increment(value*1)
    }
  }
  incrementAsync = ()=>{
    
    let {value} = this.refs.selectNumber
    this.props.incrementAsync(value*1,1000)
   
    // setTimeout(() => {
    //   this.props.increment(value*1)
    // }, 1000);
  }

  render(){
    //let count = this.props.store.getState()
    return (
      <div>
        <h3>当前计数为{this.props.count}</h3>
        <select ref="selectNumber">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementOfOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}