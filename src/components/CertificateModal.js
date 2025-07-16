// CertificateModal.js
import React, { useEffect } from 'react';
import { modalUtils } from './modalUtils';

const CertificateModal = ({ selectedCertificate, onClose }) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      modalUtils.handleEscapeKey(event, onClose);
    };

    if (selectedCertificate) {
      document.addEventListener('keydown', handleEscape);
      modalUtils.disableBodyScroll();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      modalUtils.enableBodyScroll();
    };
  }, [selectedCertificate, onClose]);

  if (!selectedCertificate) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={(e) => modalUtils.handleOverlayClick(e, onClose)}
    >
      <div 
        className="modal-content" 
        onClick={modalUtils.handleContentClick}
      >
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="modal-header">
          <h3>{selectedCertificate.title}</h3>
          <span className="modal-badge">{selectedCertificate.achievement}</span>
        </div>
        
        <div className="modal-image-container">
          <img 
            src={selectedCertificate.certificate}
            alt={`${selectedCertificate.title} Certificate`}
            className="modal-image"
          />
        </div>
        
        <div className="modal-footer">
          <p>{selectedCertificate.description}</p>
          {selectedCertificate.location && (
            <span className="modal-location">
              <i className="fas fa-map-marker-alt"></i>
              {selectedCertificate.location}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;