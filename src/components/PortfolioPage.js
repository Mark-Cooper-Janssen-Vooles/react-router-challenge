import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  return (
    <div>
      Welcome to the portfolio page. 
      <br></br>
      <Link to="/portfolio/1">Work 1</Link>
      <br></br>
      <Link to="/portfolio/2">Work 2</Link>
    </div>
  )
}

export default PortfolioPage;