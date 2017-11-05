import React from 'react';
import ReactDOM from 'react-dom';
import Memo from './Memo';

class MemoList extends React.Component {
  render () {
    return (
      <div>
        <Memo title="title 1" description="description 1"/>
        <Memo title="title 2" description="description 2"/>
        <Memo title="title 3" description="description 3"/>
        <Memo title="title 4" description="description 4"/>
      </div>

    );
  }
}

export default MemoList;
