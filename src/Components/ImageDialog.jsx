import React, { useState } from "react";
import Loader from "./Loader";

export default function ImageDialog({ imageUrl, buttonText }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // State to track image loading

    const openDialog = () => setIsOpen(true);
    const closeDialog = () => {
        setIsOpen(false);
        setIsLoading(true); 
    };

    return (
        <div>
            {/* Button to open the dialog */}
            <button
                onClick={openDialog}
                className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
            >
                {buttonText || "Show Image"}
            </button>

            {/* Dialog */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
                        <h2 className="text-lg font-bold mb-4">User Avatar</h2>
                        {/* Show loader while the image is loading */}
                        {isLoading && <Loader />}
                        <img
                            src={imageUrl}
                            alt="User Avatar"
                            className={`w-full h-auto rounded-lg ${isLoading ? "hidden" : ""}`}
                            onLoad={() => setIsLoading(false)} // Set loading to false when the image loads
                        />
                        <button
                            onClick={closeDialog}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};