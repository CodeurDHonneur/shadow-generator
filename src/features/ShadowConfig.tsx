import React from 'react'
import Button from '../components/Button'
import Range from '../components/Range';
import InputColor from '../components/InputColor';
import type { Shadow } from '../types/shadowType';

type ShadowConfigProps = {
    removeShadowConfig: (index: number) => void;
    updateShadow: (value: Shadow, index: number) => void;
    index: number;
};

export default function ShadowConfig({ updateShadow, index, removeShadowConfig}: ShadowConfigProps) {

    const [checked, setInputChecked] = React.useState(false);

    const [shadowModel, setShadowModel] = React.useState<Shadow>({
        x: 0,
        y: 0,
        blur: 0,
        spread: 0,
        color: "#000000",
        inset: false
    });

    const styleButton = {
        padding: "10px",
        color: "white",
        border: '1px solid white',
        backgroundColor: '#b52c2c',
        borderRadius: '10px',
    }

    const defaultStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const valuesConfigRange = [
        { id: 0, title: 'Horizontal offset', code: 'x', max: 200, min: -200, defaultValue: 0 },
        { id: 1, title: 'Vertical offset', code: 'y', max: 200, min: -200, defaultValue: 0 },
        { id: 2, title: 'Blur radius', code: 'blur', max: 200, min: -200, defaultValue: 0 },
        { id: 3, title: 'Spread offset', code: 'spread', max: 200, min: -200, defaultValue: 0 },
    ];

    const onChange = (code: string, value: string) => {
        const recupValue = {
            ...shadowModel,
            [code]: value
        }
        setShadowModel(recupValue);
    };

    React.useEffect(() => {
        const recupValue = {
            ...shadowModel,
            inset: checked
        }
        setShadowModel(recupValue);
    }, [checked]);


    React.useEffect(() => {
        updateShadow(shadowModel, index);
    }, [shadowModel]);

    return (
        <div>
            {/* configuration */}
            <div style={defaultStyle}>
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center'
                }}>
                    <label htmlFor="">
                        <input
                            type="checkbox"
                            checked
                            onChange={() => console.log("active")}
                        />
                        Active
                    </label>
                    <label htmlFor="">
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setInputChecked(!checked)}
                        />
                        Inset
                    </label>
                </div>
                <Button
                    title="Remove"
                    styles={styleButton}
                    onClick={() => removeShadowConfig(index)}
                />
            </div>

            <div>
                {valuesConfigRange.map(value => (
                    <div
                        key={value.id}
                        style={{
                            marginBlock: "20px"
                        }}>
                        <Range
                            title={value.title}
                            code={value.code}
                            max={value.max}
                            min={value.min}
                            defaultValue={value.defaultValue}
                            onChange={onChange}
                        />
                    </div>
                ))}
            </div>
            <InputColor
                onChange={onChange}
                colorValue={shadowModel.color}
                title="Color"
            />
        </div>
    )
}
