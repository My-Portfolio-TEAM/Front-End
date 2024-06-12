import React, { useState } from 'react';
import { Button, FileInput, Label, Modal, TextInput } from 'flowbite-react';
import PropTypes from 'prop-types';

export default function EditHeadProfileModal({ profile, openModal, setOpenModal }) {
  const [image, setImage] = useState(profile.image);
  const [name, setName] = useState(profile.name);
  const [role, setRole] = useState(profile.role);
  const [headline, setHeadline] = useState(profile.headline);
  const [location, setLocation] = useState(profile.location);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  return (
    <section>
      <Modal
        show={openModal}
        position="center"
        className="font-medium bg-black bg-opacity-70"
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="bg-eerieBlack">
          <span className="text-textPrimary">Edit Intro</span>
        </Modal.Header>
        <Modal.Body className="bg-eerieBlack">
          <div className="p-6 space-y-6 bg-eerieBlack">
            <div>
              <div className="mb-2 blocks">
                <Label className="text-textPrimary" htmlFor="photo" value="Your Photo" />
              </div>
              <FileInput id="photo" onChange={(e) => handleFileChange(e)} />
            </div>
            <div>
              <div className="mb-2 blocks">
                <Label className="text-textPrimary" htmlFor="name" value="Your Name" />
              </div>
              <TextInput
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 blocks">
                <Label className="text-textPrimary" htmlFor="role" value="Role" />
              </div>
              <TextInput
                id="role"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 blocks">
                <Label className="text-textPrimary" htmlFor="headline" value="Headline" />
              </div>
              <TextInput
                id="headline"
                type="text"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 blocks">
                <Label className="text-textPrimary" htmlFor="location" value="Location" />
              </div>
              <TextInput
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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

EditHeadProfileModal.propTypes = {
  profile: PropTypes.object,
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func
};
