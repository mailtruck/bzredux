import React from 'react';
import decimalRounder from '../../utils/decimalRounder'

class Cash extends React.Component {
  render() {
    const { cash } = this.props
    return (
      <strong className="cash">${ decimalRounder(cash) }</strong>
    );
  }
}

Cash.propTypes = {
  cash: React.PropTypes.number.isRequired
}

export default Cash
