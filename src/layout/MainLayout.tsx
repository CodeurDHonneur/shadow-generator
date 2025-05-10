import React from 'react'
import styles from '../styles/MainLayout.module.css'
import ShadowConfig from '../features/ShadowConfig/ShadowConfig'
import ShadowView from '../features/ShadowView/ShadowView'

export default function MainLayout() {
   const [configShadow, setConfigShadow] = React.useState({
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 0,
      spreadOffset: 0,
      color: "#000000",
    });

  return (
    <div className={styles.mainLayout}>
      <ShadowConfig 
      configShadow={configShadow}
      setConfigShadow={setConfigShadow}
      />
      <ShadowView 
      configShadow={configShadow}/>
    </div>
  )
}
