import React from 'react';

class Button extends React.Component{

  render(){
    const { text, clickHandler, disabled } = this.props
    return(
      <button
        disabled={disabled}
        onClick={clickHandler}>
        {text}
      </button>
    )
  }
}

Button.propTypes = {
  text: React.PropTypes.string.isRequired,
  clickHandler: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.bool
}
export default Button;
