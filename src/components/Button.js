import React from 'react';

class Button extends React.Component{

  render(){
    const { text, clickHandler } = this.props
    return(
      <button onClick={clickHandler}>
        {text}
      </button>
    )
  }
}

Button.propTypes = {
  text: React.PropTypes.string.isRequired,
  clickHandler: React.PropTypes.func.isRequired
}

export default Button;
