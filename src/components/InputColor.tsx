import React from 'react'

type InputColorPropos = {
  title: string;
  colorValue: string;
  onChange: (code: string, value: string) => void;
}

export default function InputColor({ title, colorValue, onChange}: InputColorPropos) {


  return (
    <div>
      <h4>{title}</h4>
      <div style={{
        display: 'flex',

      }}>
        <div style={{
          width: '90%',
          border: '1px solid rgb(178, 173, 173)',
          padding: "5px 0px 0px 10px",
        }}>
          {colorValue}
        </div>
        <input
        style={{
          border: "none",
        }}
          type="color"
          value={colorValue}
          onChange={(e) => onChange('color', e.target.value)}
        />

      </div>
    </div>
  )
}
