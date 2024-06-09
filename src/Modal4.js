import React from 'react';

function Modal4({ closeModal }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Resume</h2>
                <p>Here is some detailed information about my resume.</p>
                <button onClick={closeModal(4)}>Go Back</button>
            </div>
        </div>
    );
}

export default Modal4;
