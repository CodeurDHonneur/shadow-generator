import React from 'react'

type ButtonProps = {
    title: string;
    onClick: () => void;
    styles: React.CSSProperties;
}


export default function Button({ title, onClick, styles }: ButtonProps) {


    return (
        <button
            onClick={onClick}
            style={{
                ...styles,
                cursor: "pointer"
            }

            }
        >
            {title}
        </button>
    )
}
