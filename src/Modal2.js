import React from 'react';

function Modal2({ closeModal }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Animal Care</h2>
                <p>Here is some detailed information about animal care.</p>
                <button onClick={closeModal}>Go Back</button>
            </div>
        </div>
    );
}

export default Modal2;
