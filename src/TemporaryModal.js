import React from 'react';

const TemporaryModal = ({ image, closeModal }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Information about {image}</h2>
                {/* Add your content related to the selected image here */}
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default TemporaryModal;
