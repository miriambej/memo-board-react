import React from 'react';
import ReactDOM from 'react-dom';
import Memo from './Memo';
import MemoCreate from './MemoCreate';

class MemoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memoList: [
        {title: "Memo 1", description: "description 1"},
        {title: "Memo 2", description: "description 2"},
        {title: "Memo 3", description: "description 3"}
      ]
    };
    this.createMemo = this.createMemo.bind(this);
  }

  showMemo(title) {
    alert("You selected " + title);
  }

  createMemo(memo) {
    this.setState({
      memoList: this.state.memoList.concat(memo)
    });
  }

  render () {
    let component = this;
    let memos = this.state.memoList.map(function(memo) {
      return (
        <Memo title={memo.title} description={memo.description} handleShow={component.showMemo}/>
      )
    });

    return (
      <div>
        <MemoCreate handleCreate = {this.createMemo}/>
        {memos}
      </div>

    );
  }
}

export default MemoList;
