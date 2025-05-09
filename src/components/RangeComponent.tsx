import React from 'react'

export default function RangeComponent() {
    const [valueInput, setValueInput] = React.useState(0)

    return (
        <>
            <div>
                <h3>title</h3>
                <div>
                    <span style={{
                        padding: "5px",
                        border: "3px solid #f2f4f5",
                        backgroundColor: "white",
                        fontSize: "20px",
                    }}>{valueInput}</span>
                    <span>unité</span>
                </div>
            </div>
            <input
                list="tickmarks"
                value={valueInput}
                onChange={(e) => setValueInput(Number(e.target.value))}
                type="range"
                max="200"
                min="-200"
                style={{
                    width: "450px",
                    appearance: "none",
                    height: "5px",
                    background: "#f2f4f5"
                }}
            />

        </>
    )
}
