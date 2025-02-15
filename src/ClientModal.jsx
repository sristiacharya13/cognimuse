import React from 'react';

const ClientModal = ({ isOpen, onClose, client }) => {
    if (!isOpen || !client) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white text-black p-8 rounded-lg max-w-md w-full">
                <button onClick={onClose} className="absolute top-2 right-2">
                    Close
                </button>
                <img src={client.clientImage} alt={client.name} className="w-24 h-24 object-cover rounded-full mx-auto" />
                <h2 className="text-xl font-bold mt-4 text-center">{client.name}</h2>
                <p className="text-center">{client.designation} at {client.company}</p>
                <p className="mt-4">{client.review}</p>
            </div>
        </div>
    );
};

export default ClientModal;
