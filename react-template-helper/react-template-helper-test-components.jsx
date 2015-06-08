EmptyReactComponent = React.createClass({
  render() {
    return <div></div>
  }
});

TextReactComponent = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render() {
    return <div>{this.props.text}</div>
  }
});

ClickableReactComponent = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired
  },
  render() {
    return <div className="click-me" onClick={this.props.onClick}></div>;
  }
});

