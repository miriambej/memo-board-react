import React from 'react';
import ReactDOM from 'react-dom';

class MemoCreate extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    // alert("Title:" + this.refs.title.value + this.refs.description.value);

    let memo = {
      title: this.refs.title.value,
      price: this.refs.description.value
    }

    this.props.handleCreate(memo);
    this.refs.title.value = "";
    this.refs.description.value = "";
  }
  render () {
    return (
      <form onSubmit = {this.submit}>
        <input type="text" placeholder="Memo title" ref="title"/> -
        <input type="text" placeholder="Memo description" ref="description"/>
        <br/><br/>
        <button>Create Memo</button>
        <hr/>
      </form>
    );
  }
}

export default MemoCreate;
