import React from 'react';
import styles from "../styles/RangeComponent.module.css";

type RangeComponentProps = {
    title: string;  
    code: string;  
    onChange: (code: string, value: string) => void;
}

export default function RangeComponent({ title, code, onChange }: RangeComponentProps) {
    const [valueInput, setValueInput] = React.useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValueInput(Number(value));
        onChange(code, value);
    };

    return (
        <>
            <div className={styles.description}>
                <h4>{title}</h4>
                <div className={styles.descriptionChild}>
                    <div style={{
                        padding: "5px",
                        border: "3px solid #f2f4f5",
                        backgroundColor: "white",
                        fontSize: "20px",
                        width: "55px",
                        textAlign: "center"
                    }}>{valueInput}</div>
                    <div style={{
                        fontSize: "1.3rem"
                    }}>px</div>
                </div>
            </div>

            <div className={styles.containerInputRange}>
                <input
                    list="tickmarks"
                    value={valueInput}
                    onChange={(e) => handleChange(e)}
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
