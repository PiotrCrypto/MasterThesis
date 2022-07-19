import React from 'react';
import { RiSave3Fill } from "react-icons/ri"
import { AiFillDelete } from "react-icons/ai"

const LoadAndSave = () => {
    return (
        <div>
            <button>
                <RiSave3Fill />
            </button>
            <button>
                <AiFillDelete />
            </button>

        </div>
    );
}

export default LoadAndSave;