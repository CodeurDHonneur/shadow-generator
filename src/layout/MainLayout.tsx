import React from 'react'
import styles from '../styles/MainLayout.module.css'
import ShadowConfig from '../features/ShadowConfig/ShadowConfig'
import ShadowView from '../features/ShadowView/ShadowView'

export default function MainLayout() {
  return (
    <div className={styles.mainLayout}>
      <ShadowConfig />
      <ShadowView />
    </div>
  )
}
