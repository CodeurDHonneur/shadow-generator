import React from 'react';
import styles from "../styles/Range.module.css";

type RangeProps = {
    title: string;  
    code: string;  
    onChange: (code: string, value: string) => void;
    max: number | string;
    min: number | string;
    defaultValue: number | string | undefined;
}

export default function Range({ defaultValue, title, code, onChange, max, min }: RangeProps) {
    const [valueInput, setValueInput] = React.useState(defaultValue);

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
                    max={max}
                    min={min}
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
