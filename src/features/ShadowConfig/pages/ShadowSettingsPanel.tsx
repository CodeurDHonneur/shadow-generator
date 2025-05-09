import React from 'react';
import styles from '../styles/ShadowSettingsPanel.module.css';
import ShadowHeader from '../features/ShadowHeader';
import ShadowContent from '../features/ShadowContent';


export default function ShadowSettingsPanel() {
  return (
    <div className={styles.container}>
        <ShadowHeader />
        <ShadowContent />
    </div>
  )
}
