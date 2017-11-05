import React from 'react';
import ReactDOM from 'react-dom';

class Memo extends React.Component {
  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
    this.show = this.show.bind(this);
    this.state = {qty: 0};
  }

  edit() {
    this.setState({qty: this.state.qty + 1});
  }

  show() {
    this.props.handleShow(this.props.title);
  }

  render(){
    return (
      <section>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <button onClick= {this.edit}>Edit memo</button>
        <button onClick={this.show}>Show</button>
        <h3>Qty: {this.state.qty} memo(s).</h3>
      </section>
    );
  }
}

export default Memo;
