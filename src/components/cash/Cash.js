import React from 'react';

class Cash extends React.Component {
  render() {
    const { cash } = this.props
    return (
      <strong className="cash">${ cash }</strong>
    );
  }
}

Cash.propTypes = {
  cash: React.PropTypes.number.isRequired
}

export default Cash
