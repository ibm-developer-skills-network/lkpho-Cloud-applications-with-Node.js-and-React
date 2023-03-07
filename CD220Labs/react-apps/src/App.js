import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = { APIlist:[] }

  componentDidMount() {
    let url = "https://api.publicapis.org/entries?category=Animals";
    axios({
      method: 'get',
      url: url,
      responseType: 'json'
    }).then(resp => {
        let listOfEntries = resp.data.entries;
        let listOfEntriesAsArray = Object.entries(listOfEntries);
        let entryDetails = listOfEntriesAsArray.map((entryDetail)=>{
          return <li style={{color: "green"}}>{entryDetail[1]["API"]}
          ------- {entryDetail[1]["Link"]} </li>
        })
        this.setState({APIlist:<ul>{entryDetails}</ul>})
      })
    .catch(err => {
        console.log(err.toString())
    });
  }

  render() {
    const colorStyle = { color:this.props.color,fontSize:this.props.size+"px"}
    return (
      <div style={colorStyle}>
        <h2>APIs List</h2>
        <br/>

        <div>
            {
            this.state.APIlist
            }
        </div>
    </div>
    );
  }
}

export default App;