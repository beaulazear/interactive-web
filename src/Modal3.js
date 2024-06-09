import React from 'react';

function Modal3({ closeModal }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Web Development</h2>
                <p>Here is some detailed information about web development.</p>
                <button onClick={closeModal(3)}>Go Back</button>
            </div>
        </div>
    );
}

export default Modal3;
