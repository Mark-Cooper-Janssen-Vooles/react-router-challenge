import React from 'react';

const SpecificPortfolioPage = (props) => {
  return (
    <div>
      You are currently viewing {props.match.params.id}
    </div>
  )
}

export default SpecificPortfolioPage;