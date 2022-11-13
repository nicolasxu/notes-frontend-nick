// Most of the time, you can use React.PureComponent instead of writing your own shouldComponentUpdate
// https://reactjs.org/docs/optimizing-performance.html
// Pure component does the props and state compare automatically
//
//
//
// DO not use pure component if props or state contains non-primitive data

// BAD example. It will not update
class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({words: words});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} />
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}


// it can be fixed by this: arr.concat will return newly created a new array
handleClick() {
  this.setState(state => ({
    words: state.words.concat(['marklar'])
  }));
}

// or this:
handleClick() {
  this.setState(state => ({
    words: [...state.words, 'marklar'],
  }));
};