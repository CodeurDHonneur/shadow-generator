import React from 'react';
import styles from '../styles/ShadowSettingsPanel.module.css';
import ShadowHeader from '../features/ShadowHeader';
import ShadowContent from '../features/ShadowContent';
import type { ShadowPropsType } from '../../../core/types/ensembleTypes';


type ShadowSettingsPanelProps = ShadowPropsType;


export default function ShadowSettingsPanel({ configShadow, setConfigShadow }: ShadowSettingsPanelProps) {
  return (
    <div className={styles.container}>
      <ShadowHeader />
      <ShadowContent
        configShadow={configShadow}
        setConfigShadow={setConfigShadow}
      />
    </div>
  )
}
