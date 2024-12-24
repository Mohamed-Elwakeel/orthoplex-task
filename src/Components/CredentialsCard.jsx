import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function CredentialsCard() {
    const [flipped, setFlipped] = useState(false);

    const testEmail = "eve.holt@reqres.in";
    const testPassword = "cityslicka";

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");
    };

    return (
        <div className="relative w-72 m-3 h-40 perspective-1000">
            {/* Card Container */}
            <div
                className={`absolute w-full h-full transition-transform duration-500 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''
                    }`}
            >
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-blue-400 rounded-2xl shadow-md flex flex-col items-center justify-center">
                    <h2 className="text-white text-xl mb-4">Need Test Credentials?</h2>
                    <button
                        onClick={handleFlip}
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                    >
                        Reveal
                    </button>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full bg-white rounded-2xl shadow-md flex flex-col items-center justify-center rotate-y-180 backface-hidden">
                    <p className="text-gray-800 text-md mb-2">
                        **Email**: {testEmail}{' '}
                        <button
                            onClick={() => handleCopy(testEmail)}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2 text-sm hover:bg-blue-200"
                        >
                            Copy
                        </button>
                    </p>
                    <p className="text-gray-800 text-md mb-4">
                        **Password**: {testPassword}{' '}
                        <button
                            onClick={() => handleCopy(testPassword)}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2 text-sm hover:bg-blue-200"
                        >
                            Copy
                        </button>
                    </p>
                    <button
                        onClick={handleFlip}
                        className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-300"
                    >
                        Hide
                    </button>
                </div>
            </div>
        </div>
    );
}