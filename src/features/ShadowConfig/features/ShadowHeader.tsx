import React from 'react'
import Button from '../../../components/Button'
import styles from '../styles/ShadowHeader.module.css'


export default function ShadowHeader() {
  return (
    <div className={styles.container}>
        <h2>Customize Shadows</h2>
        <Button 
        title="Add a Shadow"
        onClick={() => console.log('Add a Shadow')}
        styles={{
            backgroundColor: "#2b62e4",
            padding: "15px",
            border: "1px solid white",
            borderRadius: "10px",
            color: "white",
            fontSize: "14px",
        }}
        />
    </div>
  )
}
