import React from 'react';
import FunctionalTextComponent from './FunctionalTextComponent';


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {counter : "0"};

  //A function to increment the counter every time a button is clicked
  incrementCounter = () => {
      this.setState({counter:parseInt(this.state.counter)+1});
  }
  //override the render method
  render() {
      return <div>
        {this.props.name}
        <br/>
        <button onClick={this.incrementCounter}>Click Me!</button>
        <br/>
        <span style={{fontSize:25}}>
        {this.state.counter}
        </span>
        <FunctionalTextComponent color="green" size="25" textvalue="User-defined functional Component"></FunctionalTextComponent>
        </div>
  }
}
export default App;
