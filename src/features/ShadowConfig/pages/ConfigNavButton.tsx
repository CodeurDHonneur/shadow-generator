import React from 'react';
import Button from '../../../components/Button';
import styles from '../styles/ConfigNavButton.module.css';


export default function ConfigNavButton() {
    
    const style = {
        backgroundColor: "#fff",
        padding: "10px",
        border: "1px solid #ccc",
        borderBottom: "0px",
    }

    const paramButtons = [
        {id: 1, title: "Shadow", onClick: () => console.log("Shadow")},
        {id: 2, title: "BoxPanel", onClick: () => console.log("BoxPanel")},
    ]
  
    return (
    <div className={styles.contener}>
        {paramButtons.map((button) => (
            <Button 
            title={button.title}
            onClick={button.onClick}
            styles={style}
            key={button.id}
            />
        ))}
    </div>
  )
}
