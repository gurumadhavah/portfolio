// modalUtils.js
// Utility functions for modal management

export const modalUtils = {
  // Handle escape key press to close modal
  handleEscapeKey: (event, closeModal) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  },

  // Prevent body scroll when modal is open
  disableBodyScroll: () => {
    document.body.style.overflow = 'hidden';
  },

  // Re-enable body scroll when modal is closed
  enableBodyScroll: () => {
    document.body.style.overflow = 'unset';
  },

  // Handle modal opening
  openModal: (achievement, setSelectedCertificate) => {
    setSelectedCertificate(achievement);
    modalUtils.disableBodyScroll();
    
    // Add escape key listener
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        modalUtils.closeModal(setSelectedCertificate);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    
    // Store the escape handler for cleanup
    return handleEscape;
  },

  // Handle modal closing
  closeModal: (setSelectedCertificate, escapeHandler = null) => {
    setSelectedCertificate(null);
    modalUtils.enableBodyScroll();
    
    // Remove escape key listener if provided
    if (escapeHandler) {
      document.removeEventListener('keydown', escapeHandler);
    }
  },

  // Handle click outside modal to close
  handleOverlayClick: (event, closeModal) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  },

  // Prevent modal content click from closing modal
  handleContentClick: (event) => {
    event.stopPropagation();
  }
};

// Hook for managing modal state and effects
export const useModal = (setSelectedCertificate) => {
  const openModal = (achievement) => {
    const escapeHandler = modalUtils.openModal(achievement, setSelectedCertificate);
    
    // Cleanup function
    return () => {
      modalUtils.closeModal(setSelectedCertificate, escapeHandler);
    };
  };

  const closeModal = () => {
    modalUtils.closeModal(setSelectedCertificate);
  };

  return { openModal, closeModal };
};