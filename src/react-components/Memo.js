import React from 'react';
import ReactDOM from 'react-dom';

class Memo extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.state = {qty: 0};
  }

  create() {
    this.setState({qty: this.state.qty + 1});
  }

  render(){
    return (
      <section>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <button onClick= {this.create}>Edit memo</button>
        <h3>Qty: {this.state.qty} memo(s).</h3>
      </section>
    );
  }
}

export default Memo;
