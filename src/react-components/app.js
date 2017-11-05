import React from 'react';
import ReactDOM from 'react-dom';
import MemoList from './MemoList'

class App extends React.Component {

  render(){
    return (
      <section>
        <h1>Memo Board</h1>
        <MemoList/>
      </section>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
