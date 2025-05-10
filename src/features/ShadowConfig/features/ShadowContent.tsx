import React from 'react'
import ShadowList from './ShadowList'
import styles from "../styles/ShadowContent.module.css"
import type { ShadowPropsType } from '../../../core/types/ensembleTypes';

type ShadowContentProps = ShadowPropsType;

export default function ShadowContent({configShadow, setConfigShadow}: ShadowContentProps) {

  return (
    <div className={styles.container}>
      
      <ShadowList 
      configShadow={configShadow}
      setConfigShadow={setConfigShadow}
      />

    </div>
  )
}
