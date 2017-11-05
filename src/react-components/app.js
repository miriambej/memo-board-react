import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  }

  create() {
    alert("You created a memo!");
  }

  render(){
    return (
      <div>
        <h1>Memo Board</h1>
        <button onClick= {this.create}>Create memo</button>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
