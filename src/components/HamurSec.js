import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

import "./HamurSec.css"

function HamurSec({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
    <div className='hamur-sec'>
      <h5>Hamur Seç <span class="red-star">*</span></h5>
      <select>
        <option value="ince-hamur">İnce</option>
        <option value="kalin-hamur">Kalın</option>
      </select>
    </div>
    
    </>
  );
}

HamurSec.propTypes = {
  direction: PropTypes.string,
};

export default HamurSec;