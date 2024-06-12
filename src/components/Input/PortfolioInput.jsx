import React, { useEffect, useRef, useState } from 'react';
import { Button, FileInput } from 'flowbite-react';
import { IoAlertCircleSharp, IoClose } from 'react-icons/io5';
import PropTypes from 'prop-types';

export default function PortfolioInput({ closeModal: closeParentModal, id, image, name, role }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState('');
  const [titleNotification, setTitleNotification] = useState('');
  const [contentNotification, setContentNotification] = useState('');
  const [fileNotification, setFileNotification] = useState('');
  const [modalStatus, setModalStatus] = useState('open');

  const titleRef = useRef(null);

  const closeModal = () => {
    setModalStatus('closing');
  };

  const onTitleChangeHandler = (e) => {
    const newTitle = e.target.innerText;
    setTitle(newTitle);
    if (newTitle.trim() !== '') {
      setTitleNotification('');
    } else {
      setTitleNotification('Title must not be empty or space');
    }
  };

  const onContentChangeHandler = (e) => {
    const newContent = e.target.innerText;
    setContent(newContent);

    if (newContent.trim() !== '') {
      setContentNotification('');
    } else {
      setContentNotification('Content must not be empty or space');
    }
  };

  const onFileChangeHandler = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    if (newFile) {
      setFileNotification('');
    } else {
      setFileNotification('Please upload an image');
    }
  };

  const onShareClickHandler = () => {
    const fileTypes = ['image/jpeg', 'image/png', 'image/jpg'];

    if (title.trim() === '' && content.trim() === '') {
      setTitleNotification('Title must not be empty or space');
      setContentNotification('Content must not be empty or space');
    } else if (!file) {
      setFileNotification('Please upload an image');
    } else if (!fileTypes.includes(file.type)) {
      setFileNotification('Only JPG, JPEG, and PNG files are allowed');
    } else {
      setModalStatus('closing');
    }
  };

  useEffect(() => {
    if (modalStatus === 'closing') {
      setTimeout(() => {
        closeModal();
        closeParentModal();
      }, 500);
    }
  }, [modalStatus, closeModal, closeParentModal]);

  useEffect(() => {
    if (modalStatus === 'open' && titleRef.current) {
      titleRef.current.focus();
    }
  }, [modalStatus]);

  return (
    <section
      className={`w-full h-full sm:w-[40rem] mx-auto sm:my-16 rounded-xl text-textPrimary bg-eerieBlack animate__animated ${
        modalStatus === 'open'
          ? 'animate__fadeInDown animate__faster'
          : 'animate__fadeOutUp animate__faster'
      }`}
    >
      <div className="p-5">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <img src={image} alt="img post" className="object-cover w-10 h-10 rounded-full" />
            <div>
              <p className="text-base font-medium text-textPrimary">{name}</p>
              <p className="text-[10px] font-medium text-textSecondary">{role}</p>
            </div>
          </div>
          <button
            type="button"
            className="p-1 text-2xl transition-all duration-200 ease-out rounded-full cursor-pointer hover:bg-fernGreen"
            onClick={closeModal}
            onKeyDown={() => {}}
            tabIndex={0}
            aria-label="Close"
          >
            <IoClose className="text-xl text-textSecondary" />
          </button>
        </div>
        <div className="flex flex-col gap-2 my-5">
          <div>
            <div
              ref={titleRef}
              className="h-12 p-3 px-5 overflow-auto border-none rounded-lg outline-none bg-searchInput"
              contentEditable
              onInput={onTitleChangeHandler}
              data-placeholder="title..."
            />
            {titleNotification && (
              <div className="flex gap-1 mt-1">
                <IoAlertCircleSharp className="text-sm text-red-500" />
                <p className="text-xs font-medium text-red-400 ">{titleNotification}</p>
              </div>
            )}
          </div>
          <div>
            <div
              className="p-5 overflow-auto border-none rounded-lg outline-none h-52 bg-searchInput"
              contentEditable
              onInput={onContentChangeHandler}
              data-placeholder="description..."
            />
            {contentNotification && (
              <div className="flex gap-1 mt-1">
                <IoAlertCircleSharp className="text-sm text-red-500" />
                <p className="text-xs font-medium text-red-400 ">{contentNotification}</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <div>
            <FileInput
              color="success"
              id="image-upload"
              onChange={onFileChangeHandler}
              className="bg-searchInput"
            />
            <p className="mt-2 text-xs font-medium text-[#A9A9A9]">PNG, JPG, or JPEG</p>
            {fileNotification && (
              <div className="flex w-full gap-1 mt-1">
                <IoAlertCircleSharp className="text-sm text-red-500" />
                <p className="text-xs font-medium text-red-400 ">{fileNotification}</p>
              </div>
            )}
          </div>
        </div>
        <Button
          type="button"
          fullSized
          color=""
          onClick={onShareClickHandler}
          className="font-semibold bg-fernGreen active:outline-none active:ring-none hover:bg-opacity-80"
        >
          Post
        </Button>
      </div>
    </section>
  );
}

PortfolioInput.propTypes = {
  closeModal: PropTypes.func,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};
