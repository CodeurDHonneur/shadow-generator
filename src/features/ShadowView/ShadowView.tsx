import React from 'react'
import Button from '../../components/Button'
import styles from "./styles/ShadowView.module.css"

type ShadowViewProps = {
  configShadow: {
    horizontalOffset: number;
    verticalOffset: number;
    blurRadius: number;
    spreadOffset: number;
    color: string;
}
}
export default function ShadowView({configShadow}: ShadowViewProps) {
  console.log(configShadow)


  return (
    <div className={styles.container}>
      <Button 
        title="Get the code"
        onClick={() => console.log("Get the code")}
        styles={{
          backgroundColor:"#2b62e4",
          padding: "15px",
          border: "1px solid #f2f4f5",
          borderRadius: "10px",
          width: "150px",
          color: "white",
        }}
      />
      <div 
      style={{
       boxShadow: `${configShadow.horizontalOffset}px ${configShadow.verticalOffset}px ${configShadow.blurRadius}px ${configShadow.spreadOffset}px ${configShadow.color}`
      }}
      className={styles.shadowView}></div>
    </div>
  )
}
