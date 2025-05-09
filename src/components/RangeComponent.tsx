import React from 'react';
import styles from "../styles/RangeComponent.module.css";


export default function RangeComponent() {
    const [valueInput, setValueInput] = React.useState(0)

    return (
        <>
            <div>
                <div className={styles.description}>
                    <h3>title</h3>
                    <div>
                        <p style={{
                            padding: "5px",
                            border: "3px solid #f2f4f5",
                            backgroundColor: "white",
                            fontSize: "20px",
                            width: "30px"
                        }}>{valueInput}</p>
                        <p>unité</p>
                    </div>
                </div>
            </div>
            <div className={styles.containerInputRange}>
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
                        background: "#f2f4f5",
                        zIndex: 1,
                        position: "relative",
                    }}
                />
                <div className={styles.rangeCenterMarker}></div>
            </div>


        </>
    )
}
