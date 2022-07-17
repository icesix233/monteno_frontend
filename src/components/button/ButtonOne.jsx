import React from 'react';
import { Link } from 'react-router-dom';

import './button.scss';

const ButtonOne = () => {
  return (
        <Link to='/' className="btn-action">
            Buy Now
        </Link>
  );
}

export default ButtonOne;