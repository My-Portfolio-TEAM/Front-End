import React from 'react';
import WriteProgressInput from '../Input/WriteProgressInput';
import PropTypes from 'prop-types';

export default function WriteProgressInputModal({ id, image, name, role, closeModal }) {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-70">
      <div>
        <WriteProgressInput id={id} image={image} name={name} role={role} closeModal={closeModal} />
      </div>
    </div>
  );
}

WriteProgressInputModal.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
};
