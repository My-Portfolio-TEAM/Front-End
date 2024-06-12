import React from 'react';
import PropTypes from 'prop-types';
import PortfolioInput from '../Input/PortfolioInput';

export default function PortfolioInputModal({ id, image, name, role, closeModal }) {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-70">
      <div>
        <PortfolioInput id={id} image={image} name={name} role={role} closeModal={closeModal} />
      </div>
    </div>
  );
}

PortfolioInputModal.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
};
