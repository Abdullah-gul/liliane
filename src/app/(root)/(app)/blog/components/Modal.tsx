import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  content: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded bg-gray-900 bg-opacity-90 p-4">
        <button className="float-right text-gray-500 hover:text-gray-700" onClick={onClose}>
          &times;
        </button>
        <div className="mt-2">{content}</div>
      </div>
    </div>
  )
}

export default Modal
