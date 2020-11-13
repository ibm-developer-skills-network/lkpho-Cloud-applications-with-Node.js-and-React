import React from 'react';

class AppInner extends React.Component {
  sendData = () => {
    this.props.parentCallback("Child Component");
  }

  render() { 
    //Any time you wish to send data from child to parent component, call the sendData function.
    this.sendData();
    return <div>Child</div>
    this.sendData();
    
  }
}


class App extends React.Component {
  state = { message: "" }

  func1 = (childData) => {
        this.setState({message: childData})
  }
  
   render() {
          return (
              <div>
                   <AppInner parentCallback = {this.func1}/>
                   <p> {this.state.message} </p>
              </div>
          );
  }
}
  export default App;
