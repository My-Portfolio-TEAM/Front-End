import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import PropTypes from 'prop-types';

export default function EditSkillsProfileModal({ openModal, setOpenModal, skills }) {
  const [category, setCategory] = useState(skills.category);

  return (
    <section>
      <Modal
        show={openModal}
        position="center"
        className="font-medium bg-black bg-opacity-20"
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="bg-eerieBlack">
          <span className="text-textPrimary">Add Skill</span>
        </Modal.Header>
        <Modal.Body className="bg-eerieBlack border-y border-[#000000]">
          <div className="p-6 space-y-6 bg-eerieBlack">
            <div>
              <div className="mb-2 blocks">
                <Label className="text-textPrimary" htmlFor="headline" value="Skill" />
              </div>
              <TextInput
                id="headline"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              color=""
              size="sm"
              className="w-20 mt-5 rounded-full bg-ufoGreen bg-opacity-80 text-textPrimary hover:bg-opacity-70"
              onClick={() => setOpenModal(false)}
            >
              Save
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

EditSkillsProfileModal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  skills: PropTypes.string
};
