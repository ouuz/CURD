import React from 'react';

  class Todo extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        value: '',
        List: []
      }
    }

    changeValue(e) {
      this.setState({
        value: e.target.value
      })
    }

    add(){
      let { List,value } = this.state;
      List.push(value);
      if(value){
        this.setState({
          List,
          value: ''
        })
      }
    }

    delete(index) {
      let { List } = this.state;
      List.splice(index,1);
      this.setState({
        List
      })
    }
    
    modify(index){
      let { List,value } = this.state;
    
      if(value){
        List[index] = value;
        this.setState({
        List,
        value: ''
      })
      }
    }

    render(){
      return (
        <div>
          <input type="text" id="text" value={this.state.value} onChange={(e) => {this.changeValue(e)}}/>
          <button onClick={() => {this.add()}}>add</button>
          <ul>
          {
            this.state.List.map((item,index) => 
            <li key={index}>
              {item}
              <button onClick={() => {this.delete(index)}}>delete</button>
              <button onClick={() => {this.modify(index)}}>modify</button>
            </li>
            )
          } 
          </ul>
        </div>
      )
    }
  }
  export default Todo