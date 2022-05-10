import React from 'react'

export default class Form extends React.Component {

  constructor(){
    super();
    this.state ={
      inputText:"",
    }
  }
  handleChange= e =>{
    this.setState ({
     inputText: e.target.value
    })
  };

  handleSubmit = e =>{
    e.preventDefault()
    this.props.addItem(e,this.state.inputText)
  }


  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input
          type ="text"
          name ="todo"
          value={this.state.inputText}
          onChange={this.handleChange}
          />
          <button > Add Todo</button>
        </form>
      </div>
    )
  }
}