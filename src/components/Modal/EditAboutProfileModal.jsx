import React from 'react';
import { Button, FileInput, Label, Modal, TextInput } from 'flowbite-react';
import PropTypes from 'prop-types';

export default function EditAboutProfileModal({ openModal, setOpenModal }) {
  return (
    <section>
      <Modal
        show={openModal}
        position="center"
        className="font-medium bg-black bg-opacity-80"
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="bg-eerieBlack">
          <span className="text-textPrimary">Edit About</span>
        </Modal.Header>
        <Modal.Body className="bg-eerieBlack border-y border-[#000000]">
          <div className="p-6 space-y-6 bg-eerieBlack">
            <div>
              <div className="mb-2 blocks">
                <Label className="text-textPrimary" htmlFor="photo" value="Your Photo" />
              </div>
              <FileInput id="photo" onChange={(e) => handleFileChange(e)} />
            </div>
            <div>
              <div className="mb-2 blocks">
                <Label className="text-textPrimary" htmlFor="name" value="Description" />
              </div>
              <div
                contentEditable
                id="name"
                type="text"
                //value={description}
                className="overflow-auto rounded-lg h-36"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 blocks">
                <Label className="text-textPrimary" htmlFor="role" value="URL LinkedIn" />
              </div>
              <TextInput
                id="role"
                type="text"
                //value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 blocks">
                <Label className="text-textPrimary" htmlFor="headline" value="URL Github" />
              </div>
              <TextInput
                id="headline"
                type="text"
                //value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-end bg-eerieBlack">
          <Button
            color=""
            size="sm"
            className="w-20 rounded-full bg-ufoGreen bg-opacity-80 text-textPrimary hover:bg-opacity-70"
            onClick={() => setOpenModal(false)}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

EditAboutProfileModal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func
};
