"use client";
import React from 'react'
import { useState } from 'react';
import copy from 'clipboard-copy';
import { Clipboard,Check } from 'lucide-react';

export default function Command() {

    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = async () => {
        try {
            await copy('docker run -p 1111:1111 anuragdev123/tangerine-kv:latest');
            setIsCopied(true);
        } catch (error) {
            console.error('Failed to copy text to clipboard', error);
        }
    };
    return (
        <div>
            <button onClick={handleCopyClick} className=''>
            <div className="bg-gray-800 p-4 rounded-lg my-5">
                <div className="language-bash  flex overflow-x-wrap font-light font-mono justify-start items-center">
                    {">"}_ docker run -p 1111:1111 anuragdev123/tangerine-kv:latest
                    { isCopied ? <Check className="h-15 w-15 text-green-500 mx-2" /> : <Clipboard className="h-15 w-15 text-gray-400 mx-2" />}
                </div>
            </div>
            </button>
        </div>
    )
}
